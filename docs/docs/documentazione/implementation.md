---
sidebar_position: 4
sidebar_label: "Implementazione"
---

# Implementazione

Di seguito verranno riportate alcune rilevanti scelte implementative.

## Programmazione funzionale

* **Strutture dati immutabili**: tutte le strutture dati realizzate (con poche eccezioni) sono immutabili. Ci si
aspetta dunque che nel caso in cui la libreria venga utilizzata in un contesto di programmazione concorrente 
gli aggiustamenti che dovranno essere apportati saranno minimi se non nulli. 
Di seguito un esempio di struttura dati immutabile.
  ```scala
  private case class PrologProgramImpl(
    staticTheory: Theory,
    dynamicTheory: Theory,
    goal: Option[Term]
  ) extends PrologProgram:
    override def setStaticTheory(theory: Theory): PrologProgram =
      PrologProgramImpl(theory, dynamicTheory, goal)
    override def setDynamicTheory(theory: Theory): PrologProgram =
      PrologProgramImpl(staticTheory, theory, goal)
    override def withGoal(goal: Term): PrologProgram =
      PrologProgramImpl(staticTheory, dynamicTheory, Some(goal))
  ```
* **Higher-order functions**:
  ```scala
    object BinaryRecursiveStruct:
      def wrapIfNecessary(strategy: Seq[Term] => BinaryRecursiveStruct)(args: Term*): Term = args.size match
        case 0 => throw IllegalArgumentException("Cannot create a goal from an empty sequence")
        case 1 => args.head
        case _ => strategy(args)
  ```
  Il linguaggio Scala offre supporto diretto al pattern Strategy, grazie all'esistenza delle funzioni *higher-order*.
  Di seguito è riportato l'esempio in cui la strategia per binarizzare una sequenza di termini viene passata alla 
  funzione `BinaryRecursiveStruct.wrapIfNecessary` tramite la funzione `Conjunction.apply`. 
  
  ```scala
  object Conjunction:
    def wrapIfNecessary(args: Term*): Term =
      BinaryRecursiveStruct.wrapIfNecessary(Conjunction.apply)(args*)
  ```
* **Pattern matching**:
  La struttura principale del linguaggio Prolog è il *termine*. Si tratta di una struttura ad albero dove i nodi sono
  a loro volta dei termini o suoi sottotipi. Il pattern matching è stato principalmente utile per determinare in maniera
  idiomatica il tipo dei nodi della struttura. Di seguito un esempio:
  ```scala
  object BinaryToFlatVisitor extends TermVisitor[Seq[Term]]:
    override def visit(tuple: BinaryRecursiveStruct): Seq[Term] = tuple match
      case Tuple(l, r @ Tuple(_, _)) => Seq(l) ++ visit(r)
      case Tuple(l, r)               => Seq(l, r)
  ```
  ciò è reso possibile grazie alla destrutturazione di BinaryRecursiveStruct:

  ```scala
  object Tuple:
    def unapply(tuple: BinaryRecursiveStruct): Option[(Term, Term)] =
      Option((tuple.left, tuple.right))
  ```

## Feature di linguaggio

* **Companion objects**: Questa feature del linguaggio Scala ha permesso di mantenere le implementazioni dei
  trait della libreria ed ottemperare all'item 64 di Effective Java (*Refer to object by their interfaces*). Inoltre
  tale meccanismo facilita l'implementazione del pattern *Static Factory*.
  ```scala
  trait Variable extends Term:
    val name: String
    // ...
  object Variable:
    def anonymous(): Variable = Var("_")
    private case class Var(name: String) extends Variable:
      override def asTerm: Term = this
  ```
* Implicit conversions
  Il meccanismo delle conversioni implicite è stato utilizzato nei casi in cui si è presentata un'incompatibilità tra
  tipi. Ad esempio, il funtore di un predicato è un atomo il quale è a sua volta una sequenza di caratteri e dunque una stringa.
  Per questo motivo è stata introdotta una **given Conversion** che all'occorrenza converte le stringe in atomo e permette 
  di usare direttamente una stringa ogni volta che ci si aspetta un atomo.

  ```scala
  protected[dsl] trait DSLConversions:
    dsl: PrologDSL =>
    given Conversion[String, Atom] = atomOf(_)
    given Conversion[AnyVal, Constant] = {
      case boolean: Boolean      => atomOf(if (boolean) "true" else "false")
      case other: (Int | Double) => numOf(other)
    }
    given Conversion[Struct, Fact] = factOf(_)
    given Conversion[Seq[Term], PrologList] = list(_*)
    given Conversion[TermConvertible, Term] = _.toTerm
  ```
* Traits
  * **Self type**: Nella porzione di codice precedente viene esemplificato l'utilizzo che è stato fatto dei 
  *self type*. Il trait DSLConversion potrà essere utilizzato solo in combinazione con il trait PrologDSL. 
  Chi utilizzerà la libreria non potrà sfruttare le conversioni implicite se non nel contesto di un PrologDSL.

  * Template method pattern
  Il seguente trait svolge il ruolo di Classe astratta. I metodi `lazySolve`, `solutionOf` e `hasSolutionOf` 
  sono dei metodi di *template*. Essi richiedono che gli implementatori del trait forniscano un'implementazione 
  del metodo `solve`.
  
  ```scala
  trait Solver:
    def solve(program: PrologProgram): Iterator[Solution]
    def lazySolve(program: PrologProgram): LazyList[Solution] =
      solve(program).to(LazyList)
    def solutionsOf(program: PrologProgram): Seq[Solution] =
      solve(program).to(Seq)
    def hasSolutionFor(program: PrologProgram): Boolean =
      val solutions = solve(program)
      solutions.hasNext && solutions.next().isInstanceOf[Solution.Yes]
  ``` 
* Extension functions
  * **Pimp my library**: pattern fondamentale per la costruzione del dsl. Ha permesso di aggiungere funzionalità 
  a classi già definite senza modificarne l'interfaccia.
  ```scala
  protected[dsl] trait DSLExtensions:
    dsl: PrologDSL =>
    extension (atom: Atom)
      def apply(terms: Term*): Struct = Struct(atom, terms*)
    extension (struct: Struct)
      def :-(body: Term): Rule = Rule(struct, body)
  ```
  Le estensioni definite nel trait DSLExtensions abilitano sintassi come la seguente per la creazione di regole:
  
  ```scala
  val rule: Rule = "grandfather"(X, Y) :- ("father"(X, Z) &: "father"(Z, Y))
  ```
  
* Context functions
  Per abilitare la seguente sintassi:
  ```scala
  prolog:
    programTheory:
      clause { "father"("abraham", "terach") }
    goal:
      "father"(X, "terach")
  ```
  
  che di fatto costituisce un builder per un programma prolog, è stato fatto uso delle context function.

  ```scala
  var prologProgram = ???  
  def prolog(program: PrologProgram ?=> Unit): PrologProgram =
    prologProgram = PrologProgram.empty
    given p: PrologProgram = prologProgram
    program
    prologProgram
  ```
  Il metodo `prolog` ha un parametro `program` il cui tipo è quello di una funzione che accetta come unico parametro un `PrologProgram` 
  che si aspetta di trovare nel contesto come *given instance*. Ciò vale anche per i metodi `programTheory` e `goal`.

## Struttura dei package

![package_diagram](/img/diagrams/packages.png)
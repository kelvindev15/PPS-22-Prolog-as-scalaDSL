---
sidebar_position: 4
sidebar_label: "Implementazione"
---

# Implementazione

Di seguito verranno riportate alcune rilevanti scelte implementative.

## Programmazione funzionale

* Strutture dati immutabili
  ```scala 3
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
* High-order functions
  ```scala 3
  object Conjunction:
    def wrapIfNecessary(args: Term*): Term =
      BinaryRecursiveStruct.wrapIfNecessary(Conjunction.apply)(args*)
  ```
* Pattern matching
  ```scala 3
  object BinaryToFlatVisitor extends TermVisitor[Seq[Term]]:
    override def visit(tuple: BinaryRecursiveStruct): Seq[Term] = tuple match
      case Tuple(l, r @ Tuple(_, _)) => Seq(l) ++ visit(r)
      case Tuple(l, r)               => Seq(l, r)
  ```
  ciò è reso possibile grazie alla destrutturazione di BinaryRecursiveStruct:

  ```scala 3
  object Tuple:
    def unapply(tuple: BinaryRecursiveStruct): Option[(Term, Term)] =
      Option((tuple.left, tuple.right))
  ```

## Feature di linguaggio

* Companion objects
  ```scala 3
  trait Variable extends Term:
    val name: String
    // ...
  object Variable:
    def anonymous(): Variable = Var("_")
  ```
* Implicit conversions
  ```scala 3
  protected[dsl] trait DSLConversions:
    dsl: PrologDSL =>
    given Conversion[String, Atom] = Atom(_)
    given Conversion[AnyVal, Constant] = {
      case boolean: Boolean => Atom(if (boolean) "true" else "false")
      case other            => Constant.Numeric(other)
    }
    given Conversion[Struct, Fact] = Fact(_)
    given Conversion[Seq[Term], PrologList] = PrologList(_*)
    given Conversion[TermConvertible, Term] = _.toTerm
  ```
* Trait
  * Mixins
  ```scala 3
  class TestDeclarativePrologDSL
    extends AnyFunSuite
    with Matchers
    with PrologDSL
    with DeclarativeProlog:
  ```
  * Self type
  ```scala 3
  trait Visitable:
    self: (Term | TermConvertible) =>
    def accept[T](visitor: TermVisitor[T]): T
  ```
  * Template method pattern
  ```scala 3
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
  * Pimp my library
  ```scala 3
  protected[dsl] trait DSLExtensions:
    dsl: PrologDSL =>
    extension (atom: Atom)
      def apply(terms: Term*): Struct = Struct(atom, terms*)
    extension (struct: Struct)
      def :-(body: Term): Rule = Rule(struct, body)
  ```
* Union types
  ```scala 3
    object Cons:
      def apply(head: Term, tail: (PrologList | Variable)): PrologList =
        ConsImpl(head, tail)
  ```
* Context functions
  ```scala 3
  val prologProgram = PrologProgram()  
  def prolog(program: PrologProgram ?=> Unit): PrologProgram =
    given p: PrologProgram = prologProgram
    program
    prologProgram
  ```
* Type aliasing
  ```scala 3
  type Substitution = Map[Variable, Term]
  ```
* Visibility modifiers
* Class tags
  ```scala 3
  trait EngineTestUtils:
    matchers: Matchers =>
    def expect[T <: Solution](using tag: ClassTag[T])(
      solutions: Iterator[Solution]
    ): Unit =
      assert(solutions.hasNext)
      solutions.next() shouldBe a[T]
  ```

## Struttura dei package

![package_diagram](/img/diagrams/packages.png)
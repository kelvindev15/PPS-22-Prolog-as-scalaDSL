"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[449],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,d=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4,sidebar_label:"Implementazione"},i="Implementazione",l={unversionedId:"documentazione/implementation",id:"documentazione/implementation",title:"Implementazione",description:"Di seguito verranno riportate alcune rilevanti scelte implementative.",source:"@site/docs/documentazione/implementation.md",sourceDirName:"documentazione",slug:"/documentazione/implementation",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/implementation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Implementazione"},sidebar:"docSidebar",previous:{title:"Design dettagliato",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/detailed_design"}},p={},s=[{value:"Programmazione funzionale",id:"programmazione-funzionale",level:2},{value:"Feature di linguaggio",id:"feature-di-linguaggio",level:2},{value:"Struttura dei package",id:"struttura-dei-package",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"implementazione"},"Implementazione"),(0,n.kt)("p",null,"Di seguito verranno riportate alcune rilevanti scelte implementative."),(0,n.kt)("h2",{id:"programmazione-funzionale"},"Programmazione funzionale"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Strutture dati immutabili"),": tutte le strutture dati realizzate (con poche eccezioni) sono immutabili. Ci si\naspetta dunque che nel caso in cui la libreria venga utilizzata in un contesto di programmazione concorrente\ngli aggiustamenti che dovranno essere apportati saranno minimi se non nulli.\nDi seguito un esempio di struttura dati immutabile."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"private case class PrologProgramImpl(\n  staticTheory: Theory,\n  dynamicTheory: Theory,\n  goal: Option[Term]\n) extends PrologProgram:\n  override def setStaticTheory(theory: Theory): PrologProgram =\n    PrologProgramImpl(theory, dynamicTheory, goal)\n  override def setDynamicTheory(theory: Theory): PrologProgram =\n    PrologProgramImpl(staticTheory, theory, goal)\n  override def withGoal(goal: Term): PrologProgram =\n    PrologProgramImpl(staticTheory, dynamicTheory, Some(goal))\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Higher-order functions"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'  object BinaryRecursiveStruct:\n    def wrapIfNecessary(strategy: Seq[Term] => BinaryRecursiveStruct)(args: Term*): Term = args.size match\n      case 0 => throw IllegalArgumentException("Cannot create a goal from an empty sequence")\n      case 1 => args.head\n      case _ => strategy(args)\n')),(0,n.kt)("p",{parentName:"li"},"Il linguaggio Scala offre supporto diretto al pattern Strategy, grazie all'esistenza delle funzioni ",(0,n.kt)("em",{parentName:"p"},"higher-order"),".\nDi seguito \xe8 riportato l'esempio in cui la strategia per binarizzare una sequenza di termini viene passata alla\nfunzione ",(0,n.kt)("inlineCode",{parentName:"p"},"BinaryRecursiveStruct.wrapIfNecessary")," tramite la funzione ",(0,n.kt)("inlineCode",{parentName:"p"},"Conjunction.apply"),". "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object Conjunction:\n  def wrapIfNecessary(args: Term*): Term =\n    BinaryRecursiveStruct.wrapIfNecessary(Conjunction.apply)(args*)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Pattern matching"),":\nLa struttura principale del linguaggio Prolog \xe8 il ",(0,n.kt)("em",{parentName:"p"},"termine"),". Si tratta di una struttura ad albero dove i nodi sono\na loro volta dei termini o suoi sottotipi. Il pattern matching \xe8 stato principalmente utile per determinare in maniera\nidiomatica il tipo dei nodi della struttura. Di seguito un esempio:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object BinaryToFlatVisitor extends TermVisitor[Seq[Term]]:\n  override def visit(tuple: BinaryRecursiveStruct): Seq[Term] = tuple match\n    case Tuple(l, r @ Tuple(_, _)) => Seq(l) ++ visit(r)\n    case Tuple(l, r)               => Seq(l, r)\n")),(0,n.kt)("p",{parentName:"li"},"ci\xf2 \xe8 reso possibile grazie alla destrutturazione di BinaryRecursiveStruct:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object Tuple:\n  def unapply(tuple: BinaryRecursiveStruct): Option[(Term, Term)] =\n    Option((tuple.left, tuple.right))\n")))),(0,n.kt)("h2",{id:"feature-di-linguaggio"},"Feature di linguaggio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Companion objects"),": Questa feature del linguaggio Scala ha permesso di mantenere le implementazioni dei\ntrait della libreria ed ottemperare all'item 64 di Effective Java (",(0,n.kt)("em",{parentName:"p"},"Refer to object by their interfaces"),"). Inoltre\ntale meccanismo facilita l'implementazione del pattern ",(0,n.kt)("em",{parentName:"p"},"Static Factory"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'trait Variable extends Term:\n  val name: String\n  // ...\nobject Variable:\n  def anonymous(): Variable = Var("_")\n  private case class Var(name: String) extends Variable:\n    override def asTerm: Term = this\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Implicit conversions\nIl meccanismo delle conversioni implicite \xe8 stato utilizzato nei casi in cui si \xe8 presentata un'incompatibilit\xe0 tra\ntipi. Ad esempio, il funtore di un predicato \xe8 un atomo il quale \xe8 a sua volta una sequenza di caratteri e dunque una stringa.\nPer questo motivo \xe8 stata introdotta una ",(0,n.kt)("strong",{parentName:"p"},"given Conversion")," che all'occorrenza converte le stringe in atomo e permette\ndi usare direttamente una stringa ogni volta che ci si aspetta un atomo."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'protected[dsl] trait DSLConversions:\n  dsl: PrologDSL =>\n  given Conversion[String, Atom] = atomOf(_)\n  given Conversion[AnyVal, Constant] = {\n    case boolean: Boolean      => atomOf(if (boolean) "true" else "false")\n    case other: (Int | Double) => numOf(other)\n  }\n  given Conversion[Struct, Fact] = factOf(_)\n  given Conversion[Seq[Term], PrologList] = list(_*)\n  given Conversion[TermConvertible, Term] = _.toTerm\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Traits"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Self type"),": Nella porzione di codice precedente viene esemplificato l'utilizzo che \xe8 stato fatto dei\n",(0,n.kt)("em",{parentName:"p"},"self type"),". Il trait DSLConversion potr\xe0 essere utilizzato solo in combinazione con il trait PrologDSL.\nChi utilizzer\xe0 la libreria non potr\xe0 sfruttare le conversioni implicite se non nel contesto di un PrologDSL.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Template method pattern\nIl seguente trait svolge il ruolo di Classe astratta. I metodi ",(0,n.kt)("inlineCode",{parentName:"p"},"lazySolve"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"solutionOf")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"hasSolutionOf"),"\nsono dei metodi di ",(0,n.kt)("em",{parentName:"p"},"template"),". Essi richiedono che gli implementatori del trait forniscano un'implementazione\ndel metodo ",(0,n.kt)("inlineCode",{parentName:"p"},"solve"),"."))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"trait Solver:\n  def solve(program: PrologProgram): Iterator[Solution]\n  def lazySolve(program: PrologProgram): LazyList[Solution] =\n    solve(program).to(LazyList)\n  def solutionsOf(program: PrologProgram): Seq[Solution] =\n    solve(program).to(Seq)\n  def hasSolutionFor(program: PrologProgram): Boolean =\n    val solutions = solve(program)\n    solutions.hasNext && solutions.next().isInstanceOf[Solution.Yes]\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Extension functions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pimp my library"),": pattern fondamentale per la costruzione del dsl. Ha permesso di aggiungere funzionalit\xe0\na classi gi\xe0 definite senza modificarne l'interfaccia.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"protected[dsl] trait DSLExtensions:\n  dsl: PrologDSL =>\n  extension (atom: Atom)\n    def apply(terms: Term*): Struct = Struct(atom, terms*)\n  extension (struct: Struct)\n    def :-(body: Term): Rule = Rule(struct, body)\n")),(0,n.kt)("p",{parentName:"li"},"Le estensioni definite nel trait DSLExtensions abilitano sintassi come la seguente per la creazione di regole:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val rule: Rule = "grandfather"(X, Y) :- ("father"(X, Z) &: "father"(Z, Y))\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Context functions\nPer abilitare la seguente sintassi:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'prolog:\n  programTheory:\n    clause { "father"("abraham", "terach") }\n  goal:\n    "father"(X, "terach")\n')),(0,n.kt)("p",{parentName:"li"},"che di fatto costituisce un builder per un programma prolog, \xe8 stato fatto uso delle context function."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"var prologProgram = ???  \ndef prolog(program: PrologProgram ?=> Unit): PrologProgram =\n  prologProgram = PrologProgram.empty\n  given p: PrologProgram = prologProgram\n  program\n  prologProgram\n")),(0,n.kt)("p",{parentName:"li"},"Il metodo ",(0,n.kt)("inlineCode",{parentName:"p"},"prolog")," ha un parametro ",(0,n.kt)("inlineCode",{parentName:"p"},"program")," il cui tipo \xe8 quello di una funzione che accetta come unico parametro un ",(0,n.kt)("inlineCode",{parentName:"p"},"PrologProgram"),"\nche si aspetta di trovare nel contesto come ",(0,n.kt)("em",{parentName:"p"},"given instance"),". Ci\xf2 vale anche per i metodi ",(0,n.kt)("inlineCode",{parentName:"p"},"programTheory")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"goal"),"."))),(0,n.kt)("h2",{id:"struttura-dei-package"},"Struttura dei package"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"package_diagram",src:a(492).Z,width:"543",height:"258"})))}u.isMDXComponent=!0},492:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/packages-2866f497cf43e7a6c91aadf1189e501c.png"}}]);
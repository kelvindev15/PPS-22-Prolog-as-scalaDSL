"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[449],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(d,l(l({ref:t},m),{},{components:a})):r.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4,sidebar_label:"Implementazione"},l="Implementazione",i={unversionedId:"documentazione/implementation",id:"documentazione/implementation",title:"Implementazione",description:"Di seguito verranno riportate alcune rilevanti scelte implementative.",source:"@site/docs/documentazione/implementation.md",sourceDirName:"documentazione",slug:"/documentazione/implementation",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/implementation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Implementazione"},sidebar:"docSidebar",previous:{title:"Design dettagliato",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/detailed_design"}},s={},p=[{value:"Programmazione funzionale",id:"programmazione-funzionale",level:2},{value:"Feature di linguaggio",id:"feature-di-linguaggio",level:2},{value:"Struttura dei package",id:"struttura-dei-package",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"implementazione"},"Implementazione"),(0,n.kt)("p",null,"Di seguito verranno riportate alcune rilevanti scelte implementative."),(0,n.kt)("h2",{id:"programmazione-funzionale"},"Programmazione funzionale"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Strutture dati immutabili"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"  private case class PrologProgramImpl(\n    staticTheory: Theory,\n    dynamicTheory: Theory,\n    goal: Option[Term]\n) extends PrologProgram:\n  override def setStaticTheory(theory: Theory): PrologProgram =\n    PrologProgramImpl(theory, dynamicTheory, goal)\n  override def setDynamicTheory(theory: Theory): PrologProgram =\n    PrologProgramImpl(staticTheory, theory, goal)\n  override def withGoal(goal: Term): PrologProgram =\n    PrologProgramImpl(staticTheory, dynamicTheory, Some(goal))\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"High-order functions"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object Conjunction:\n  def wrapIfNecessary(args: Term*): Term =\n    BinaryRecursiveStruct.wrapIfNecessary(Conjunction.apply)(args*)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pattern matching"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object BinaryToFlatVisitor extends TermVisitor[Seq[Term]]:\n  override def visit(tuple: BinaryRecursiveStruct): Seq[Term] = tuple match\n    case Tuple(l, r @ Tuple(_, _)) => Seq(l) ++ visit(r)\n    case Tuple(l, r)               => Seq(l, r)\n")),(0,n.kt)("p",{parentName:"li"},"ci\xf2 \xe8 reso possibile grazie alla destrutturazione di BinaryRecursiveStruct:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object Tuple:\n  def unapply(tuple: BinaryRecursiveStruct): Option[(Term, Term)] =\n    Option((tuple.left, tuple.right))\n")))),(0,n.kt)("h2",{id:"feature-di-linguaggio"},"Feature di linguaggio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Companion objects",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'trait Variable extends Term:\n  val name: String\n  // ...\nobject Variable:\n  def anonymous(): Variable = Var("_")\n'))),(0,n.kt)("li",{parentName:"ul"},"Implicit conversions",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'protected[dsl] trait DSLConversions:\n  dsl: PrologDSL =>\n  given Conversion[String, Atom] = Atom(_)\n  given Conversion[AnyVal, Constant] = {\n    case boolean: Boolean => Atom(if (boolean) "true" else "false")\n    case other            => Constant.Numeric(other)\n  }\n  given Conversion[Struct, Fact] = Fact(_)\n  given Conversion[Seq[Term], PrologList] = PrologList(_*)\n  given Conversion[TermConvertible, Term] = _.toTerm\n'))),(0,n.kt)("li",{parentName:"ul"},"Trait",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Mixins")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"class TestDeclarativePrologDSL\n  extends AnyFunSuite\n  with Matchers\n  with PrologDSL\n  with DeclarativeProlog:\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Self type")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"trait Visitable:\n  self: (Term | TermConvertible) =>\n  def accept[T](visitor: TermVisitor[T]): T\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Template method pattern")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"trait Solver:\n  def solve(program: PrologProgram): Iterator[Solution]\n  def lazySolve(program: PrologProgram): LazyList[Solution] =\n    solve(program).to(LazyList)\n  def solutionsOf(program: PrologProgram): Seq[Solution] =\n    solve(program).to(Seq)\n  def hasSolutionFor(program: PrologProgram): Boolean =\n    val solutions = solve(program)\n    solutions.hasNext && solutions.next().isInstanceOf[Solution.Yes]\n"))),(0,n.kt)("li",{parentName:"ul"},"Extension functions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Pimp my library")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"protected[dsl] trait DSLExtensions:\n  dsl: PrologDSL =>\n  extension (atom: Atom)\n    def apply(terms: Term*): Struct = Struct(atom, terms*)\n  extension (struct: Struct)\n    def :-(body: Term): Rule = Rule(struct, body)\n"))),(0,n.kt)("li",{parentName:"ul"},"Union types",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"  object Cons:\n    def apply(head: Term, tail: (PrologList | Variable)): PrologList =\n      ConsImpl(head, tail)\n"))),(0,n.kt)("li",{parentName:"ul"},"Context functions",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"val prologProgram = PrologProgram()  \ndef prolog(program: PrologProgram ?=> Unit): PrologProgram =\n  given p: PrologProgram = prologProgram\n  program\n  prologProgram\n"))),(0,n.kt)("li",{parentName:"ul"},"Type aliasing",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"type Substitution = Map[Variable, Term]\n"))),(0,n.kt)("li",{parentName:"ul"},"Visibility modifiers"),(0,n.kt)("li",{parentName:"ul"},"Class tags",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"trait EngineTestUtils:\n  matchers: Matchers =>\n  def expect[T <: Solution](using tag: ClassTag[T])(\n    solutions: Iterator[Solution]\n  ): Unit =\n    assert(solutions.hasNext)\n    solutions.next() shouldBe a[T]\n")))),(0,n.kt)("h2",{id:"struttura-dei-package"},"Struttura dei package"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"package_diagram",src:a(492).Z,width:"543",height:"258"})))}u.isMDXComponent=!0},492:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/packages-2866f497cf43e7a6c91aadf1189e501c.png"}}]);
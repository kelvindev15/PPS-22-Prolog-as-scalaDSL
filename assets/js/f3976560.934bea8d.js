"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[844],{629:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=r(5893),t=r(1151);const s={title:"Scala project Template"},o="Prolog as Scala DSL",c={type:"mdx",permalink:"/PPS-22-Prolog-as-scalaDSL/",source:"@site/src/pages/index.md",title:"Scala project Template",description:"Prolog-as-scalaDSL is a library providing a DSL for writing Prolog programs in scala.",frontMatter:{title:"Scala project Template"},unlisted:!1},l={},i=[{value:"How to use",id:"how-to-use",level:2},{value:"Demo",id:"demo",level:2},{value:"Other features",id:"other-features",level:2},{value:"Conjunction and conjunction of goals",id:"conjunction-and-conjunction-of-goals",level:3},{value:"Lists",id:"lists",level:3},{value:"Builtin predicates",id:"builtin-predicates",level:3},{value:"Use cases",id:"use-cases",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"prolog-as-scala-dsl",children:"Prolog as Scala DSL"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:r(1553).Z+"",width:"895",height:"378"})}),"\n",(0,n.jsx)(a.p,{children:"Prolog-as-scalaDSL is a library providing a DSL for writing Prolog programs in scala."}),"\n",(0,n.jsx)(a.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Add the following library dependency in your build file.","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["for sbt:","\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:' libraryDependencies += "io.github.kelvindev15" % "prolog-as-scaladsl_3" % "<version>"\n'})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["for gradle:","\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'implementation("io.github.kelvindev15:prolog-as-scaladsl_3:<version>")\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["Replace ",(0,n.jsx)(a.code,{children:"<version>"})," with the desired of latest version of the library."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"demo",children:"Demo"}),"\n",(0,n.jsxs)(a.p,{children:["Using the DSL is as simple as extending the ",(0,n.jsx)(a.code,{children:"PrologDSL"})," trait. Let's write a program."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'object Demo extends PrologDSL:\n  def main(args: Array[String]): Unit =\n    val program = PrologProgram(Theory(\n      factOf(structOf(atomOf("father"), atomOf("abraham"), atomOf("isaac"))),\n      factOf(structOf(atomOf("father"), atomOf("terach"), atomOf("abraham"))),\n      ruleOf(\n        structOf(atomOf("grandfather"), varOf("X"), varOf("Y")),\n        structOf(atomOf("father"), varOf("X"), varOf("Z")) and\n          structOf(atomOf("father"), varOf("Z"), varOf("Y")))),\n    )\n\n    for\n      solution <- Solver solve (\n        program withGoal structOf(atomOf("father"), atomOf("abraham"), atomOf("isaac")))\n    do println(solution)\n'})}),"\n",(0,n.jsx)(a.p,{children:"Here's the output:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:"Yes(father(abraham, isaac),Map())\n"})}),"\n",(0,n.jsx)(a.p,{children:"As you can tell the writing of the prolog program is a bit difficult since we had to specify what is a struct, what\nis an atom or a variable, etc... Fortunately we are in scala so we can take advantage of that:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'val father = atomOf("father")\nval grandfather = atomOf("grandfather")\nval abraham = atomOf("abraham")\nval isaac = atomOf("isaac")\nval terach = atomOf("terach")\nval X = varOf("X")\nval Y = varOf("Y")\nval Z = varOf("Z")\n\nval program = PrologProgram(Theory(\n  factOf(structOf(father, abraham, isaac)),\n  factOf(structOf(father, terach, abraham)),\n  ruleOf(structOf(grandfather, X, Y), structOf(father, X, Z) and structOf(father, Z, Y))),\n)\n'})}),"\n",(0,n.jsx)(a.p,{children:"Now the program was easier to write, but, still we had to introduce a lot of variables in order to achieve that.\nLuckily the DSL come with some of predefined structures such as variables and moreover strings are automatically converted\nto atoms!"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'val program = PrologProgram(theory(\n  factOf(structOf("father", "abraham", "isaac")),\n  factOf(structOf("father", "terach", "abraham")),\n  ruleOf(structOf("grandfather", X, Y), structOf("father", X, Z) and structOf("father", Z, Y))),\n)\n'})}),"\n",(0,n.jsx)(a.p,{children:"In order to resemble the prolog syntax, string can be invoked to create structures:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'val program = PrologProgram(theory(\n  factOf("father"("abraham", "isaac")),\n  factOf("father"("terach", "abraham")),\n  ruleOf("grandfather"(X, Y), "father"(X, Z) and "father"(Z, Y)),\n))\n'})}),"\n",(0,n.jsx)(a.p,{children:'The grandfather rule can be written in a "more prolog" way as:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'"grandfather"(X, Y) :- ("father"(X, Z) &: "father"(Z, Y))\n'})}),"\n",(0,n.jsx)(a.p,{children:"Whenever a clause is expected (e.g the arguments of the theory method), structure are automatically converted to fact.\nSo here's a cleaner way to write the program."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'val program = PrologProgram(theory(\n  "father"("abraham", "isaac"),\n  "father"("terach", "abraham"),\n  "grandfather"(X, Y) :- ("father"(X, Z) &: "father"(Z, Y)))\n)\n'})}),"\n",(0,n.jsx)(a.p,{children:"Let's make some other queries:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'for\n  goal <- Seq(\n    "grandfather"("abraham", "isaac"),\n    "father"(A, "isaac"),\n    "father"(F, S)\n  )\n  solution <- Solver solve (program withGoal goal)\ndo println(solution)\n\n/* OUTPUT:\n No(grandfather(abraham, isaac))\n Yes(father(A, isaac),Map(A -> abraham))\n Yes(father(F, S),Map(F -> abraham, S -> isaac))\n Yes(father(F, S),Map(F -> terach, S -> abraham))\n*/\n'})}),"\n",(0,n.jsx)(a.p,{children:"As you can see some solutions have a mapping (substitution). In this cases we can access a variable substitution directly\nfrom the solution:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'for\n  solution <- Solver solve (program withGoal "father"(F, S))\ndo\n  for\n    father <- solution(F)\n    son <- solution(S) \n  do println(s"$father is the father of $son")\n  \n/* OUTPUT\n abraham is the father of isaac\n terach is the father of abraham\n */\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Program may be written in a more declarative way. All we need is to mixin the ",(0,n.jsx)(a.code,{children:"DeclarativeProlog"})," trait."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'object Demo extends PrologDSL with DeclarativeProlog:\n  def main(args: Array[String]): Unit =\n    val program = prolog:\n      programTheory:\n        clause { "father"("abraham", "isaac") }\n        clause { "father"("terach", "abraham") }\n        clause { "grandfather"(X, Y) :- ("father"(X, Z) &: "father"(Z, Y)) }\n      goal:\n        "father"(F, S)\n        \n    for solution <- Solver solve program do println(solution)\n'})}),"\n",(0,n.jsxs)(a.p,{children:["If you want, you may split your theory in a ",(0,n.jsx)(a.code,{children:"staticTheory"})," and a ",(0,n.jsx)(a.code,{children:"dynamicTheory"}),"\n(",(0,n.jsx)(a.code,{children:"programTheory"})," is an alias of `dynamicTheory)."]}),"\n",(0,n.jsx)(a.p,{children:"A Solver may be used just to satisfy goals in the following way:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'for solution <- Solver query member(X, list("a", "b", "c")) do println(solution)\n/*\n  Yes(member(X, [a, b, c]),Map(X -> a))\n  Yes(member(X, [a, b, c]),Map(X -> b))\n  Yes(member(X, [a, b, c]),Map(X -> c))\n  No(member(X, [a, b, c]))\n */\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Notice that ",(0,n.jsx)(a.code,{children:"member"})," and ",(0,n.jsx)(a.code,{children:"list"})," and many others are facility methods to create their correspondent predicates."]}),"\n",(0,n.jsxs)(a.p,{children:["The trait ",(0,n.jsx)(a.code,{children:"TermConvertible"})," gives you the possibility to interpret your object as if they were terms. You just need\nto specify how to convert them to term. Here's a cumbersome but explicative example:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'def father(f: String, s: String): TermConvertible = new TermConvertible:\n  override def toTerm: Struct = "father"(f, s)\n'})}),"\n",(0,n.jsx)(a.h2,{id:"other-features",children:"Other features"}),"\n",(0,n.jsx)(a.h3,{id:"conjunction-and-conjunction-of-goals",children:"Conjunction and conjunction of goals"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'object Demo extends PrologDSL:\n  def main(args: Array[String]): Unit =\n    // Conjunctions\n    println(&&("a", "b", "c")) // a, b, c\n    println("a" &: "b" &: "c")\n    println("a" and "b" and "c")\n    // Disjunctions\n    println(||("a", "b", "c")) // a; b; c\n    println("a" |: "b" |: "c")\n    println("a" or "b" or "c")\n'})}),"\n",(0,n.jsx)(a.h3,{id:"lists",children:"Lists"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",metastring:"3",children:'object Demo extends PrologDSL:\n  def main(args: Array[String]): Unit =\n    println(list("a", "b", "c")) // [a, b, c]\n    println(cons("a", cons("b", cons("c", nil)))) // [a, b, c]\n    println(cons(X, Y)) // [X, Y]\n    println(cons(X)(Y)) // emulates [X | Y]\n    println(head(1, 2, 3) | X) // emulates [1, 2, 3 | X]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"builtin-predicates",children:"Builtin predicates"}),"\n",(0,n.jsx)(a.p,{children:"Here's a list of prolog builtins available in the library:"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"true/0"}),", ",(0,n.jsx)(a.code,{children:"fail/0"}),", ",(0,n.jsx)(a.code,{children:"var/1"}),", ",(0,n.jsx)(a.code,{children:"nonvar/1"}),", ",(0,n.jsx)(a.code,{children:"atom/1"}),", ",(0,n.jsx)(a.code,{children:"number/1"}),", ",(0,n.jsx)(a.code,{children:"atomic/1"}),", ",(0,n.jsx)(a.code,{children:"clause/2"}),", ",(0,n.jsx)(a.code,{children:"asserta/1"}),", ",(0,n.jsx)(a.code,{children:"assertz/1"}),",\n",(0,n.jsx)(a.code,{children:"retract/1"}),", ",(0,n.jsx)(a.code,{children:"member/2"}),", ",(0,n.jsx)(a.code,{children:"ground/1"}),", ",(0,n.jsx)(a.code,{children:"append/2"}),", ",(0,n.jsx)(a.code,{children:"call/1"}),", ",(0,n.jsx)(a.code,{children:"once/1"}),", ",(0,n.jsx)(a.code,{children:"not/1"}),", ",(0,n.jsx)(a.code,{children:"functor/3"}),", ",(0,n.jsx)(a.code,{children:"arg/3"}),", ",(0,n.jsx)(a.code,{children:"=../2"}),",\n",(0,n.jsx)(a.code,{children:"findall/3"}),", ",(0,n.jsx)(a.code,{children:"op/3"}),", ",(0,n.jsx)(a.code,{children:"length/2"}),", ",(0,n.jsx)(a.code,{children:"[]/0"}),",",(0,n.jsx)(a.code,{children:"atom_chars/2"}),", ",(0,n.jsx)(a.code,{children:"number_chars/2"}),", ",(0,n.jsx)(a.code,{children:"!/0"}),", ",(0,n.jsx)(a.code,{children:"repeat/0"}),", ",(0,n.jsx)(a.code,{children:"call/1"}),", ",(0,n.jsx)(a.code,{children:"\\\\+/1"}),",\n",(0,n.jsx)(a.code,{children:"=\\1"}),", ",(0,n.jsx)(a.code,{children:"==/2"})," (as strictEq), ",(0,n.jsx)(a.code,{children:"op/3"}),", ",(0,n.jsx)(a.code,{children:"is/2"}),", ",(0,n.jsx)(a.code,{children:"+/2"}),", ",(0,n.jsx)(a.code,{children:"-/2"}),", ",(0,n.jsx)(a.code,{children:"*/2"}),", ",(0,n.jsx)(a.code,{children:"//2"}),", ",(0,n.jsx)(a.code,{children:"///2"}),", ",(0,n.jsx)(a.code,{children:"mod/2"}),", ",(0,n.jsx)(a.code,{children:"=:=/2"}),", ",(0,n.jsx)(a.code,{children:"=\\\\=/2"}),", ",(0,n.jsx)(a.code,{children:"</2"}),", ",(0,n.jsx)(a.code,{children:">/2"}),",\n",(0,n.jsx)(a.code,{children:">=/2"}),", ",(0,n.jsx)(a.code,{children:"=</2"}),", ",(0,n.jsx)(a.code,{children:"@</2"}),", ",(0,n.jsx)(a.code,{children:"@>/2"}),", ",(0,n.jsx)(a.code,{children:"@=</2"}),", ",(0,n.jsx)(a.code,{children:"@>=/2"})]}),"\n",(0,n.jsx)(a.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/kelvin-olaiya/PPS-22-prolog-as-scalaDSL-demo",children:"Chess Project"})," by ",(0,n.jsx)(a.a,{href:"https://github.com/jahrim",children:"@jahrim"})," et al."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1553:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/Prolog_as_scalaDSL_BOW-a53dfb0d7631556089c426ebe73b7bd8.png"},1151:(e,a,r)=>{r.d(a,{Z:()=>c,a:()=>o});var n=r(7294);const t={},s=n.createContext(t);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
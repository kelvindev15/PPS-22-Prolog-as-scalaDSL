"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{9479:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(5893),o=n(1151);const s={sidebar_position:0,sidebar_label:"Analisi"},l="Dominio",a={id:"documentazione/analysis",title:"Dominio",description:"Prolog \xe8 un linguaggio di programmazione basato sul paradigma di programmazione logica.",source:"@site/docs/documentazione/analysis.md",sourceDirName:"documentazione",slug:"/documentazione/analysis",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/analysis",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Analisi"},sidebar:"docSidebar",previous:{title:"Documentazione",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/category/documentazione"},next:{title:"Requisiti",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/requirements"}},t={},d=[{value:"I costrutti della programmazione logica in Prolog",id:"i-costrutti-della-programmazione-logica-in-prolog",level:2},{value:"Fatto",id:"fatto",level:3},{value:"Interrogazione",id:"interrogazione",level:3},{value:"Regola",id:"regola",level:3},{value:"Sintassi del linguaggio Prolog",id:"sintassi-del-linguaggio-prolog",level:2},{value:"Termini",id:"termini",level:3},{value:"Constanti",id:"constanti",level:3},{value:"Variabili",id:"variabili",level:3},{value:"Sostituzioni di variabili",id:"sostituzioni-di-variabili",level:4},{value:"Termini composti",id:"termini-composti",level:3},{value:"Operatori",id:"operatori",level:3},{value:"Posizione",id:"posizione",level:4},{value:"Precedenza",id:"precedenza",level:4},{value:"Associativit\xe0",id:"associativit\xe0",level:4},{value:"Operatori in Prolog",id:"operatori-in-prolog",level:4},{value:"Strutture dati",id:"strutture-dati",level:3},{value:"Liste",id:"liste",level:4},{value:"Predicati &quot;built-in&quot;",id:"predicati-built-in",level:3},{value:"Predicati",id:"predicati",level:4},{value:"Risoluzione",id:"risoluzione",level:5},{value:"Classificatione dei termini",id:"classificatione-dei-termini",level:5},{value:"Backtracking",id:"backtracking",level:5},{value:"Costruzione di termini composti",id:"costruzione-di-termini-composti",level:5},{value:"Uguaglianza",id:"uguaglianza",level:5},{value:"Aritmetici",id:"aritmetici",level:5},{value:"Confronto fra termini",id:"confronto-fra-termini",level:5},{value:"Riferimenti",id:"riferimenti",level:6}];function c(i){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...i.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"dominio",children:"Dominio"})}),"\n",(0,r.jsxs)(e.p,{children:["Prolog \xe8 un linguaggio di programmazione basato sul paradigma di programmazione logica.\nUn ",(0,r.jsx)(e.strong,{children:"programma logico"})," \xe8 un insieme di ",(0,r.jsx)(e.em,{children:"assiomi"})," o ",(0,r.jsx)(e.em,{children:"regole"})," che definiscono ",(0,r.jsx)(e.em,{children:"relazioni"})," tra oggetti.",(0,r.jsx)(e.br,{}),"\n","In Prolog un oggetto \xe8 tutto ci\xf2 che si pu\xf2 rappresentare tramite un ",(0,r.jsx)(e.a,{href:"#termini",children:(0,r.jsx)(e.em,{children:"termine"})}),".\nUn programma Prolog consiste di un insieme di clausole, ciascuna delle quali codifica una data informazione come\nun fatto o una regola.\nLa computazione di un programma logico in Prolog ha come obiettivo la deduzione di conseguenze logiche del programma."]}),"\n",(0,r.jsx)(e.h2,{id:"i-costrutti-della-programmazione-logica-in-prolog",children:"I costrutti della programmazione logica in Prolog"}),"\n",(0,r.jsxs)(e.p,{children:["Tre sono i concetti alla base della programmazione logica: ",(0,r.jsx)(e.em,{children:"fatti"}),", ",(0,r.jsx)(e.em,{children:"regole"})," e ",(0,r.jsx)(e.em,{children:"interrogazioni"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"fatto",children:"Fatto"}),"\n",(0,r.jsxs)(e.p,{children:["Esprime l'esistenza di una relazione tra oggetti/termini. Si compone del nome della relazione,\ndetto anche ",(0,r.jsx)(e.em,{children:"predicato"}),", e di un numero arbitrario di ",(0,r.jsx)(e.em,{children:"argomenti"}),". In Prolog una collezione di fatti (e ",(0,r.jsx)(e.a,{href:"#regola",children:"regole"}),"),\nprende il nome di ",(0,r.jsx)(e.em,{children:"database"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"interrogazione",children:"Interrogazione"}),"\n",(0,r.jsxs)(e.p,{children:["Permette di interrogare un programma logico per verificare se una certa relazione \xe8 o meno una conseguenza logica\ndel programma. Una conseguenza logica si stabilisce tramite l'applicazione delle regole\ndi ",(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Deductive_reasoning",children:"deduzione logica"}),".\nUn interrogazione consiste di una lista di goal che devono essere soddisfatti con un algoritmo di\n",(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Unification_(computer_science)",children:"unificazione"}),". Con goal si intende una relazione tra\noggetti/termini (equivalentemente a quanto si \xe8 detto per un fatto). Qualora non sia possibile soddisfare completamente\nla lista di goal, l'esito dell'interrogazione sar\xe0 negativo, altrimenti sar\xe0 positivo ed eventualmente comprender\xe0 anche\nuna lista si sostituzioni di ",(0,r.jsx)(e.a,{href:"#variabili",children:"variabili"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"regola",children:"Regola"}),"\n",(0,r.jsx)(e.p,{children:"Detta anche inferenza, mette in relazione un fatto con un insieme di altri fatti. Si compone di una testa\n(goal) e di un corpo. Il corpo di una regola consiste di una lista di goal, in congiunzione tra loro.\nUna regola pu\xf2 avere un corpo vuoto. Un fatto \xe8 il caso degenere di una regola il cui corpo \xe8 vuoto."}),"\n",(0,r.jsx)(e.h2,{id:"sintassi-del-linguaggio-prolog",children:"Sintassi del linguaggio Prolog"}),"\n",(0,r.jsx)(e.h3,{id:"termini",children:"Termini"}),"\n",(0,r.jsxs)(e.p,{children:["Il ",(0,r.jsx)(e.strong,{children:"termine"})," \xe8 l'unica e fondamentale struttura dati in Prolog. I termini possono essere ",(0,r.jsx)(e.em,{children:"costanti"}),", ",(0,r.jsx)(e.em,{children:"variabili"}),"\no ",(0,r.jsx)(e.em,{children:"termini composti"})," (chiamati anche ",(0,r.jsx)(e.em,{children:"strutture"}),")."]}),"\n",(0,r.jsx)(e.h3,{id:"constanti",children:"Constanti"}),"\n",(0,r.jsxs)(e.p,{children:["Le constanti sono ci\xf2 che danno il nome agli oggetti o alle relazioni. Possono essere di due tipi: ",(0,r.jsx)(e.em,{children:"atomi"})," o ",(0,r.jsx)(e.em,{children:"numeri"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Gli atomi si compongo di lettere e/o cifre. Il primo carattere di un atomo deve essere un lettera minuscola.",(0,r.jsx)(e.br,{}),"\n","Non ci sono vincoli sulla composizione della sequenza di caratteri se questa \xe8 racchiusa tra apici ",(0,r.jsx)(e.code,{children:"''"}),".",(0,r.jsx)(e.br,{}),"\n","Gli atomi possono contenere anche i simboli ",(0,r.jsx)(e.code,{children:"+"}),", ",(0,r.jsx)(e.code,{children:"-"})," ",(0,r.jsx)(e.code,{children:"*"}),",",(0,r.jsx)(e.code,{children:"/"}),", ",(0,r.jsx)(e.code,{children:"\\ "}),",",(0,r.jsx)(e.code,{children:"~"}),", ",(0,r.jsx)(e.code,{children:"^"}),",",(0,r.jsx)(e.code,{children:"<"}),", ",(0,r.jsx)(e.code,{children:">"}),", ",(0,r.jsx)(e.code,{children:":"}),", ",(0,r.jsx)(e.code,{children:"."}),", ",(0,r.jsx)(e.code,{children:"?"}),", ",(0,r.jsx)(e.code,{children:"@"}),",\n",(0,r.jsx)(e.code,{children:"#"}),", ",(0,r.jsx)(e.code,{children:"$"}),", ",(0,r.jsx)(e.code,{children:"&"}),". La sequenza di caratteri pu\xf2 contenere il carattere ",(0,r.jsx)(e.code,{children:"_"})," per aumentare la leggibilit\xe0."]}),"\n",(0,r.jsxs)(e.li,{children:["Le costanti numeriche hanno la rappresentazione dei numeri reali ed ammette la notazione esponenziale (es. ",(0,r.jsx)(e.em,{children:"-2.67e2"}),")."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"variabili",children:"Variabili"}),"\n",(0,r.jsxs)(e.p,{children:["Permettono di riferirsi ad un termine senza specificarlo direttamente. Un termine che non contiene variabili si dice\n",(0,r.jsx)(e.em,{children:"termine base"})," (o ",(0,r.jsx)(e.em,{children:"termine ground"}),").",(0,r.jsx)(e.br,{}),"\n","La sintassi delle variabili \xe8 la stessa degli atomi con la differenza che il carattere iniziale delle variabili \xe8\nuna lettera maiuscola oppure il carattere ",(0,r.jsx)(e.code,{children:"_"}),". Non \xe8 possibile racchiudere le variabili tra apici.\nIl solo carattere ",(0,r.jsx)(e.code,{children:"_"})," denota una variabile anonima."]}),"\n",(0,r.jsx)(e.h4,{id:"sostituzioni-di-variabili",children:"Sostituzioni di variabili"}),"\n",(0,r.jsxs)(e.p,{children:["Una ",(0,r.jsx)(e.em,{children:"sostituzione"})," \xe8 una mappa che dato un insieme di variabili, associa a ciascuna di esse un termine.\nIn una sostituzione i termini non possono contenere nessuna delle variabili considerate nella sostituzione.\nLe sostituzioni possono essere applicate a dei termini. L'applicazione di una sostituzione ",(0,r.jsx)(e.code,{children:"S"})," ad un termine ",(0,r.jsx)(e.code,{children:"t0"}),"\nconsiste nella sostituzione di tutte le variabili ",(0,r.jsx)(e.code,{children:"X"})," che appaiono in ",(0,r.jsx)(e.code,{children:"t0"})," con i rispettivi termini ",(0,r.jsx)(e.code,{children:"t"}),", per ciascuna\ndelle coppie ",(0,r.jsx)(e.code,{children:"X=t"})," nella sostituzione ",(0,r.jsx)(e.code,{children:"S"}),". Il risultato di una sostituzione prende il nome di ",(0,r.jsx)(e.em,{children:"istanza"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"termini-composti",children:"Termini composti"}),"\n",(0,r.jsxs)(e.p,{children:["Un termine composto viene detto anche ",(0,r.jsx)(e.em,{children:"struttura"}),". Si tratta di un oggetto che raggruppa un insieme (anche vuoto)\ndi altri oggetti, che sono le componenti della struttura. Una struttura si denota con un funtore e le sue componenti.\nI funtori sono atomi e le componenti sono termini. Le componenti sono racchiuse da parentesi tonde e separate\nda virgole. Il funtore si scrive prima della parentesi di apertura. Il numero di componenti di cui \xe8 composta una\nstruttura determina la sua ",(0,r.jsx)(e.em,{children:"arit\xe0"}),". Data una struttura con funtore ",(0,r.jsx)(e.em,{children:"f"})," con ",(0,r.jsx)(e.em,{children:"n"})," componenti, l'indicatore della struttura\n\xe8 ",(0,r.jsx)(e.code,{children:"f/n"}),"."]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:'La sintassi per rappresentare fatti, regole ed interrogazioni \xe8 quella dei termini composti.\nIn generale in Prolog vale la filosofia "Everything is a term", infatti persino un programma prolog pu\xf2 essere visto\ncome un termine. (magari spiega meglio).'}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"operatori",children:"Operatori"}),"\n",(0,r.jsxs)(e.p,{children:["Sono non sono nient'altro che funtori che vengono scritti come se fossero degli operatori.\nAd esempio l'espressione ",(0,r.jsx)(e.code,{children:"x + y * z"}),", che contiene gli operatori ",(0,r.jsx)(e.code,{children:"+"})," e ",(0,r.jsx)(e.code,{children:"*"})," corrispondono alla\nstruttura ",(0,r.jsx)(e.code,{children:"+(x, *(y, z))"})," dove gli operatori diventano funtori. Tre sono le caratteristiche degli operatori:\nla ",(0,r.jsx)(e.em,{children:"posizione"}),", la ",(0,r.jsx)(e.em,{children:"precedenza"})," e l' ",(0,r.jsx)(e.em,{children:"associativit\xe0"}),"."]}),"\n",(0,r.jsx)(e.h4,{id:"posizione",children:"Posizione"}),"\n",(0,r.jsx)(e.p,{children:"Sulla base della posizione gli operatori si dividono in:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Operatori infissi, posizionati fra gli argomenti (es. ",(0,r.jsx)(e.code,{children:"x + y"}),")"]}),"\n",(0,r.jsxs)(e.li,{children:["Operatori prefissi, posizionati prima dell'argomento (es. ",(0,r.jsx)(e.code,{children:"-x"}),")"]}),"\n",(0,r.jsxs)(e.li,{children:["Operatori postfissi, posizionati dopo l'argomento (es. ",(0,r.jsx)(e.code,{children:"x!"}),")"]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"precedenza",children:"Precedenza"}),"\n",(0,r.jsx)(e.p,{children:"Ciascun operatore ha una classe di precedenza denotata da un numero intero. Ad interi pi\xf9 piccoli corrisponde\nuna priorit\xe0 pi\xf9 alta."}),"\n",(0,r.jsx)(e.h4,{id:"associativit\xe0",children:"Associativit\xe0"}),"\n",(0,r.jsx)(e.p,{children:"L'associativit\xe0 entra in gioco quando si ha che fare con pi\xf9 operatori che hanno la stessa precedenza.\nGli operatori possono essere associativi a destra o a sinistra."}),"\n",(0,r.jsx)(e.h4,{id:"operatori-in-prolog",children:"Operatori in Prolog"}),"\n",(0,r.jsx)(e.p,{children:"Un elenco di operatori disponibili in prolog:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"="})," operatore di uguaglianza"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"=:="})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"=\\="})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"<"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:">"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"=<"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"=<"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"is"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"+"}),", ",(0,r.jsx)(e.code,{children:"-"}),", ",(0,r.jsx)(e.code,{children:"*"}),", ",(0,r.jsx)(e.code,{children:"/"}),", ",(0,r.jsx)(e.code,{children:"//"}),", ",(0,r.jsx)(e.code,{children:"mod"})]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"strutture-dati",children:"Strutture dati"}),"\n",(0,r.jsx)(e.h4,{id:"liste",children:"Liste"}),"\n",(0,r.jsxs)(e.p,{children:["In Prolog le liste si costruiscono tramite una struttura binaria. Il primo argomento della struttura contiene\nun elemento della lista mentre il secondo contiene in modo ricorsivo il resto della lista. Il funtore della lista \xe8 il\ncarattere ",(0,r.jsx)(e.code,{children:"."}),", mentre l'atomo ",(0,r.jsx)(e.code,{children:"[]"})," denota una lista vuota \xe8 pu\xf2 essere utilizzato per terminare una lista.\nTuttavia \xe8 possibile utilizzare una sintassi pi\xf9 comoda: ",(0,r.jsx)(e.code,{children:"[X|Y]"})," per denotare ",(0,r.jsx)(e.code,{children:".(X, Y)"}),". Qui ",(0,r.jsx)(e.code,{children:"X"})," denota la testa della\nlista mentre ",(0,r.jsx)(e.code,{children:"Y"})," la coda."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Formale"}),(0,r.jsxs)("th",{children:["Notazione con ",(0,r.jsx)("code",{children:"[]"})]}),(0,r.jsx)("th",{children:"Sintassi semplificata"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:".(a, [])"}),(0,r.jsx)("td",{children:"[a|[]]"}),(0,r.jsx)("td",{children:"[a]"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:".(a, .(b, []))"}),(0,r.jsx)("td",{children:"[a|[b|[]]]"}),(0,r.jsx)("td",{children:"[a, b]"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:".(a, .(b, .(c, [])))"}),(0,r.jsx)("td",{children:"[a|[b|[c|[]]]]"}),(0,r.jsx)("td",{children:"[a, b, c]"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:".(a, X)"}),(0,r.jsx)("td",{children:"[a|X]"}),(0,r.jsx)("td",{children:"[a|X]"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:".(a, .(b, X))"}),(0,r.jsx)("td",{children:"[a|[b|X]]"}),(0,r.jsx)("td",{children:"[a, b|X]"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"predicati-built-in",children:'Predicati "built-in"'}),"\n",(0,r.jsxs)(e.p,{children:['I predicati built-in sono quei predicati la cui definizione \xe8 "a priori" in quanto non \xe8 possibile definirli per mezzo\ndella sintassi del linguaggio. Altri predicati built-in sono solo predicati che facilitano la scrittura dei programmi.\nAlcuni predicati potrebbero richiedere particolari tipi di argomenti (es. per il predicato ',(0,r.jsx)(e.code,{children:"<"})," si richiede\nche gli argomenti siano dei numeri). Cosa succede nel caso in cui questi requisiti non vengano rispettati dipende dalla\nspecifica implementazione del motore che eseguira il programma."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"':-'(X, Y)"})," (operatore infisso)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"','(X, Y)"})," (operatore infisso)."]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"predicati",children:"Predicati"}),"\n",(0,r.jsx)(e.h5,{id:"risoluzione",children:"Risoluzione"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"true"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"fail"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"var(X)"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"nonvar(X)"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"atom(X)"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"number(X)"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"atomic(X)"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"classificatione-dei-termini",children:"Classificatione dei termini"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"clause(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"asserta(X)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"assertz(X)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"retract(X)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"functor(T, F, N)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"arg(N, T, A)"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"'=..'(X, L)"})," (operatore infisso)"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"atom_chars(A, L)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"number_chars(A, L)"})}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"backtracking",children:"Backtracking"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"!"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"repeat"})}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"costruzione-di-termini-composti",children:"Costruzione di termini composti"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"';'(X, Y)"})," (operatore infisso)"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"call(X)"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"'\\+'(X)"})," (operatore infisso)"]}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"uguaglianza",children:"Uguaglianza"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"'='(X, Y)"})," (operatore infisso)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"'=='(X, Y)"})," (operatore infisso)"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"op(X, Y, Z)"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"is(X, Y)"})," (operatore infisso)"]}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"aritmetici",children:"Aritmetici"}),"\n",(0,r.jsx)(e.p,{children:"I seguenti sono tutti operatori infissi."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'+'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'-'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'*'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'/'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'//'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"mod(X, Y)"})}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"confronto-fra-termini",children:"Confronto fra termini"}),"\n",(0,r.jsx)(e.p,{children:"I seguenti sono tutti operatori infissi."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'=:='(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'=\\='(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'<'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'>'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'>='(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'=<'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'@<'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'@>'(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'@>='(X, Y)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"'@=<'(X, Y)"})}),"\n"]}),"\n",(0,r.jsx)(e.h6,{id:"riferimenti",children:"Riferimenti"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://link.springer.com/book/10.1007/978-3-642-55481-0",children:"Programming in Prolog, using the ISO standard - W. F. Clocksin, C. S. Mellish"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://mitpress.mit.edu/9780262691635/the-art-of-prolog/",children:"The Art of Prolog - L. Sterling, E. Shapiro"})}),"\n"]})]})}function h(i={}){const{wrapper:e}={...(0,o.a)(),...i.components};return e?(0,r.jsx)(e,{...i,children:(0,r.jsx)(c,{...i})}):c(i)}},1151:(i,e,n)=>{n.d(e,{Z:()=>a,a:()=>l});var r=n(7294);const o={},s=r.createContext(o);function l(i){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:l(i.components),r.createElement(s.Provider,{value:e},i.children)}}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:(e,i,t)=>{t.d(i,{Zo:()=>s,kt:()=>k});var a=t(7294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,a,n=function(e,i){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),m=function(e){var i=a.useContext(p),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},s=function(e){var i=m(e.components);return a.createElement(p.Provider,{value:i},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},c=a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(t),c=n,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return t?a.createElement(k,o(o({ref:i},s),{},{components:t})):a.createElement(k,o({ref:i},s))}));function k(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var p in i)hasOwnProperty.call(i,p)&&(l[p]=i[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2733:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=t(7462),n=(t(7294),t(3905));const r={sidebar_position:0,sidebar_label:"Analisi"},o="Dominio",l={unversionedId:"documentazione/analysis",id:"documentazione/analysis",title:"Dominio",description:"Prolog \xe8 un linguaggio di programmazione basato sul paradigma di programmazione logica.",source:"@site/docs/documentazione/analysis.md",sourceDirName:"documentazione",slug:"/documentazione/analysis",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/analysis",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Analisi"},sidebar:"docSidebar",previous:{title:"Documentazione",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/category/documentazione"},next:{title:"Requisiti",permalink:"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/requirements"}},p={},m=[{value:"I costrutti della programmazione logica in Prolog",id:"i-costrutti-della-programmazione-logica-in-prolog",level:2},{value:"Fatto",id:"fatto",level:3},{value:"Interrogazione",id:"interrogazione",level:3},{value:"Regola",id:"regola",level:3},{value:"Sintassi del linguaggio Prolog",id:"sintassi-del-linguaggio-prolog",level:2},{value:"Termini",id:"termini",level:3},{value:"Constanti",id:"constanti",level:3},{value:"Variabili",id:"variabili",level:3},{value:"Sostituzioni di variabili",id:"sostituzioni-di-variabili",level:4},{value:"Termini composti",id:"termini-composti",level:3},{value:"Operatori",id:"operatori",level:3},{value:"Posizione",id:"posizione",level:4},{value:"Precedenza",id:"precedenza",level:4},{value:"Associativit\xe0",id:"associativit\xe0",level:4},{value:"Operatori in Prolog",id:"operatori-in-prolog",level:4},{value:"Strutture dati",id:"strutture-dati",level:3},{value:"Liste",id:"liste",level:4},{value:"Predicati &quot;built-in&quot;",id:"predicati-built-in",level:3},{value:"Predicati dinamici",id:"predicati-dinamici",level:4},{value:"Predicati",id:"predicati",level:4},{value:"Inserimento di nuove clausole",id:"inserimento-di-nuove-clausole",level:5},{value:"Risoluzione",id:"risoluzione",level:5},{value:"Classificatione dei termini",id:"classificatione-dei-termini",level:5},{value:"Backtracking",id:"backtracking",level:5},{value:"Costruzione di termini composti",id:"costruzione-di-termini-composti",level:5},{value:"Uguaglianza",id:"uguaglianza",level:5},{value:"Aritmetici",id:"aritmetici",level:5},{value:"Confronto fra termini",id:"confronto-fra-termini",level:5},{value:"Ispezione di un programma Prolog",id:"ispezione-di-un-programma-prolog",level:5}],s={toc:m},u="wrapper";function d(e){let{components:i,...t}=e;return(0,n.kt)(u,(0,a.Z)({},s,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dominio"},"Dominio"),(0,n.kt)("p",null,"Prolog \xe8 un linguaggio di programmazione basato sul paradigma di programmazione logica.\nUn ",(0,n.kt)("strong",{parentName:"p"},"programma logico")," \xe8 un insieme di ",(0,n.kt)("em",{parentName:"p"},"assiomi")," o ",(0,n.kt)("em",{parentName:"p"},"regole")," che definiscono ",(0,n.kt)("em",{parentName:"p"},"relazioni")," tra oggetti.",(0,n.kt)("br",{parentName:"p"}),"\n","In Prolog un oggetto \xe8 tutto ci\xf2 che si pu\xf2 rappresentare tramite un ",(0,n.kt)("a",{parentName:"p",href:"."},(0,n.kt)("em",{parentName:"a"},"termine")),".\nUn programma Prolog consiste di un insieme di clausole, ciascuna delle quali codifica una data informazione come\nun fatto o una regola.\nLa computazione di un programma logico in Prolog ha come obiettivo la deduzione di conseguenze logiche del programma."),(0,n.kt)("h2",{id:"i-costrutti-della-programmazione-logica-in-prolog"},"I costrutti della programmazione logica in Prolog"),(0,n.kt)("p",null,"Tre sono i concetti alla base della programmazione logica: ",(0,n.kt)("em",{parentName:"p"},"fatti"),", ",(0,n.kt)("em",{parentName:"p"},"regole")," e ",(0,n.kt)("em",{parentName:"p"},"interrogazioni"),"."),(0,n.kt)("h3",{id:"fatto"},"Fatto"),(0,n.kt)("p",null,"Esprime l'esistenza di una relazione tra oggetti/termini. Si compone del nome della relazione,\ndetto anche ",(0,n.kt)("em",{parentName:"p"},"predicato"),", e di un numero arbitrario di ",(0,n.kt)("em",{parentName:"p"},"argomenti"),". In Prolog una collezione di fatti (e ",(0,n.kt)("a",{parentName:"p",href:"."},"regole"),"),\nprende il nome di ",(0,n.kt)("em",{parentName:"p"},"database"),"."),(0,n.kt)("h3",{id:"interrogazione"},"Interrogazione"),(0,n.kt)("p",null,"Permette di interrogare un programma logico per verificare se una certa relazione \xe8 o meno una conseguenza logica\ndel programma. Una conseguenza logica si stabilisce tramite l'applicazione delle regole\ndi ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deductive_reasoning"},"deduzione logica"),".\nUn interrogazione consiste di una lista di goal che devono essere soddisfatti con un algoritmo di\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unification_(computer_science)"},"unificazione"),". Con goal si intende una relazione tra\noggetti/termini (equivalentemente a quanto si \xe8 detto per un fatto). Qualora non sia possibile soddisfare completamente\nla lista di goal, l'esito dell'interrogazione sar\xe0 negativo, altrimenti sar\xe0 positivo ed eventualmente comprender\xe0 anche\nuna lista si sostituzioni di ",(0,n.kt)("a",{parentName:"p",href:"."},"variabili"),"."),(0,n.kt)("h3",{id:"regola"},"Regola"),(0,n.kt)("p",null,"Detta anche inferenza, mette in relazione un fatto con un insieme di altri fatti. Si compone di una testa\n(goal) e di un corpo. Il corpo di una regola consiste di una lista di goal, in congiunzione tra loro.\nUna regola pu\xf2 avere un corpo vuoto. Un fatto \xe8 il caso degenere di una regola il cui corpo \xe8 vuoto."),(0,n.kt)("h2",{id:"sintassi-del-linguaggio-prolog"},"Sintassi del linguaggio Prolog"),(0,n.kt)("h3",{id:"termini"},"Termini"),(0,n.kt)("p",null,"Il ",(0,n.kt)("strong",{parentName:"p"},"termine")," \xe8 l'unica e fondamentale struttura dati in Prolog. I termini possono essere ",(0,n.kt)("em",{parentName:"p"},"costanti"),", ",(0,n.kt)("em",{parentName:"p"},"variabili"),"\no ",(0,n.kt)("em",{parentName:"p"},"termini composti")," (chiamati anche ",(0,n.kt)("em",{parentName:"p"},"strutture"),")."),(0,n.kt)("h3",{id:"constanti"},"Constanti"),(0,n.kt)("p",null,"Le constanti sono ci\xf2 che danno il nome agli oggetti o alle relazioni. Possono essere di due tipi: ",(0,n.kt)("em",{parentName:"p"},"atomi")," o ",(0,n.kt)("em",{parentName:"p"},"numeri"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gli atomi si compongo di lettere e/o cifre. Il primo carattere di un atomo deve essere un lettera minuscola.",(0,n.kt)("br",{parentName:"li"}),"Non ci sono vincoli sulla composizione della sequenza di caratteri se questa \xe8 racchiusa tra apici ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),".",(0,n.kt)("br",{parentName:"li"}),"Gli atomi possono contenere anche i simboli ",(0,n.kt)("inlineCode",{parentName:"li"},"+"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"-")," ",(0,n.kt)("inlineCode",{parentName:"li"},"*"),",",(0,n.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"\\ "),",",(0,n.kt)("inlineCode",{parentName:"li"},"~"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"^"),",",(0,n.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,n.kt)("inlineCode",{parentName:"li"},">"),", ",(0,n.kt)("inlineCode",{parentName:"li"},":"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"."),", ",(0,n.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"@"),",\n",(0,n.kt)("inlineCode",{parentName:"li"},"#"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"$"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"&"),". La sequenza di caratteri pu\xf2 contenere il carattere ",(0,n.kt)("inlineCode",{parentName:"li"},"_")," per aumentare la leggibilit\xe0."),(0,n.kt)("li",{parentName:"ul"},"Le costanti numeriche hanno la rappresentazione dei numeri reali ed ammette la notazione esponenziale (es. ",(0,n.kt)("em",{parentName:"li"},"-2.67e2"),").")),(0,n.kt)("h3",{id:"variabili"},"Variabili"),(0,n.kt)("p",null,"Permettono di riferirsi ad un termine senza specificarlo direttamente. Un termine che non contiene variabili si dice\n",(0,n.kt)("em",{parentName:"p"},"termine base")," (o ",(0,n.kt)("em",{parentName:"p"},"termine ground"),").",(0,n.kt)("br",{parentName:"p"}),"\n","La sintassi delle varibili \xe8 la stessa degli atomi con la differenza che il carattere iniziale delle variabili \xe8\nuna lettera maiuscola oppure il carattere ",(0,n.kt)("inlineCode",{parentName:"p"},"_"),". Non \xe8 possibile racchiudere le varibili tra apici.\nIl solo carattere ",(0,n.kt)("inlineCode",{parentName:"p"},"_")," denota una variabile anonima."),(0,n.kt)("h4",{id:"sostituzioni-di-variabili"},"Sostituzioni di variabili"),(0,n.kt)("p",null,"Una ",(0,n.kt)("em",{parentName:"p"},"sostituzione")," \xe8 una mappa che dato un insieme di variabili, associa a ciascuna di esse un termine.\nIn una sostituzione i termini non possono contenere nessuna delle variabili considerate nella sostituzione.\nLe sostituzioni possono essere applicate a dei termini. L'applicazione di una sostituzione ",(0,n.kt)("inlineCode",{parentName:"p"},"S")," ad un termine ",(0,n.kt)("inlineCode",{parentName:"p"},"t0"),"\nconsiste nella sostitutzione di tutte le variabili ",(0,n.kt)("inlineCode",{parentName:"p"},"X")," che appaiono in ",(0,n.kt)("inlineCode",{parentName:"p"},"t0")," con i rispettivi termini ",(0,n.kt)("inlineCode",{parentName:"p"},"t"),", per ciascuna\ndelle coppie ",(0,n.kt)("inlineCode",{parentName:"p"},"X=t")," nella sostituzione ",(0,n.kt)("inlineCode",{parentName:"p"},"S"),". Il risultato di una sostituione prende il nome di ",(0,n.kt)("em",{parentName:"p"},"istanza"),". "),(0,n.kt)("h3",{id:"termini-composti"},"Termini composti"),(0,n.kt)("p",null,"Un termine composto vengono detto anche ",(0,n.kt)("em",{parentName:"p"},"struttura"),". Si tratta di un oggetto che raggruppa un insieme (anche vuoto)\ndi altri oggetti, che sono le componenti della struttura. Una struttura si denota con un funtore e le sue componenti.\nI funtori sono atomi e le componenti sono termini. Le componenti sono racchiuse da parentesi tonde e separate\nda virgole. Il funtore di scrive prima della parentesi di apertura. Il numero di componenti di cui \xe8 composta una\nstruttura determina la sua ",(0,n.kt)("em",{parentName:"p"},"arit\xe0"),". Data una struttura con funtore ",(0,n.kt)("em",{parentName:"p"},"f")," con ",(0,n.kt)("em",{parentName:"p"},"n")," componenti, l'indicatore della struttura\n\xe8 ",(0,n.kt)("inlineCode",{parentName:"p"},"f/n"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'La sintassi per rappresentare fatti, regole ed interrogazioni \xe8 quella dei termini composti.\nIn generale in Prolog vale la filosofia "Everything is a term", infatti persino un programma prolog pu\xf2 essere visto\ncome un termine. (magari spiega meglio).')),(0,n.kt)("h3",{id:"operatori"},"Operatori"),(0,n.kt)("p",null,"Sono non sono nient'altro che funtori che vengono scritti come se fossero degli operatori.\nAd esempio l'espressione ",(0,n.kt)("inlineCode",{parentName:"p"},"x + y * z"),", che contiene gli operatori ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," corrispondono alla\nstruttura ",(0,n.kt)("inlineCode",{parentName:"p"},"+(x, *(y, z))")," dove gli operatori diventano funtori. Tre sono le caratteristiche degli operatori:\nla ",(0,n.kt)("em",{parentName:"p"},"posizione"),", la ",(0,n.kt)("em",{parentName:"p"},"precedenza")," e l' ",(0,n.kt)("em",{parentName:"p"},"associativit\xe0"),"."),(0,n.kt)("h4",{id:"posizione"},"Posizione"),(0,n.kt)("p",null,"Sulla base della posizione gli operatori si dividono in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Operatori infissi, posizionati fra gli argomenti (es. ",(0,n.kt)("inlineCode",{parentName:"li"},"x + y"),") "),(0,n.kt)("li",{parentName:"ul"},"Operatori prefissi, posizionati prima dell'argomento (es. ",(0,n.kt)("inlineCode",{parentName:"li"},"-x"),")"),(0,n.kt)("li",{parentName:"ul"},"Operatori postfissi, posizionati dopo l'argomento (es. ",(0,n.kt)("inlineCode",{parentName:"li"},"x!"),")")),(0,n.kt)("h4",{id:"precedenza"},"Precedenza"),(0,n.kt)("p",null,"Ciascun operatore ha una classe di precedenza denotata da un numero intero. Ad interi pi\xf9 piccoli corrisponde\nuna priorit\xe0 pi\xf9 alta."),(0,n.kt)("h4",{id:"associativit\xe0"},"Associativit\xe0"),(0,n.kt)("p",null,"L'associativit\xe0 entra in gioco quando si ha che fare con pi\xf9 operatori che hanno la stessa precedenza.\nGli operatori possono essere associativi a destra o a sinistra."),(0,n.kt)("h4",{id:"operatori-in-prolog"},"Operatori in Prolog"),(0,n.kt)("p",null,"Un elenco di operatori disponibili in prolog:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"=")," operatore di uguaglianza"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"=:=")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"=\\=")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},">")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"=<")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"=<")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"is")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"-"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"//"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"mod")," ")),(0,n.kt)("h3",{id:"strutture-dati"},"Strutture dati"),(0,n.kt)("h4",{id:"liste"},"Liste"),(0,n.kt)("p",null,"In Prolog le liste si costruiscono tramite una struttura binaria. Il primo argomento della struttura contiene\nun elemento della lista mentre il secondo contiene in modo ricorsivo il resto della lista. Il funtore della lista \xe8 il\ncarattere ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", mentre l'atomo ",(0,n.kt)("inlineCode",{parentName:"p"},"[]")," denota una lista vuota \xe8 pu\xf2 essere utilizzato per terminare una lista.\nTuttavia \xe8 possibile utilizzare una sintassi pi\xf9 comoda: ",(0,n.kt)("inlineCode",{parentName:"p"},"[X|Y]")," per denotare ",(0,n.kt)("inlineCode",{parentName:"p"},".(X, Y)"),". Qui ",(0,n.kt)("inlineCode",{parentName:"p"},"X")," denota la testa della\nlista mentre ",(0,n.kt)("inlineCode",{parentName:"p"},"Y")," la coda."),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Formale"),(0,n.kt)("th",null,"Notazione con ",(0,n.kt)("code",null,"[]")),(0,n.kt)("th",null,"Sintassi semplificata"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,".(a, [])"),(0,n.kt)("td",null,"[a|[]]"),(0,n.kt)("td",null,"[a]")),(0,n.kt)("tr",null,(0,n.kt)("td",null,".(a, .(b, []))"),(0,n.kt)("td",null,"[a|[b|[]]]"),(0,n.kt)("td",null,"[a, b]")),(0,n.kt)("tr",null,(0,n.kt)("td",null,".(a, .(b, .(c, [])))"),(0,n.kt)("td",null,"[a|[b|[c|[]]]]"),(0,n.kt)("td",null,"[a, b, c]")),(0,n.kt)("tr",null,(0,n.kt)("td",null,".(a, X)"),(0,n.kt)("td",null,"[a|X]"),(0,n.kt)("td",null,"[a|X]")),(0,n.kt)("tr",null,(0,n.kt)("td",null,".(a, .(b, X))"),(0,n.kt)("td",null,"[a|[b|X]]"),(0,n.kt)("td",null,"[a, b|X]")))),(0,n.kt)("h3",{id:"predicati-built-in"},'Predicati "built-in"'),(0,n.kt)("p",null,'I predicati built-in sono quei predicati la cui definizione \xe8 "a priori" in quanto non \xe8 possibile definirli per mezzo\ndella sintassi del linguaggio. Altri predicati built-in sono solo predicati che facilitano la scrittura dei programmi.\nAlcuni predicati potrebbero richiedere particolari tipi di argomenti (es. per il predicato ',(0,n.kt)("inlineCode",{parentName:"p"},"<")," si richiede\nche gli argomenti siano dei numeri). Cosa succede nel caso in cui questi requisiti non vengano rispettati dipende dalla\nspecifica implementazione del motore che eseguira il programma."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"':-'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"','(X, Y)")," infix")),(0,n.kt)("h4",{id:"predicati-dinamici"},"Predicati dinamici"),(0,n.kt)("h4",{id:"predicati"},"Predicati"),(0,n.kt)("h5",{id:"inserimento-di-nuove-clausole"},"Inserimento di nuove clausole"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"consult(X)")," ")),(0,n.kt)("h5",{id:"risoluzione"},"Risoluzione"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"true"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"fail"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"var(X)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"nonvar(X)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"atom(X)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"number(X)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"atomic(X)")))),(0,n.kt)("h5",{id:"classificatione-dei-termini"},"Classificatione dei termini"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"clause(X, Y)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"asserta(X)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"assertz(X)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"retract(X)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"listing(A)")," --\x3e A is instantiated to an atom"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"functor(T, F, N)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"arg(N, T, A)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'=..'(X, L)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"atom_chars(A, L)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"number_chars(A, L)"))),(0,n.kt)("h5",{id:"backtracking"},"Backtracking"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"repeat"))),(0,n.kt)("h5",{id:"costruzione-di-termini-composti"},"Costruzione di termini composti"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"';'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"call(X)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'","\\","+'(X)")," prefix")),(0,n.kt)("h5",{id:"uguaglianza"},"Uguaglianza"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'='(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'=='(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"op(X, Y, Z)")," --\x3e atoms fx, fy, xf, yf, xfx, yfx, yfy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"is(X, Y)")," infix")),(0,n.kt)("h5",{id:"aritmetici"},"Aritmetici"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'+'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'-'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'*'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'/'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'//'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"mod(X, Y)")," infix")),(0,n.kt)("h5",{id:"confronto-fra-termini"},"Confronto fra termini"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'=:='(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'=","\\","='(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'<'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'>'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'>='(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'=<'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'@<'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'@>'(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'@>='(X, Y)")," infix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"'@=<'(X, Y)")," infix")),(0,n.kt)("h5",{id:"ispezione-di-un-programma-prolog"},"Ispezione di un programma Prolog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"trace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"notrace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"spy P")," prefix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"debugging")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"nodebug")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"nospy"))))}d.isMDXComponent=!0}}]);
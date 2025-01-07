"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[274],{971:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"documentazione/requirements","title":"Requisiti","description":"Requisiti di business","source":"@site/docs/documentazione/requirements.md","sourceDirName":"documentazione","slug":"/documentazione/requirements","permalink":"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/requirements","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Requisiti"},"sidebar":"docSidebar","previous":{"title":"Analisi","permalink":"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/analysis"},"next":{"title":"Design architetturale","permalink":"/PPS-22-Prolog-as-scalaDSL/docs/documentazione/architectural_design"}}');var l=n(4848),t=n(8453);const s={sidebar_position:1,sidebar_label:"Requisiti"},o="Requisiti",a={},d=[{value:"Requisiti di business",id:"requisiti-di-business",level:2},{value:"Requisiti funzionali",id:"requisiti-funzionali",level:2},{value:"Requisiti utente",id:"requisiti-utente",level:3},{value:"Requisiti di sistema",id:"requisiti-di-sistema",level:3},{value:"Requisiti non funzionali",id:"requisiti-non-funzionali",level:2},{value:"Requisiti d&#39;implementazione",id:"requisiti-dimplementazione",level:2}];function u(e){const i={em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"requisiti",children:"Requisiti"})}),"\n",(0,l.jsx)(i.h2,{id:"requisiti-di-business",children:"Requisiti di business"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Obiettivo del progetto \xe8 di fornire una libreria che permetta di scrivere e risolvere programmi logici utilizzando\nil linguaggio scala. Inoltre realizzare un Domain Specific Language (DSL), in scala, la cui sintassi somigli il pi\xf9\npossibile a quella del Prolog."}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"requisiti-funzionali",children:"Requisiti funzionali"}),"\n",(0,l.jsx)(i.h3,{id:"requisiti-utente",children:"Requisiti utente"}),"\n",(0,l.jsxs)(i.p,{children:["Nella descrizione dei requisiti utente si intende con ",(0,l.jsx)(i.strong,{children:"utente"})," colui che ",(0,l.jsx)(i.em,{children:"utilizzer\xe0 la libreria"}),"."]}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsxs)(i.li,{children:["L'utente deve poter costruire termini prolog. I termini sono:","\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsx)(i.li,{children:"Constanti: atomi e numeri."}),"\n",(0,l.jsx)(i.li,{children:"Variabili: anonime e non."}),"\n",(0,l.jsx)(i.li,{children:"Termini composti: predicati, congiunzioni, disgiunzioni e liste."}),"\n",(0,l.jsx)(i.li,{children:"Clausole: fatti, regole e direttive."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["I termini devono essere ispezionabili dall'utente:","\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsx)(i.li,{children:"L'utente deve poter ispezionare il valore delle costanti."}),"\n",(0,l.jsx)(i.li,{children:"L'utente deve poter ispezionare il nome delle variabili."}),"\n",(0,l.jsx)(i.li,{children:"L'utente deve poter ispezionare il funtore, l'arit\xe0 e gli argomenti dei termini composti."}),"\n",(0,l.jsx)(i.li,{children:"L'utente deve poter ispezionare la testa e il corpo delle clausole."}),"\n",(0,l.jsx)(i.li,{children:"L'utente deve poter ispezionare se un termine e base oppure no."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"Dato un insieme di clausole, l'utente deve poter costruire teorie prolog."}),"\n",(0,l.jsx)(i.li,{children:"Data una teoria statica e/o teoria dinamica, e un termine che rappresenta il goal del programma, l'utente deve\npoter costruire un programma prolog."}),"\n",(0,l.jsx)(i.li,{children:"Deve essere possibile per l'utente modificare le parti di un programma prolog: teoria statica e/o dinamica o il goal\ndel programma."}),"\n",(0,l.jsx)(i.li,{children:"Dato un programma prolog l'utente deve poter invocare un risolutore per la computazione delle soluzioni del programma."}),"\n",(0,l.jsx)(i.li,{children:"L'utente deve avere la possibilit\xe0 di scegliere se le soluzioni debbano essere computate tutte insieme oppure una per\nvolta."}),"\n",(0,l.jsx)(i.li,{children:"L'utente deve avere la possibilit\xe0 di invocare un risolutore anche per ottenere le soluzioni di un programma prolog privo\ndi una teoria composto quindi esclusivamente di un termine rappresentante un goal."}),"\n",(0,l.jsx)(i.li,{children:"L'utente per risolvere i programmi prolog deve poter scegliere tra i risolutori forniti dalla libreria oppure, tramite\nopportuna configurazione, tra risolutori compatibili implementati da terzi."}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"requisiti-di-sistema",children:"Requisiti di sistema"}),"\n",(0,l.jsxs)(i.p,{children:["Nella descrizione dei requisiti di sistema si intende con ",(0,l.jsx)(i.strong,{children:"sistema"})," la ",(0,l.jsx)(i.em,{children:"libreria"}),"."]}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsx)(i.li,{children:"Il sistema deve permette la costruzione dei termini prolog."}),"\n",(0,l.jsx)(i.li,{children:"Il sistema deve fornire un Domain Specific Language (DSL) tramite il quale sar\xe0 possibile costruire nella maniera pi\xf9\nfedele e idiomatica possibile i costrutti del linguaggio prolog."}),"\n",(0,l.jsx)(i.li,{children:"Il sistema deve essere costruito in modo tale che l'utente che intende sfruttare il DSL abbia il controllo del contesto\nin cui utilizzarlo. Vale a dire che tutte le funzionalit\xe0 che hanno a che fare specificatamente con il linguaggio prolog\ndovranno essere, all'occorrenza, abilitate dall'utente."}),"\n",(0,l.jsx)(i.li,{children:"Il sistema deve fornire un risolutore di programmi prolog predefinito."}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"requisiti-non-funzionali",children:"Requisiti non funzionali"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Qualit\xe0"}),": lo stile e la formattazione del codice sorgente verranno verificati tramite il plugin ",(0,l.jsx)(i.em,{children:"scalaFmt"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Processo"}),":","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["le pipeline di continuous integration (CI) e continuous delivery (CD) verranno eseguite su Github per mezzo delle ",(0,l.jsx)(i.em,{children:"Github Actions"}),";"]}),"\n",(0,l.jsx)(i.li,{children:"il sistema verr\xe0 rilasciato su maven central;"}),"\n",(0,l.jsxs)(i.li,{children:["il versionamento segue i principi del ",(0,l.jsx)(i.em,{children:"semantic versioning"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"requisiti-dimplementazione",children:"Requisiti d'implementazione"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Scala 3.x"}),"\n",(0,l.jsx)(i.li,{children:"JDK 17+"}),"\n",(0,l.jsx)(i.li,{children:"2p-Kt 0.31+"}),"\n",(0,l.jsxs)(i.li,{children:["Lo sviluppo, in particolar modo per quanto riguarda l'implementazione di funzionalit\xe0 core non banali, dovr\xe0 seguire\ni principi del Test Driven Development (",(0,l.jsx)(i.em,{children:"TDD"}),")."]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var r=n(6540);const l={},t=r.createContext(l);function s(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);
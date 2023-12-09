---
sidebar_position: 1
sidebar_label: "Requisiti"
---

# Requisiti

## Requisiti di business

- Obiettivo di questo progetto è di fornire una libreria che esponga un
Domain Specific Language (DSL) in Scala. Il DSL permetterà integrare la programmazione
logica direttamente in Scala, sfruttando tutti i vantaggi del caso (Quali?).

## Requisiti funzionali

### Requisiti utente

Nella descrizione dei requisiti utente si intende con **utente** colui che *utilizzerà la libreria*.

1. L'utente deve poter costruire termini prolog. I termini sono:
   1. Constanti: atomi e numeri.
   2. Variabili: anonime e non.
   3. Termini composti: predicati, congiunzioni, disgiunzioni e liste.
   4. Clausole: fatti, regole e direttive.
2. I termini devono essere ispezionabili dall'utente:
   1. L'utente deve poter ispezionare il valore delle costanti.
   2. L'utente deve poter ispezionare il nome delle variabili.
   3. L'utente deve poter ispezionare il funtore, l'arità e gli argomenti dei termini composti.
   4. L'utente deve poter ispezionare la testa e il corpo delle clausole.
   5. L'utente deve poter ispezionare se un termine e base oppure no.
3. Dato un insieme di clausole, l'utente deve poter costruire teorie prolog.
4. Data una teoria statica e/o teoria dinamica, e un termine che rappresenta il goal del programma, l'utente deve 
poter costruire un programma prolog.
5. Deve essere possibile per l'utente modificare le parti di un programma prolog: teoria statica e/o dinamica o il goal 
del programma.
6. Dato un programma prolog l'utente deve poter invocare un risolutore per la computazione delle soluzioni del programma.
7. L'utente deve avere la possibilità di scegliere se le soluzioni debbano essere computate tutte insieme oppure una per
volta.
8. L'utente deve avere la possibilità di invocare un risolutore anche per ottenere le soluzioni di un programma prolog privo
di una teoria composto quindi esclusivamente di un termine rappresentante un goal.
9. L'utente per risolvere i programmi prolog deve poter scegliere tra i risolutori forniti dalla libreria oppure, tramite
opportuna configurazione, tra risolutori compatibili implementati da terzi.

### Requisiti di sistema

Nella descrizione dei requisiti di sistema si intende con **sistema** la *libreria*.

1. Il sistema deve permette la costruzione dei termini prolog.
2. Il sistema deve fornire un Domain Specic Language (DSL) tramite il quale sarà possibile costruire nella maniera più 
fedele e idiomatica possibile i costrutti del linguaggio prolog.
3. Il sistema deve essere costruito in modo tale che l'utente che intende sfruttare il DSL abbia il controllo del contesto
in cui utilizzarlo. Vale a dire che tutte le funzionalità che hanno a che fare specificatamente con il linguaggio prolog 
dovranno essere, all'occorenza, abilitate dall'utente.
4. Il sistema deve fornire un risolutore di programmi prolog predefinito.

## Requisiti non funzionali

* **Qualità**: lo stile e la formattazione del codice sorgente verranno verificati tramite il plugin *scalaFmt*.
* **Processo**: 
  - le pipeline di continuous integration (CI) e continuous delivery (CD) verrano eseguite su Github per mezzo delle *Github Actions*;
  - il sistema verrà rilasciato su maven central;
  - il versionamento segue i principi del *semantic versioning*.

## Requisiti d'implementazione

* Scala 3.x
* JDK 17+
* 2p-Kt 0.31+
* Lo sviluppo, in particolar modo per quanto riguarda l'implementazione di funzionalità core non banali, dovrà seguire 
i principi del Test Driven Development (*TDD*).

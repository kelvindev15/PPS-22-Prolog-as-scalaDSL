---
sidebar_position: 3
sidebar_label: "Design dettagliato"
---

# Design dettagliato

Di seguito verrà riportato il design dettagliato della libreria.

## Term

![](/img/diagrams/Term.png)

Il trait `Term` rappresenta il concetto di termine in Prolog. Costituisce l'entità fondamentale dalla quale ereditano tutti
gli altri costrutti del linguaggio prolog.

A seconda della presenza o meno di variabili in un termine, il termine è un termine base o non-base.

## Constant

![](/img/diagrams/constant.png)

Una costante è un termine che racchiude un valore che può essere alfanumerico o numerico.
Le costanti alfanumeriche sono dette **atomi** e sono rappresentate dal trait `Atom`, mentre le costanti numeriche sono 
rappresentate dal trait `Numeric`. 

Un atomo è un caso particolare di termine composto (ha zero argomenti).

## Variabili

![](/img/diagrams/Variable.png)

Una variabile può essere identificata da un nome particolare oppure essere anonima (in tal caso il suo nome è `_`).

## Struct

![](/img/diagrams/Struct.png)

I termini composti, detti anche strutture, sono rappresentati dal trait `Struct`. Ogni termine è caratterizzato da un 
funtore, ossia un nome di predicato, e dai sui argomenti, che sono a loro volta dei termini. Il numero di argomenti 
di cui è costituito un termine composto determina l'arità del termine composto.

### Indicator

Un indicatore è un termine composto che descrive un predicato in termini del funtore e dell'arità del predicato.
Il funtore di un indicatore è il carattere `/` e la sua arità `2`.

### Clause

Anche le clausole, rappresentate dal trait `Clause` sono strutture il cui funtore è `:-`.

Esistono tre principali tipi di clausole:

* **Regole**: clausola con una testa e un corpo. La testa di una regola è una struttura mentre il corpo è un termine.
* **Fatti**: clausola con solo una testa. Anche in questo caso la testa di un fatto è una struttura. Un fatto può essere
considerato una regola il cui corpo è il l'atomo `true`.
* **Direttive**: clausola con solo un corpo. Anche in questo caso il corpo è un termine.

### RecursiveStruct

![](/img/diagrams/RecursiveStructs.png)

Alcuni termini composti hanno una struttura ricorsiva. Sono strutture i cui argomenti includono in maniera ricorsiva 
strutture con lo stesso predicato. 
Da una struttura è sempre possibile ottenere la lista lineare degli argomenti.

Una lista è una struttura (`PrologList`), con funtore ricorsivo `.` (`Cons`). Ogni lista termina con il funtore `[]` (`Nil`).

La maggior parte delle strutture ricorsive sono binarie (`BinaryRecursiveStruct`). È il caso di:

* Congiunzioni di goal (`Conjunction`), con funtore `,`;
* Disgiunzioni di goal (`Disjunction`), con funtore `;`;

## Theory

![](/img/diagrams/Theory.png)

Una teoria è rappresentata dal trait `Theory`. Una teoria è una lista di clausole.

## PrologProgram

![](/img/diagrams/PrologProgram.png)

Un programma prolog (`PrologProgram`) comprende:

* Una teoria dinamica
* Una teoria statica
* Un goal

## Solver

![](/img/diagrams/Solver.png)

Un `Solver`, in quanto motore di risoluzione, risolve un goal o un programma prolog e restituisce le sue soluzioni. 
Un motore può:

* restituire una soluzione alla volta;
* restituire tutte le soluzioni in una lista. 

### Solution

![](/img/diagrams/Solution.png)

Una soluzione di un programma prolog può:

* Essere una soluzione positiva (`Yes`) (il goal è una conseguenza logica della teoria).
* Essere una soluzione negativa (`No`) (il goal non è una conseguenza logica della teoria).
* Un'eccezione (`Halt`) (si è verificato un problema nella risoluzione del programma).

### Substitution

![](/img/diagrams/Substitution.png)

In caso di soluzione positiva è possibile che il motore fornisca una sostituzione. Una sostituzione 
mappa variabili a termini.

## PrologDSL

![](/img/diagrams/PrologDSL.png)

Il trait `PrologDSL` contiene i metodi e i meccanismi per poter esprimere i concetti appartenenti al mondo Prolog.
Include infatti dei metodi per costruire fatti, regole, atomi e variabili ma anche liste, congiunzioni e disgiunzioni
di goal.

## TermConvertible

Il trait `TermConvertible` fornisce un metodo per permettere a qualsiasi oggetto che lo implementa di vederlo come un
termine prolog.

## TermVisitor

`TermVisitor` è il trait che, se implementato da un termine o da un oggetto convertibile, permette di visitare l'albero
della struttura del termine.

![](/img/diagrams/TermConverterAndVisitor.png)
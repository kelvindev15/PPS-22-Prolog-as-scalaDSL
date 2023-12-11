---
sidebar_position: 0
sidebar_label: "Analisi"
---

# Dominio
Prolog è un linguaggio di programmazione basato sul paradigma di programmazione logica.
Un **programma logico** è un insieme di *assiomi* o *regole* che definiscono *relazioni* tra oggetti.  
In Prolog un oggetto è tutto ciò che si può rappresentare tramite un [*termine*](.).
Un programma Prolog consiste di un insieme di clausole, ciascuna delle quali codifica una data informazione come
un fatto o una regola.
La computazione di un programma logico in Prolog ha come obiettivo la deduzione di conseguenze logiche del programma.


## I costrutti della programmazione logica in Prolog

Tre sono i concetti alla base della programmazione logica: *fatti*, *regole* e *interrogazioni*.

### Fatto
Esprime l'esistenza di una relazione tra oggetti/termini. Si compone del nome della relazione, 
detto anche *predicato*, e di un numero arbitrario di *argomenti*. In Prolog una collezione di fatti (e [regole](.)), 
prende il nome di *database*.

### Interrogazione
Permette di interrogare un programma logico per verificare se una certa relazione è o meno una conseguenza logica 
del programma. Una conseguenza logica si stabilisce tramite l'applicazione delle regole 
di [deduzione logica](https://en.wikipedia.org/wiki/Deductive_reasoning). 
Un interrogazione consiste di una lista di goal che devono essere soddisfatti con un algoritmo di 
[unificazione](https://en.wikipedia.org/wiki/Unification_(computer_science)). Con goal si intende una relazione tra 
oggetti/termini (equivalentemente a quanto si è detto per un fatto). Qualora non sia possibile soddisfare completamente 
la lista di goal, l'esito dell'interrogazione sarà negativo, altrimenti sarà positivo ed eventualmente comprenderà anche
una lista si sostituzioni di [variabili](.).

### Regola
Detta anche inferenza, mette in relazione un fatto con un insieme di altri fatti. Si compone di una testa 
(goal) e di un corpo. Il corpo di una regola consiste di una lista di goal, in congiunzione tra loro. 
Una regola può avere un corpo vuoto. Un fatto è il caso degenere di una regola il cui corpo è vuoto.

## Sintassi del linguaggio Prolog

### Termini

Il **termine** è l'unica e fondamentale struttura dati in Prolog. I termini possono essere *costanti*, *variabili* 
o *termini composti* (chiamati anche *strutture*).

### Constanti

Le constanti sono ciò che danno il nome agli oggetti o alle relazioni. Possono essere di due tipi: *atomi* o *numeri*.
* Gli atomi si compongo di lettere e/o cifre. Il primo carattere di un atomo deve essere un lettera minuscola.  
  Non ci sono vincoli sulla composizione della sequenza di caratteri se questa è racchiusa tra apici `''`.  
  Gli atomi possono contenere anche i simboli `+`, `-` `*`,`/`, `\ `,`~`, `^`,`<`, `>`, `:`, `.`, `?`, `@`, 
  `#`, `$`, `&`. La sequenza di caratteri può contenere il carattere `_` per aumentare la leggibilità.
* Le costanti numeriche hanno la rappresentazione dei numeri reali ed ammette la notazione esponenziale (es. *-2.67e2*).

### Variabili

Permettono di riferirsi ad un termine senza specificarlo direttamente. Un termine che non contiene variabili si dice 
*termine base* (o *termine ground*).  
La sintassi delle variabili è la stessa degli atomi con la differenza che il carattere iniziale delle variabili è
una lettera maiuscola oppure il carattere `_`. Non è possibile racchiudere le variabili tra apici. 
Il solo carattere `_` denota una variabile anonima.

#### Sostituzioni di variabili
Una *sostituzione* è una mappa che dato un insieme di variabili, associa a ciascuna di esse un termine. 
In una sostituzione i termini non possono contenere nessuna delle variabili considerate nella sostituzione.
Le sostituzioni possono essere applicate a dei termini. L'applicazione di una sostituzione `S` ad un termine `t0` 
consiste nella sostituzione di tutte le variabili `X` che appaiono in `t0` con i rispettivi termini `t`, per ciascuna 
delle coppie `X=t` nella sostituzione `S`. Il risultato di una sostituzione prende il nome di *istanza*. 

### Termini composti

Un termine composto viene detto anche *struttura*. Si tratta di un oggetto che raggruppa un insieme (anche vuoto) 
di altri oggetti, che sono le componenti della struttura. Una struttura si denota con un funtore e le sue componenti. 
I funtori sono atomi e le componenti sono termini. Le componenti sono racchiuse da parentesi tonde e separate 
da virgole. Il funtore si scrive prima della parentesi di apertura. Il numero di componenti di cui è composta una 
struttura determina la sua *arità*. Data una struttura con funtore *f* con *n* componenti, l'indicatore della struttura 
è `f/n`.

> La sintassi per rappresentare fatti, regole ed interrogazioni è quella dei termini composti.
> In generale in Prolog vale la filosofia "Everything is a term", infatti persino un programma prolog può essere visto
> come un termine. (magari spiega meglio).
 

### Operatori

Sono non sono nient'altro che funtori che vengono scritti come se fossero degli operatori.
Ad esempio l'espressione `x + y * z`, che contiene gli operatori `+` e `*` corrispondono alla
struttura `+(x, *(y, z))` dove gli operatori diventano funtori. Tre sono le caratteristiche degli operatori: 
la *posizione*, la *precedenza* e l' *associatività*.

#### Posizione

Sulla base della posizione gli operatori si dividono in:

* Operatori infissi, posizionati fra gli argomenti (es. `x + y`) 
* Operatori prefissi, posizionati prima dell'argomento (es. `-x`)
* Operatori postfissi, posizionati dopo l'argomento (es. `x!`)

#### Precedenza

Ciascun operatore ha una classe di precedenza denotata da un numero intero. Ad interi più piccoli corrisponde
una priorità più alta.

#### Associatività

L'associatività entra in gioco quando si ha che fare con più operatori che hanno la stessa precedenza.
Gli operatori possono essere associativi a destra o a sinistra.

#### Operatori in Prolog

Un elenco di operatori disponibili in prolog:

* `=` operatore di uguaglianza
* `=:=`
* `=\=`
* `<`
* `>`
* `=<`
* `=<` 
* `is`
* `+`, `-`, `*`, `/`, `//`, `mod` 
### Strutture dati

#### Liste

In Prolog le liste si costruiscono tramite una struttura binaria. Il primo argomento della struttura contiene 
un elemento della lista mentre il secondo contiene in modo ricorsivo il resto della lista. Il funtore della lista è il 
carattere `.`, mentre l'atomo `[]` denota una lista vuota è può essere utilizzato per terminare una lista.
Tuttavia è possibile utilizzare una sintassi più comoda: `[X|Y]` per denotare `.(X, Y)`. Qui `X` denota la testa della 
lista mentre `Y` la coda.

<table>
  <thead>
    <tr>
      <th>Formale</th><th>Notazione con <code>[]</code></th><th>Sintassi semplificata</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.(a, [])</td><td>[a|[]]</td><td>[a]</td>
    </tr>
    <tr>
      <td>.(a, .(b, []))</td><td>[a|[b|[]]]</td><td>[a, b]</td>
    </tr>
    <tr>
      <td>.(a, .(b, .(c, [])))</td><td>[a|[b|[c|[]]]]</td><td>[a, b, c]</td>
    </tr>
    <tr>
      <td>.(a, X)</td><td>[a|X]</td><td>[a|X]</td>
    </tr>
    <tr>
      <td>.(a, .(b, X))</td><td>[a|[b|X]]</td><td>[a, b|X]</td>
    </tr>
  </tbody>
</table>

### Predicati "built-in"

I predicati built-in sono quei predicati la cui definizione è "a priori" in quanto non è possibile definirli per mezzo 
della sintassi del linguaggio. Altri predicati built-in sono solo predicati che facilitano la scrittura dei programmi.
Alcuni predicati potrebbero richiedere particolari tipi di argomenti (es. per il predicato `<` si richiede 
che gli argomenti siano dei numeri). Cosa succede nel caso in cui questi requisiti non vengano rispettati dipende dalla
specifica implementazione del motore che eseguira il programma.

* **':-'(X, Y)** infix
* **','(X, Y)** infix

#### Predicati dinamici

#### Predicati

##### Risoluzione

* **true**
* **fail**

* **var(X)**
* **nonvar(X)**
* **atom(X)**
* **number(X)**
* **atomic(X)**

##### Classificatione dei termini

* **clause(X, Y)**
* **asserta(X)**
* **assertz(X)**
* **retract(X)**
* **functor(T, F, N)**
* **arg(N, T, A)**
* **'=..'(X, L)** infix
* **atom_chars(A, L)**
* **number_chars(A, L)**

##### Backtracking

* **!**
* **repeat**

##### Costruzione di termini composti

* **';'(X, Y)** infix
* **call(X)**
* **'\\+'(X)** prefix

##### Uguaglianza

* **'='(X, Y)** infix
* **'=='(X, Y)** infix
* **op(X, Y, Z)** --> atoms fx, fy, xf, yf, xfx, yfx, yfy
* **is(X, Y)** infix

##### Aritmetici

* **'+'(X, Y)** infix
* **'-'(X, Y)** infix
* **'*'(X, Y)** infix
* **'/'(X, Y)** infix
* **'//'(X, Y)** infix
* **mod(X, Y)** infix

##### Confronto fra termini

* **'=:='(X, Y)** infix
* **'=\\='(X, Y)** infix
* **'<'(X, Y)** infix
* **'>'(X, Y)** infix
* **'>='(X, Y)** infix
* **'=<'(X, Y)** infix
* **'@<'(X, Y)** infix
* **'@>'(X, Y)** infix
* **'@>='(X, Y)** infix
* **'@=<'(X, Y)** infix

---
sidebar_position: 2
sidebar_label: "Design architetturale"
---

# Design Architetturale

Lo scopo della libreria è quello di risolvere programmi prolog composti da teorie e goal da soddisfare.
È dunque necessario l'utilizzo di un motore di risoluzione dei programmi prolog in grado di produrre delle
soluzioni a partire da questi programmi.

Per questo progetto si è scelto di utilizzare il motore [2p-Kt](https://pika-lab.gitlab.io/tuprolog/2p-in-kotlin/), 
un versione del motore [tuprolog](https://www.cs.nmsu.edu/ALP/2013/10/tuprolog-making-prolog-ubiquitous/) scritta in Kotlin.
Tuttavia la libreria vuole rimanere aperta a eventuali altre implementazioni di motori di risoluzione. Per questo motivo
il motore 2p-Kt è stato adattato per aderire all'interfaccia `Solver`. Concettualmente rappresenta un entità che prende 
in ingresso un programma prolog e restituisce in uscita zero, una o più soluzioni.

![](/img/diagrams/architecture.png)

In generale tutte le implementazioni di motori di risoluzione, per poter essere utilizzate nell'ambito della libreria, 
dovranno aderire all'interfaccia `Solver`. 

Come risultato si ottiene l'estendibiltà della libreria dal punto di vista dei motori di risoluzione supportati.
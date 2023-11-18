package io.github.kelvindev15.prolog.core.Theory

import io.github.kelvindev15.prolog.core.Struct.Clause

trait Theory extends Seq[Clause]:
  def add(clause: Clause): Theory
  def remove(clause: Clause): Theory
  def contains(clause: Clause): Boolean
  def clauses: Seq[Clause]

object Theory:
  def apply(clauses: Clause*): Theory = TheoryImpl(clauses)

  private case class TheoryImpl(clauses: Seq[Clause]) extends Theory:
    override def apply(i: Int): Clause = clauses(i)
    override def add(clause: Clause): Theory = Theory(this :+ clause*)
    override def remove(clause: Clause): Theory = Theory(filterNot(_ == clause)*)
    override def contains(clause: Clause): Boolean = contains(clause)
    override def length: Int = clauses.length
    override def iterator: Iterator[Clause] = clauses.iterator

  class MutableTheory(var theory: Theory = Theory()) extends Theory:
    override def add(clause: Clause): Theory = { theory = theory.add(clause) ; theory }
    override def remove(clause: Clause): Theory = { theory = theory.remove(clause) ; theory }
    override def contains(clause: Clause): Boolean = theory.contains(clause)
    override def clauses: Seq[Clause] = theory.clauses
    override def length: Int = theory.length
    override def iterator: Iterator[Clause] = theory.iterator

    override def apply(i: Int): Clause = theory(i)

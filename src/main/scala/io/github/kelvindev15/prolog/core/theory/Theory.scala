package io.github.kelvindev15.prolog.core.theory

import io.github.kelvindev15.prolog.core.Struct.Clause

trait Theory extends Seq[Clause]:
  def add(clause: Clause): Theory
  def remove(clause: Clause): Theory
  def contains(clause: Clause): Boolean
  def clauses: Seq[Clause]

object Theory:
  def apply(clauses: Clause*): Theory = TheoryImpl(clauses)
  def empty: Theory = Theory()

  private case class TheoryImpl(clauses: Seq[Clause]) extends Theory:
    override def apply(i: Int): Clause = clauses(i)
    override def add(clause: Clause): Theory = Theory(this :+ clause*)
    override def remove(clause: Clause): Theory = Theory(filterNot(_ == clause)*)
    override def contains(clause: Clause): Boolean = contains(clause)
    override def length: Int = clauses.length
    override def iterator: Iterator[Clause] = clauses.iterator

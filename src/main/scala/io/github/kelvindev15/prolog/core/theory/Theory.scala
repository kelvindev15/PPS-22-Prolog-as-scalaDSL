package io.github.kelvindev15.prolog.core.theory

import io.github.kelvindev15.prolog.core.Struct.Clause

/** A Prolog theory */
trait Theory extends Seq[Clause]:
  /** Add a [[clause]] to the theory. */
  def add(clause: Clause): Theory

  /** Removes a [[clause]] to the theory. */
  def remove(clause: Clause): Theory

  /** Returns true is the [[clause]] is contained in the theory. */
  def contains(clause: Clause): Boolean

  /** Returns the sequence of clauses */
  def clauses: Seq[Clause]

object Theory:
  /** Returns an instance of [[Theory]].
   *
   * @param clauses the clauses to include in the theory.
   */
  def apply(clauses: Clause*): Theory = TheoryImpl(clauses)

  /** An empty [[Theory]]. */
  def empty: Theory = Theory()

  private case class TheoryImpl(clauses: Seq[Clause]) extends Theory:
    override def apply(i: Int): Clause = clauses(i)
    override def add(clause: Clause): Theory = Theory(this :+ clause*)
    override def remove(clause: Clause): Theory = Theory(filterNot(_ == clause)*)
    override def contains(clause: Clause): Boolean = contains(clause)
    override def length: Int = clauses.length
    override def iterator: Iterator[Clause] = clauses.iterator

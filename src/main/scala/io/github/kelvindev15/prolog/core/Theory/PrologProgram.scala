package io.github.kelvindev15.prolog.core.Theory

import io.github.kelvindev15.prolog.core.Struct.Clause

trait PrologProgram extends Seq[Clause]:
  def add(clause: Clause): PrologProgram
  def remove(clause: Clause): PrologProgram
  def contains(clause: Clause): Boolean
  def clauses: Seq[Clause]

object PrologProgram:
  def apply(clauses: Clause*): PrologProgram = PrologProgramImpl(clauses)

  private case class PrologProgramImpl(clauses: Seq[Clause]) extends PrologProgram:
    override def apply(i: Int): Clause = clauses(i)
    override def add(clause: Clause): PrologProgram = PrologProgram(this :+ clause*)
    override def remove(clause: Clause): PrologProgram = PrologProgram(filterNot(_ == clause)*)
    override def contains(clause: Clause): Boolean = contains(clause)
    override def length: Int = clauses.length
    override def iterator: Iterator[Clause] = clauses.iterator

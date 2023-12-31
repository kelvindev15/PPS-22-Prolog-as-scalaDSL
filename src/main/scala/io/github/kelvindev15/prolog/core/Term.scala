package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.solver.Solver.Substitution
import io.github.kelvindev15.prolog.utils.TermConvertible
import io.github.kelvindev15.prolog.visitors.{
  TermVisitor,
  ToInstanceTermVisitor,
  ToStringTermVisitor
}

/** A trait to visit a Term like object. */
trait Visitable:
  self: (Term | TermConvertible) =>

  /** Accepts a [[TermVisitor]]. */
  def accept[T](visitor: TermVisitor[T]): T

/** A Prolog term. */
trait Term extends TermConvertible with Visitable:

  /** Returns true if the term is ground */
  def isGround: Boolean

  /** Returns the variables of the term. */
  def variables: Seq[Variable]

  /** Return this term. Inheritors should use possibly only [[Variable]]s,
    * [[Constants]]s and [[Structs]].
    */
  def asTerm: Term

  override def toTerm: Term = this

  override def toString: String = accept(ToStringTermVisitor)

  /** Returns the application of the substitution to this term.
    *
    * @param substitution
    *   the substitution to apply.
    */
  def instanceFrom(substitution: Substitution): Term = accept(
    ToInstanceTermVisitor(substitution)
  )

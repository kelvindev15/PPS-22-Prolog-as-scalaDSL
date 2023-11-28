package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Prolog.Syntax.VariableRegex
import io.github.kelvindev15.prolog.utils.TermVisitor

/** A Prolog variable */
trait Variable extends Term:

  /** The name of the variable. */
  val name: String

  /** Returns true is the variable is anonymous */
  final def isAnonymous: Boolean = name == "_"

  final override def isGround: Boolean = false

  final override def variables: Seq[Variable] = Seq(this)

  override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

object Variable:

  /** Returns an instance of a [[Variable]].
    *
    * @param name
    *   the name of the variable.
    */
  def apply(name: String): Variable = name match
    case n if n.matches(VariableRegex.regex) => Var(name)
    case _ => throw IllegalArgumentException("Incorrect name of a variable")

  /** Returns a instance of an anonymous variable. */
  def anonymous(): Variable = Var("_")

  private case class Var(name: String) extends Variable:
    override def asTerm: Term = this

package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Prolog.Syntax.VariableRegex
import io.github.kelvindev15.prolog.utils.TermVisitor

trait Variable extends Term:
  val name: String
  final def isAnonymous: Boolean = name == "_" 
  final override def isGround: Boolean = false
  final override def variables: Iterable[Variable] = Seq(this)
  override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)
  
object Variable:
  def apply(name: String): Variable = name match
    case n if n.matches(VariableRegex.regex) => Var(name)
    case _ => throw IllegalArgumentException("Incorrect name of a variable")
  def anonymous(): Variable = Var("_")
  private case class Var(name: String) extends Variable
  
package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Struct.quoteIfFunctorIsMalformed
import io.github.kelvindev15.prolog.utils.TermVisitor

trait Constant extends Term:
  val value: Any
  override def variables: Iterable[Variable] = Seq()
  override def isGround: Boolean = true
  override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

object Constant:
  def apply(value: Any): Constant = value match
    case n: (Int | Double) => Numeric(n)
    case s: String => Atom(s)
    case _ => throw IllegalArgumentException("Cannot create a constant with the provided argument")
  trait Atom extends Constant with Struct:
    override val value: String
    override val arity: Int = 0
    override val arguments: Iterable[Term] = Seq()
    override val functor: Atom = this

  object Atom:
    private def removeQuotes(value: String) = value.replaceAll("^'+|'+$", "")
    def apply(value: String): Atom = AtomImpl(removeQuotes(value))
    private case class AtomImpl(private val _value: String) extends Atom:
      override val value: String = quoteIfFunctorIsMalformed(_value)

  trait Numeric extends Constant:
    override val value: AnyVal

  object Numeric:
    def apply(value: AnyVal): Numeric = NumericImpl(value)
    private case class NumericImpl(value: AnyVal) extends Numeric

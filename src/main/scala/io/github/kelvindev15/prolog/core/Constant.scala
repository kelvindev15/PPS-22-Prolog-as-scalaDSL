package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Struct.quoteIfFunctorIsMalformed
import io.github.kelvindev15.prolog.utils.TermVisitor

/** A Prolog Constant, either numeric or an atom */
trait Constant extends Term:
  /** The value of the constant. */
  val value: Any
  
  override def variables: Seq[Variable] = Seq()
  
  override def isGround: Boolean = true
  
  override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)
  
  override def asTerm: Term = this

object Constant:
  /** Returns a Prolog [[Constant]].
   * 
   * @param value the value of the constant.
   * @throws IllegalArgumentException if the value cannot be used for an [[Atom]] or a [[Numeric]].
   */
  def apply(value: Any): Constant = value match
    case n: (Int | Double) => Numeric(n)
    case s: String => Atom(s)
    case _ => throw IllegalArgumentException("Cannot create a constant with the provided argument")
  
  /** A Prolog atom. */
  trait Atom extends Constant with Struct:
    override val value: String
    
    /** The unquoted value of the atom. */
    val unquotedValue: String
    
    override val arity: Int = 0
    
    override val arguments: Seq[Term] = Seq()
    
    override val functor: Atom = this

  object Atom:
    private def removeQuotes(value: String) = value.replaceAll("^'+|'+$", "")

    /** Returns an instance of [[Atom]].
     * 
     * @param value the value of the atom.
     */
    def apply(value: String): Atom = AtomImpl(removeQuotes(value))
    
    private case class AtomImpl(private val _value: String) extends Atom:
      override val value: String = quoteIfFunctorIsMalformed(_value)
      override val unquotedValue: String = _value

  /** A Prolog numeric constant. */
  trait Numeric extends Constant:
    override val value: AnyVal

  object Numeric:
    /** Returns an instance of [[Numeric]] */
    def apply(value: AnyVal): Numeric = NumericImpl(value)
    
    private case class NumericImpl(value: AnyVal) extends Numeric

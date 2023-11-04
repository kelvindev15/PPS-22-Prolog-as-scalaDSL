package io.github.kelvindev15.prolog

trait Constant extends Term:
  final override val isGround: Boolean = true
  final override val variables: Seq[Variable] = Seq()

object Constant:
  def apply(value: Any): Constant = value match {
    case v: (Double | Int) => Numeric(v)
    case v: String => Atom(v)
    case invalid => throw IllegalArgumentException(s"$invalid is an invalid value for a constant")
  }

  trait Atom extends Constant with Struct

  object Atom:
    def apply(value: String): Atom = AtomImpl(value)

    private case class AtomImpl(value: String) extends Atom
    
  trait Numeric extends Constant

  object Numeric:
    def apply(value: AnyVal): Numeric = NumericImpl(value)

    private case class NumericImpl(value: AnyVal) extends Numeric

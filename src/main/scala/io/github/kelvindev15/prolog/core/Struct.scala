package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.Conjunction
import io.github.kelvindev15.prolog.core.Prolog.Functors.CLAUSE
import io.github.kelvindev15.prolog.core.Prolog.Syntax
import io.github.kelvindev15.prolog.utils.TermVisitor

trait Struct extends Term:
  val functor: Atom
  val arity: Int
  val arguments: Seq[Term]

  override def variables: Seq[Variable] = arguments.flatMap(_.variables)
  override def isGround: Boolean = arguments.forall(_.isGround)

  override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

object Struct:
  private def isFunctorWellFormed(functor: String): Boolean = functor.matches(Syntax.AtomRegex.regex)
  def quoteIfFunctorIsMalformed(functor: String): String =
    if (isFunctorWellFormed(functor)) functor else s"'$functor'"
  def apply(functor: Atom, args: Term*): Struct = StructImpl(functor, args*)

  object Functor:
    def unapply(struct: Struct): Option[Atom] = Option(struct.functor)
    
  object Args:
    def unapply(struct: Struct): Option[Iterable[Term]] = Option(struct.arguments)  
  
  private case class StructImpl(functor: Atom, arguments: Term*) extends Struct:
    override val arity: Int = arguments.size

  trait Indicator extends Struct:
    val functor: Atom
    val arity: Int
    override val arguments: Seq[Term] = Seq(functor, Constant(arity))

  object Indicator:
    def apply(functor: Atom, arity: Int): Indicator = IndicatorImpl(functor, arity)
    private case class IndicatorImpl(functor: Atom, arity: Int) extends Indicator
  
  trait Clause extends Struct:
    val head: Option[Struct]
    val body: Term

  trait Directive extends Clause:
    override val head: Option[Struct] = None

  trait Rule extends Clause:
    val head: Option[Struct]
    val body: Term
    final override val functor: Atom = CLAUSE
    final override val arity: Int = 2

  object Rule:
    def apply(head: Struct, args: Term*): Rule = RuleImpl(head, Conjunction.wrapIfNecessary(args*))
    private case class RuleImpl(_head: Struct, body: Term) extends Rule:
      override val head: Option[Struct] = Option(_head)
      override val arguments: Seq[Term] = Seq(head.get, body)
      override def isGround: Boolean = head.get.isGround && body.isGround
      override def variables: Seq[Variable] = head.get.variables ++ body.variables

  trait Fact extends Rule:
    override val body: Term = Atom("true")

  object Fact:
    def apply(head: Struct): Fact = FactImpl(head)
    private case class FactImpl(_head: Struct) extends Fact:
      override val head: Option[Struct] = Option(_head)
      override val arguments: Seq[Term] = Seq(head.get)
      override def isGround: Boolean = head.get.isGround
      override def variables: Seq[Variable] = head.get.variables

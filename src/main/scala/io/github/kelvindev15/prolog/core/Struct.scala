package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.Conjunction
import io.github.kelvindev15.prolog.core.Prolog.Functors.CLAUSE
import io.github.kelvindev15.prolog.core.Prolog.{Functors, Syntax}
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
  
  private case class StructImpl(functor: Atom, arguments: Term*) extends Struct:
    override val arity: Int = arguments.size
    override def asTerm: Term = Struct(functor, arguments map { _.asTerm }*)

  trait Indicator extends Struct:
    val functor: Atom = Functors.INDICATOR
    val arity: Int = 2
    val indicatedFunctor: Atom
    val indicatedArity: Constant.Numeric
    override val arguments: Seq[Term] = Seq(indicatedFunctor, indicatedArity)

  object Indicator:
    def apply(indicatedFunctor: Atom, indicatedArity: Constant.Numeric): Indicator =
      IndicatorImpl(indicatedFunctor, indicatedArity)
    private case class IndicatorImpl(indicatedFunctor: Atom, indicatedArity: Constant.Numeric) extends Indicator:
      override def asTerm: Term = Struct(functor, indicatedFunctor, indicatedArity)

  trait Clause extends Struct:
    val head: Option[Struct]
    val body: Term
    final override def asTerm: Term = head
      .map { h => Struct(functor, h.asTerm, body.asTerm) }
      .getOrElse(Struct(functor, body.asTerm))

  trait Directive extends Clause:
    final override val head: Option[Struct] = None

  object Directive:
    def apply(terms: Term*): Directive = DirectiveImpl(Conjunction.wrapIfNecessary(terms*))
    private case class DirectiveImpl(body: Term) extends Directive:
      override val functor: Atom = CLAUSE
      override val arity: Int = 1
      override val arguments: Seq[Term] = Seq(body)

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

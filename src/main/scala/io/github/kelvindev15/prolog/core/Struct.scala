package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.Conjunction
import io.github.kelvindev15.prolog.core.Prolog.Functors.CLAUSE
import io.github.kelvindev15.prolog.core.Prolog.{Functors, Syntax}
import io.github.kelvindev15.prolog.utils.TermVisitor

/** A Prolog compound term */
trait Struct extends Term:
  /** The functor of the predicate */
  val functor: Atom

  /** The arity of the predicate */
  val arity: Int

  /** The arguments of the predicates */
  val arguments: Seq[Term]

  override def variables: Seq[Variable] = arguments.flatMap(_.variables)

  override def isGround: Boolean = arguments.forall(_.isGround)

  override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

  /** Executes an action over all arguments of the struct.
    *
    * @param action
    *   the action to be performed.
    */
  def foreach(action: Term => Unit): Unit = arguments.foreach(action)

object Struct:
  private def isFunctorWellFormed(functor: String): Boolean =
    functor.matches(Syntax.AtomRegex.regex)

  /** Returns a quoted string to make it adhere to Prolog's atom syntax, or the
    * provided string if it is already compliant.
    *
    * @param functor
    *   the string to possibly quote.
    */
  def quoteIfFunctorIsMalformed(functor: String): String =
    if (isFunctorWellFormed(functor)) functor else s"'$functor'"

  /** Returns an instance of a [[Struct]].
    *
    * @param functor
    *   the functor of the struct.
    * @param args
    *   the arguments of the struct.
    */
  def apply(functor: Atom, args: Term*): Struct = StructImpl(functor, args*)

  private case class StructImpl(functor: Atom, arguments: Term*) extends Struct:
    override val arity: Int = arguments.size
    override def asTerm: Term = Struct(functor, arguments map { _.asTerm }*)

  /** A Prolog indicator. */
  trait Indicator extends Struct:
    override val functor: Atom = Functors.INDICATOR

    override val arity: Int = 2

    /** The functor of the indicated predicate. */
    val indicatedFunctor: Atom

    /** The arity of the indicated predicate. */
    val indicatedArity: Constant.Numeric

    override val arguments: Seq[Term] = Seq(indicatedFunctor, indicatedArity)

  object Indicator:

    /** Returns an instance of [[Indicator]].
      *
      * @param indicatedFunctor
      *   the functor of the indicated predicate.
      * @param indicatedArity
      *   the arity of the indicated predicate.
      */
    def apply(
        indicatedFunctor: Atom,
        indicatedArity: Constant.Numeric
    ): Indicator =
      IndicatorImpl(indicatedFunctor, indicatedArity)

    private case class IndicatorImpl(
        indicatedFunctor: Atom,
        indicatedArity: Constant.Numeric
    ) extends Indicator:
      override def asTerm: Term =
        Struct(functor, indicatedFunctor, indicatedArity)

  /** A Prolog clause. */
  trait Clause extends Struct:
    /** The head of the clause. */
    val head: Option[Struct]

    /** The body of the clause */
    val body: Term

    final override def asTerm: Term = head
      .map { h => Struct(functor, h.asTerm, body.asTerm) }
      .getOrElse(Struct(functor, body.asTerm))

  /** A Prolog directive. */
  trait Directive extends Clause:
    final override val head: Option[Struct] = None

  object Directive:
    /** Returns an instace of [[Directive]].
      *
      * @param terms
      *   the arguments of the directive.
      */
    def apply(terms: Term*): Directive = DirectiveImpl(
      Conjunction.wrapIfNecessary(terms*)
    )

    private case class DirectiveImpl(body: Term) extends Directive:
      override val functor: Atom = CLAUSE
      override val arity: Int = 1
      override val arguments: Seq[Term] = Seq(body)

  /** A Prolog rule. */
  trait Rule extends Clause:
    override val head: Option[Struct]
    override val body: Term
    final override val functor: Atom = CLAUSE
    final override val arity: Int = 2

  object Rule:
    /** Returns an instance of [[Rule]].
      *
      * @param head
      *   the head of the rule.
      * @param goals
      *   the goals of the rule.
      */
    def apply(head: Struct, goals: Term*): Rule =
      RuleImpl(head, Conjunction.wrapIfNecessary(goals*))

    private case class RuleImpl(_head: Struct, body: Term) extends Rule:
      override val head: Option[Struct] = Option(_head)
      override val arguments: Seq[Term] = Seq(head.get, body)
      override def isGround: Boolean = head.get.isGround && body.isGround
      override def variables: Seq[Variable] =
        head.get.variables ++ body.variables

  /** A Prolog fact. */
  trait Fact extends Rule:
    override val body: Term = Atom("true")

  object Fact:
    /** Returns an instance of [[Fact]].
      *
      * @param head
      *   the [[Struct]] representing the fact.
      */
    def apply(head: Struct): Fact = FactImpl(head)

    private case class FactImpl(_head: Struct) extends Fact:
      override val head: Option[Struct] = Option(_head)
      override val arguments: Seq[Term] = Seq(head.get)
      override def isGround: Boolean = head.get.isGround
      override def variables: Seq[Variable] = head.get.variables

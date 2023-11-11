package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Constant.Atom
import io.github.kelvindev15.prolog.Prolog.Functors.{CLAUSE, COMPOUND_GOAL}
import io.github.kelvindev15.prolog.Prolog.Syntax
import io.github.kelvindev15.prolog.utils.TermVisitor

trait Struct extends Term:
  val functor: Atom
  val arity: Int
  val arguments: Iterable[Term]

  override def variables: Iterable[Variable] = arguments.flatMap(_.variables)
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

  trait Rule extends Struct:
    val head: Struct
    val body: Term
    final override val functor: Atom = CLAUSE
    final override val arity: Int = 2
    final override val arguments: Iterable[Term] = Seq(head, body)
    final override def isGround: Boolean = head.isGround && body.isGround
    final override def variables: Iterable[Variable] = head.variables ++ body.variables

  object Rule:
    def apply(head: Struct, args: Term*): Rule = RuleImpl(head, CompoundGoal.ifNecessary(args*))
    private case class RuleImpl(head: Struct, body: Term) extends Rule

  trait Fact extends Rule:
    override val body: Term = Atom("true")

  object Fact:
    def apply(head: Struct): Fact = FactImpl(head)
    private case class FactImpl(head: Struct) extends Fact





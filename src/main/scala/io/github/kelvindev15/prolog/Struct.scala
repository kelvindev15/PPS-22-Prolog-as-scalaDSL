package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Constant.Atom
import io.github.kelvindev15.prolog.Term.Recursive

trait Struct extends Term

object Struct:
  def apply(functor: Atom, args: Term*): Struct = StructImpl(functor, args*)

  private case class StructImpl(functor: Atom, args: Term*) extends Struct:
    override def isGround: Boolean = args.forall(_.isGround)
    override def variables: Seq[Variable] = args.collect { case t: Variable => t }

  trait Rule extends Struct:
    val head: Struct
    val body: Term

    override def isGround: Boolean = head.isGround && body.isGround
    override def variables: Seq[Variable] = head.variables ++ body.variables

  object Rule:
    private val cmpGoalPredicate = Recursive.of(Atom(","), 2)

    def apply(head: Struct, body: Term*): Rule =
      if (body.size > 1)
        RuleImpl(head, cmpGoalPredicate.fold(body*))
      else
        RuleImpl(head, body.headOption.getOrElse(Atom("true")))

  private case class RuleImpl(head: Struct, body: Term) extends Rule

  trait Fact extends Rule:
    final override val body = Atom("true")

  object Fact:
    def apply(fact: Struct): Fact = FactImpl(fact)

    private case class FactImpl(override val head: Struct) extends Fact

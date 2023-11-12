package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Prolog.Functors
import io.github.kelvindev15.prolog.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.utils.TermVisitor

trait CompoundGoal extends BinaryRecursiveStruct:
  override val functor: Constant.Atom = Functors.COMPOUND_GOAL
  override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

object CompoundGoal:
  def ifNecessary(args: Term*): Term = args.size match
    case 0 => throw IllegalArgumentException("Cannot create a goal from an empty sequence")
    case 1 => args.head
    case _ => CompoundGoal(args*)
    
  def apply(args: Term*): CompoundGoal = BinaryRecursiveStruct.fold(CompoundGoalImpl.apply)(args*)
  def unapply(compoundGoal: CompoundGoal): Option[(Term, Term)] = Option((compoundGoal.first, compoundGoal.second))

  private case class CompoundGoalImpl(left: Term, right: Term) extends CompoundGoal:
    
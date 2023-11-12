package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Constant.Atom
import io.github.kelvindev15.prolog.Prolog.Functors
import io.github.kelvindev15.prolog.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.utils.TermVisitor

object Goals:
  trait Conjunction extends BinaryRecursiveStruct:
    override val functor: Constant.Atom = Functors.GOAL_CONJUNCTION
    override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

  object Conjunction:
    def wrapIfNecessary(args: Term*): Term = BinaryRecursiveStruct.wrapIfNecessary(Conjunction.apply)(args*)
    def apply(args: Term*): Conjunction = BinaryRecursiveStruct.fold(ConjunctionImpl.apply)(args*)
    def unapply(conjunction: Conjunction): Option[(Term, Term)] = Option((conjunction.first, conjunction.second))

    private case class ConjunctionImpl(left: Term, right: Term) extends Conjunction

  trait Disjunction extends BinaryRecursiveStruct:
    override val functor: Constant.Atom = Atom(";")
    override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

  object Disjunction:
    def wrapIfNecessary(args: Term*): Term = BinaryRecursiveStruct.wrapIfNecessary(Disjunction.apply)(args *)
    def apply(args: Term*): Conjunction = BinaryRecursiveStruct.fold(DisjunctionImpl.apply)(args *)
    def unapply(disjunction: Disjunction): Option[(Term, Term)] = Option((disjunction.first, disjunction.second))
    private case class DisjunctionImpl(left: Term, right: Term) extends Conjunction



package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Prolog.Functors
import io.github.kelvindev15.prolog.core.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.visitors.TermVisitor

object Goals:
  /** Represents a conjunction of goals. */
  trait Conjunction extends BinaryRecursiveStruct:
    override val functor: Constant.Atom = Functors.GOAL_CONJUNCTION
    override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

  object Conjunction:
    /** Returns a [[Conjunction]] if more to arguments are provided, otherwise
      * return the provided term.
      *
      * @param args
      *   the arguments to put in conjunction.
      * @throws IllegalArgumentException
      *   if no arguments is provided.
      */
    def wrapIfNecessary(args: Term*): Term =
      BinaryRecursiveStruct.wrapIfNecessary(Conjunction.apply)(args*)

    /** Returns an instance of [[Conjunction]].
      *
      * @param args
      *   the arguments to put in conjunction.
      * @throws IllegalArgumentException
      *   if less of two arguments are provided.
      */
    def apply(args: Term*): Conjunction =
      BinaryRecursiveStruct.fold(ConjunctionImpl.apply)(args*)

    /** Deconstructs the Conjuction in its arguments.
      *
      * @param conjunction
      *   the conjunction to deconstruct.
      */
    def unapply(conjunction: Conjunction): Option[(Term, Term)] = Option(
      (conjunction.first, conjunction.second)
    )

    private case class ConjunctionImpl(left: Term, right: Term)
        extends Conjunction

  /** Represents a disjunction of goals. */
  trait Disjunction extends BinaryRecursiveStruct:
    override val functor: Constant.Atom = Functors.GOAL_DISJUNCTION
    override def accept[T](visitor: TermVisitor[T]): T = visitor.visit(this)

  object Disjunction:
    /** Returns a [[Disjunction]] if more to arguments are provided, otherwise
      * return the provided term.
      *
      * @param args
      *   the arguments to put in disjuction.
      * @throws IllegalArgumentException
      *   if no arguments is provided.
      */
    def wrapIfNecessary(args: Term*): Term =
      BinaryRecursiveStruct.wrapIfNecessary(Disjunction.apply)(args*)

    /** Returns an instance of [[Conjunction]].
      *
      * @param args
      *   the arguments to put in disjunction.
      * @throws IllegalArgumentException
      *   if less of two arguments are provided.
      */

    def apply(args: Term*): Disjunction =
      BinaryRecursiveStruct.fold(DisjunctionImpl.apply)(args*)

    /** Deconstructs the Disjunction in its arguments.
      *
      * @param disjunction
      *   the disjunction to deconstruct.
      */
    def unapply(disjunction: Disjunction): Option[(Term, Term)] = Option(
      (disjunction.first, disjunction.second)
    )

    private case class DisjunctionImpl(left: Term, right: Term)
        extends Disjunction

package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Constant.Atom

trait Term:
  def isGround: Boolean
  def variables: Seq[Variable]

object Term:
  trait Recursive:
    val functor: Atom
    val arity: Int
    def fold(term: Term*): Term

  object Recursive:
    def of(functor: Atom, arity: Int): Recursive = RecursiveImpl(functor, arity)

    private case class RecursiveImpl(functor: Atom, arity: Int) extends Recursive:
      if (arity <= 1)
        throw IllegalArgumentException("Arity should be at least 2")

      override def fold(term: Term*): Term =
        if (term.size == arity)
          Struct(functor, term *)
        else if (term.size < arity || (term.size - arity) % (arity - 1) != 0)
            throw IllegalArgumentException("Number of provided terms are incompatible with the arity of this predicate")
        else
          val tmp = term.splitAt(arity - 1)
          Struct(functor, tmp._1 :+ fold(tmp._2*)*)

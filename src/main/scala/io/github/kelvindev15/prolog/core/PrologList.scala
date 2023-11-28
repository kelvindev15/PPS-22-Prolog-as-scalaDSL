package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Prolog.Functors

/** A Prolog list */
trait PrologList extends RecursiveStruct:
  /** The number of elements in the list. */
  val size: Int

object PrologList:
  extension (listTerminator: (PrologList | Variable))
    /** Returns all arguments of the list in a sequence. */
    def linearizedArguments: Seq[Term] = listTerminator match
      case l: PrologList => l.linearizedArguments
      case v: Variable   => Seq(v)

  given Conversion[(PrologList | Variable), Term] = _.asInstanceOf[Term]

  /** Returns an instance of [[PrologList]].
    *
    * @param elements
    *   the elements to include in the list.
    */
  def apply(elements: Term*): PrologList = elements.size match
    case 0 => Nil
    case 1 => Cons(elements.head, Nil)
    case _ => Cons(elements.head, apply(elements.tail*))

  /** A Prolog list, comprises a head and a tail. */
  trait Cons extends PrologList:
    /** The head of the list */
    val head: Term

    /** The tail of the list. */
    val tail: (PrologList | Variable)

    override def linearizedArguments: Seq[Term] =
      Seq(head) ++ tail.linearizedArguments

    override val arity: Int = 2

    override val arguments: Seq[Term] = Seq(head, tail)

    override val size: Int = linearizedArguments.size

    override val functor: Constant.Atom = Functors.CONS

  object Cons:
    /** Returns an instance of [[Cons]].
      *
      * @param head
      *   the head of the list.
      * @param tail
      *   the tail of the list.
      */
    def apply(head: Term, tail: (PrologList | Variable)): PrologList =
      ConsImpl(head, tail)

  object Nil extends PrologList:
    override def linearizedArguments: Seq[Term] = Seq()
    override val arity: Int = 0
    override val arguments: Seq[Term] = Seq()
    override val size: Int = 0
    override def asTerm: Term = Functors.EMPTY_LIST
    override val functor: Constant.Atom = Functors.EMPTY_LIST

  private case class ConsImpl(head: Term, tail: (PrologList | Variable))
      extends Cons:
    override def asTerm: Term = Struct(Functors.CONS, head.asTerm, tail.asTerm)

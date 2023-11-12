package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Prolog.Functors

trait PrologList extends RecursiveStruct:
  val size: Int

object PrologList:
  trait Cons extends PrologList:
    val head: Term
    val tail: PrologList
    override def linearizedArguments: Iterable[Term] = Seq(head) ++ tail.linearizedArguments
    override val arity: Int = 2
    override val arguments: Iterable[Term] = Seq(head, tail)
    override val size: Int = linearizedArguments.size
    override val functor: Constant.Atom = Functors.CONS

  object Cons:
    def apply(head: Term, tail: PrologList): PrologList = ConsImpl(head, tail)
    
  object Nil extends PrologList:
    override def linearizedArguments: Iterable[Term] = Seq()
    override val arity: Int = 0
    override val arguments: Iterable[Term] = Seq()
    override val size: Int = 0
    override val functor: Constant.Atom = Functors.EMPTY_LIST
  
  private case class ConsImpl(head: Term, tail: PrologList) extends Cons

  def apply(elements: Term*): PrologList = elements.size match
    case 0 => Nil
    case 1 => Cons(elements.head, Nil)
    case _ => Cons(elements.head, apply(elements.tail*))

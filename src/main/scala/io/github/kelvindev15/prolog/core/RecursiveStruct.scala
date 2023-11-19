package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.utils.BinaryToFlatVisitor

trait RecursiveStruct extends Struct:
  def linearizedArguments: Seq[Term]

object RecursiveStruct:
  trait BinaryRecursiveStruct extends RecursiveStruct:
    final override val arity: Int = 2
    def first: Term = left
    def second: Term = right
    def left: Term
    def right: Term
    final override val arguments: Seq[Term] = Seq(left, right)
    override def linearizedArguments: Seq[Term] = accept(BinaryToFlatVisitor())
  
  object BinaryRecursiveStruct:
    def wrapIfNecessary(struct: Seq[Term] => BinaryRecursiveStruct)(args: Term*): Term = args.size match
      case 0 => throw IllegalArgumentException("Cannot create a goal from an empty sequence")
      case 1 => args.head
      case _ => struct(args)

    object Tuple:
      def unapply(tuple: BinaryRecursiveStruct): Option[(Term, Term)] =
        Option((tuple.left, tuple.right))

    def fold[T <: BinaryRecursiveStruct](struct: (Term, Term) => T)(args: Term*): T = args.size match
      case n if n < 2 => throw IllegalArgumentException("There must be at least two arguments")
      case 2 => struct(args.head, args.tail.head)
      case _ => struct(args.head, fold(struct)(args.tail *))
      
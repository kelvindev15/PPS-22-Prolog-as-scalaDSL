package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Constant.Atom
import io.github.kelvindev15.prolog.utils.BinaryToFlatVisitor

trait RecursiveStruct extends Struct:
  def linearizedArguments: Iterable[Term]

object RecursiveStruct:
  trait BinaryRecursiveStruct extends RecursiveStruct:
    final override val arity: Int = 2
    val left: Term
    val right: Term
    val first: Term = left
    val second: Term = right
    final override val arguments: Iterable[Term] = Seq(left, right)
    override def linearizedArguments: Iterable[Term] = accept(BinaryToFlatVisitor())
  
  object BinaryRecursiveStruct:
    object Tuple:
      def unapply(tuple: BinaryRecursiveStruct): Option[(Term, Term)] =
        Option((tuple.left, tuple.right))

    def fold[T <: BinaryRecursiveStruct](struct: (Term, Term) => T)(args: Term*): T = args.size match
      case n if n < 2 => throw IllegalArgumentException("There must be at least two arguments")
      case 2 => struct(args.head, args.tail.head)
      case _ => struct(args.head, fold(struct)(args.tail *))
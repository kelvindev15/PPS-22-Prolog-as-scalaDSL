package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.visitors.BinaryToFlatVisitor

/** A Prolog [[Struct]] that is also recursive. */
trait RecursiveStruct extends Struct:
  /** All arguments of the struct linearized in a list. */
  def linearizedArguments: Seq[Term]

  override def foreach(action: Term => Unit): Unit =
    linearizedArguments.foreach(action)

object RecursiveStruct:
  /** A  [[RecursiveStruct]] that is also binary. */
  trait BinaryRecursiveStruct extends RecursiveStruct:
    final override val arity: Int = 2

    /** The first argument of the struct. */
    def first: Term = left

    /** The second argument of the struct. */
    def second: Term = right

    /** Alias of [[first]]. */
    def left: Term

    /** Alias of [[second]]. */
    def right: Term

    final override val arguments: Seq[Term] = Seq(left, right)

    override def linearizedArguments: Seq[Term] = accept(BinaryToFlatVisitor)

    final override def asTerm: Term = Struct(functor, left.asTerm, right.asTerm)

  object BinaryRecursiveStruct:
    /** Binarize a list of [[Term]]s using a strategy.
      *
      * @param strategy
      *   the binarization strategy.
      * @param args
      *   the arguments to binarize.
      *
      * @throws IllegalArgumentException
      *   if the are no [[args]].
      */
    def wrapIfNecessary(strategy: Seq[Term] => BinaryRecursiveStruct)(
        args: Term*
    ): Term = args.size match
      case 0 =>
        throw IllegalArgumentException(
          "Cannot create a goal from an empty sequence"
        )
      case 1 => args.head
      case _ => strategy(args)

    /** A destructuring object for [[BinaryRecursiveStruct]]s. */
    object Tuple:
      def unapply(tuple: BinaryRecursiveStruct): Option[(Term, Term)] =
        Option((tuple.left, tuple.right))

    /** Folds a sequence of arguments into a binarized struct using a strategy.
      *
      * @param strategy
      *   the strategy for binarization.
      * @param args
      *   the sequence of terms.
      * @tparam T
      *   the type of [[BinaryRecursiveStruct]].
      */
    def fold[T <: BinaryRecursiveStruct](strategy: (Term, Term) => T)(
        args: Term*
    ): T = args.size match
      case n if n < 2 =>
        throw IllegalArgumentException("There must be at least two arguments")
      case 2 => strategy(args.head, args.tail.head)
      case _ => strategy(args.head, fold(strategy)(args.tail*))

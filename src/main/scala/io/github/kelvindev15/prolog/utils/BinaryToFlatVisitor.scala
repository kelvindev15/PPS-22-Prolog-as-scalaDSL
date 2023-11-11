package io.github.kelvindev15.prolog.utils

import io.github.kelvindev15.prolog.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.{CompoundGoal, Term}
import io.github.kelvindev15.prolog.RecursiveStruct.BinaryRecursiveStruct.Tuple

class BinaryToFlatVisitor extends TermVisitor[Iterable[Term]]:
  override def visit(tuple: BinaryRecursiveStruct): Iterable[Term] = tuple match
    case Tuple(l, r @ Tuple(_, _)) => Seq(l) ++ visit(r)
    case Tuple(l, r) => Seq(l, r)

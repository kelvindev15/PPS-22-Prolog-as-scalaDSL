package io.github.kelvindev15.prolog.utils

import io.github.kelvindev15.prolog.core.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.core.RecursiveStruct.BinaryRecursiveStruct.Tuple
import io.github.kelvindev15.prolog.core.Term

class BinaryToFlatVisitor extends TermVisitor[Seq[Term]]:
  override def visit(tuple: BinaryRecursiveStruct): Seq[Term] = tuple match
    case Tuple(l, r @ Tuple(_, _)) => Seq(l) ++ visit(r)
    case Tuple(l, r) => Seq(l, r)

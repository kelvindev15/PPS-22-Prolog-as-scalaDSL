package io.github.kelvindev15.prolog.visitors

import io.github.kelvindev15.prolog.core.Goals.{Conjunction, Disjunction}
import io.github.kelvindev15.prolog.core.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.core.Struct.Clause
import io.github.kelvindev15.prolog.core.*

class ToStringTermVisitor extends TermVisitor[String]:

  override def visit(atom: Constant.Atom): String = atom.value
  override def visit(numeric: Constant.Numeric): String = numeric.value.toString
  override def visit(variable: Variable): String = variable.name
  override def visit(clause: Struct.Clause): String = clause.head match
    case Some(h) => s"${visit(h)} :- ${visit(clause.body)}."
    case _       => visit(clause.body)
  override def visit(struct: Struct): String = struct match
    case atom: Constant.Atom => visit(atom)
    case clause: Clause      => visit(clause)
    case list: PrologList =>
      list.linearizedArguments.map(visit).mkString("[", ", ", "]")
    case binaryRecursiveStruct: BinaryRecursiveStruct =>
      visit(binaryRecursiveStruct)
    case _ =>
      s"${visit(struct.functor)}${struct.arguments.map(visit).mkString("(", ", ", ")")}"
  override def visit(recursiveStruct: BinaryRecursiveStruct): String =
    val linearizedArgs = recursiveStruct.linearizedArguments.map(visit)
    recursiveStruct match
      case _: Conjunction => linearizedArgs.mkString(", ")
      case _: Disjunction => linearizedArgs.mkString("; ")

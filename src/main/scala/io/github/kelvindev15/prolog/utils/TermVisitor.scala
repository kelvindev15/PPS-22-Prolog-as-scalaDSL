package io.github.kelvindev15.prolog.utils

import io.github.kelvindev15.prolog.Constant.{Atom, Numeric}
import io.github.kelvindev15.prolog.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.Struct.{Fact, Rule}
import io.github.kelvindev15.prolog.{Constant, Struct, Variable}

trait TermVisitor[T]:
  def visit(constant: Constant): T = throw NotImplementedError()
  def visit(atom: Atom): T = throw NotImplementedError()
  def visit(numeric: Numeric): T = throw NotImplementedError()
  def visit(variable: Variable): T = throw NotImplementedError()
  def visit(struct: Struct): T = throw NotImplementedError()
  def visit(rule: Rule): T = throw NotImplementedError()
  def visit(fact: Fact): T = throw NotImplementedError()
  def visit(binaryRecursiveStruct: BinaryRecursiveStruct): T = throw NotImplementedError()


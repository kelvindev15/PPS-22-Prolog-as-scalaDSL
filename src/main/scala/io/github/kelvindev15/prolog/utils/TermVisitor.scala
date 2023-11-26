package io.github.kelvindev15.prolog.utils

import io.github.kelvindev15.prolog.core.{Constant, PrologList, RecursiveStruct, Struct, Term, Variable}
import io.github.kelvindev15.prolog.core.Constant.{Atom, Numeric}
import io.github.kelvindev15.prolog.core.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.core.Struct.{Clause, Directive, Fact, Rule}

trait TermVisitor[T]:
  def visit(term: Term): T = term match
    case constant: Constant => visit(constant)
    case variable: Variable => visit(variable)
    case struct: Struct => visit(struct)
  def visit(constant: Constant): T = constant match
    case atom: Atom => visit(atom)
    case numeric: Numeric => visit(numeric)
  def visit(atom: Atom): T = throw NotImplementedError()
  def visit(numeric: Numeric): T = throw NotImplementedError()
  def visit(variable: Variable): T = throw NotImplementedError()
  def visit(struct: Struct): T = throw NotImplementedError()
  def visit(clause: Clause): T = clause match
    case fact: Fact => visit(fact)
    case rule: Rule => visit(rule)
    case directive: Directive => visit(directive)
  def visit(rule: Rule): T = throw NotImplementedError()
  def visit(fact: Fact): T = throw NotImplementedError()
  def visit(directive: Directive): T = throw NotImplementedError()
  def visit(recursiveStruct: RecursiveStruct): T = recursiveStruct match
    case list: PrologList => visit(list)
    case binary: BinaryRecursiveStruct => visit(binary)
  def visit(binaryRecursiveStruct: BinaryRecursiveStruct): T = visit(binaryRecursiveStruct.asInstanceOf[Struct])
  def visit(list: PrologList): T = throw NotImplementedError()


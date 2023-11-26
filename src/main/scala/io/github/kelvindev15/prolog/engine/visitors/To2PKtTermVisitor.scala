package io.github.kelvindev15.prolog.engine.visitors

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.core.Struct.{Clause, Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.{Constant, RecursiveStruct, Struct, Variable}
import io.github.kelvindev15.prolog.utils.TermVisitor
import it.unibo.tuprolog.core.{Scope as KScope, Term as KTerm}

class To2PKtTermVisitor() extends TermVisitor[KTerm]:
  private val scope: KScope = KScope.empty()
  override def visit(atom: Atom): KTerm = scope.atomOf(atom.unquotedValue)
  override def visit(numeric: Constant.Numeric): KTerm = numeric.value match
    case value: Double => scope.numOf(value)
    case value: Int => scope.numOf(value)
  override def visit(struct: Struct): KTerm = struct match
    case clause: Clause => super.visit(clause)
    case _ => scope.structOf(struct.functor.unquotedValue, struct.arguments.map(this.visit)*)
  override def visit(fact: Fact): KTerm = fact.head.map(h => scope.factOf(h.accept(this).asStruct())).get
  override def visit(rule: Rule): KTerm =
    rule.head.map(h => scope.ruleOf(h.accept(this).asStruct(), rule.body.accept(this))).get
  override def visit(directive: Directive): KTerm =  scope.directiveOf(directive.body.accept(this))
  override def visit(variable: Variable): KTerm = scope.varOf(variable.name)
  override def visit(binaryRecursiveStruct: BinaryRecursiveStruct): KTerm =
    visit(binaryRecursiveStruct.asInstanceOf[Struct])


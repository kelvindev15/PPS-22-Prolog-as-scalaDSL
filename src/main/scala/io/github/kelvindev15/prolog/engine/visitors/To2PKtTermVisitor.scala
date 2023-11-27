package io.github.kelvindev15.prolog.engine.visitors

import io.github.kelvindev15.prolog.core.*
import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.PrologList.Cons
import io.github.kelvindev15.prolog.core.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.core.Struct.{Clause, Directive, Fact, Rule}
import io.github.kelvindev15.prolog.utils.TermVisitor
import it.unibo.tuprolog.core.{Atom as KAtom, Cons as KCons, Directive as KDirective, EmptyList as KEmptyList, Fact as KFact, Numeric as KNum, Rule as KRule, Scope as KScope, Struct as KStruct, Term as KTerm}

import scala.jdk.CollectionConverters.*

class To2PKtTermVisitor(scope: KScope = KScope.empty()) extends TermVisitor[KTerm]:
  override def visit(atom: Atom): KTerm = KAtom.of(atom.unquotedValue)
  override def visit(numeric: Constant.Numeric): KTerm = numeric.value match
    case value: Double => KNum.of(value)
    case value: Int => KNum.of(value)
  override def visit(struct: Struct): KTerm = struct match
    case clause: Clause => super.visit(clause)
    case list: PrologList => visit(list)
    case _ => KStruct.of(struct.functor.unquotedValue, struct.arguments.map(this.visit)*)
  override def visit(fact: Fact): KTerm = fact.head.map(h => KFact.of(h.accept(this).asStruct())).get
  override def visit(rule: Rule): KTerm =
    rule.head.map(h => KRule.of(h.accept(this).asStruct(), rule.body.accept(this))).get
  override def visit(directive: Directive): KTerm = KDirective.of(directive.body.accept(this))
  override def visit(variable: Variable): KTerm = scope.varOf(variable.name)
  override def visit(binaryRecursiveStruct: BinaryRecursiveStruct): KTerm =
    visit(binaryRecursiveStruct.asInstanceOf[Struct])
  override def visit(list: PrologList): KTerm = list match
    case head: Cons => KCons.of(visit(head.head), visit(head.tail))
    case PrologList.Nil => KEmptyList.getInstance()

object To2PKtTermVisitor:
  def withNewScope: To2PKtTermVisitor = To2PKtTermVisitor(KScope.empty())

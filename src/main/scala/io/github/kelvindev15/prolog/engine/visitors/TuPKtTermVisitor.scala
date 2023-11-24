package io.github.kelvindev15.prolog.engine.visitors

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.{Clause, Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.{Constant, Struct, Variable}
import io.github.kelvindev15.prolog.utils.TermVisitor
import it.unibo.tuprolog.core.{
  Term as KTerm,
  Atom as KAtom,
  Numeric as KNumeric,
  Var as KVar,
  Struct as KStruct,
  Fact as KFact,
  Rule as KRule,
  Directive as KDirective,
}

class TuPKtTermVisitor extends TermVisitor[KTerm]:
  override def visit(atom: Atom): KTerm = KAtom.of(atom.unquotedValue)
  override def visit(numeric: Constant.Numeric): KTerm = KNumeric.of(numeric.value.asInstanceOf[Double])
  override def visit(struct: Struct): KTerm = struct match
    case clause: Clause => super.visit(clause)
    case _ => KStruct.of(struct.functor.unquotedValue, struct.arguments.map(this.visit)*)
  override def visit(fact: Fact): KTerm = fact.head.map(h => KFact.of(h.accept(this).asStruct())).get
  override def visit(rule: Rule): KTerm =
    rule.head.map(h => KRule.of(h.accept(this).asStruct(), rule.body.accept(this))).get
  override def visit(directive: Directive): KTerm =  KDirective.of(directive.body.accept(this))
  override def visit(variable: Variable): KTerm = KVar.of(variable.name)


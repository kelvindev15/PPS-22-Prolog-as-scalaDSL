package io.github.kelvindev15.prolog.engine.utils

import it.unibo.tuprolog.core.{Atom as KAtom, Cons as KCons, Directive as KDirective, EmptyList as KEmptyList, Fact as KFact, Numeric as KNumeric, Rule as KRule, Scope as KScope, Struct as KStruct, Var as KVar}
import it.unibo.tuprolog.theory.Theory as KTheory

object TuPrologFactoryMethods:
  export it.unibo.tuprolog.core.{ Term as KTerm, Clause as KClause }
  def ktAtomOf(value: String): KAtom = KAtom.of(value)
  def ktVarOf(name: String): KVar = KVar.of(name)
  def ktStructOf(functor: String, terms: KTerm*): KStruct = KStruct.of(functor, terms*)
  def ktRuleOf(head: KStruct, body: KTerm*): KRule = KRule.of(head, body*)
  def ktFactOf(head: KStruct): KFact = KFact.of(head)
  def ktDirectiveOf(body1: KTerm, bodies: KTerm*): KDirective = KDirective.of(body1, bodies*)
  def ktConsOf(head: KTerm, tail: KTerm): KCons = KCons.of(head, tail)
  def ktEmptyList: KEmptyList = KEmptyList.getInstance()
  def ktNumOf(value: Int): KNumeric = KNumeric.of(value)
  def ktNumOf(value: Double): KNumeric = KNumeric.of(value)
  def ktEmptyScope: KScope = KScope.empty()
  def ktTheoryOf(clauses: KClause*): KTheory = KTheory.of(clauses*)
  
  

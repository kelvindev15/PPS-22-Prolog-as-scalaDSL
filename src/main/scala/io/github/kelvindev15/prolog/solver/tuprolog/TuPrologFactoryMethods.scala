package io.github.kelvindev15.prolog.solver.tuprolog

import it.unibo.tuprolog.core.{
  Atom as KAtom,
  Cons as KCons,
  Directive as KDirective,
  EmptyList as KEmptyList,
  Fact as KFact,
  Numeric as KNumeric,
  Rule as KRule,
  Scope as KScope,
  Struct as KStruct,
  Var as KVar
}
import it.unibo.tuprolog.theory.Theory as KTheory

private[tuprolog] object TuPrologFactoryMethods:
  export it.unibo.tuprolog.core.{Term as KTerm, Clause as KClause}

  /** Returns a tuProlog [[KAtom]].
    *
    * @param value
    *   the value of the atom.
    */
  def ktAtomOf(value: String): KAtom = KAtom.of(value)

  /** Returns a tuProlog [[KVar]].
    *
    * @param name
    *   the name of the variable.
    */
  def ktVarOf(name: String): KVar = KVar.of(name)

  /** Returns a tuProlog [[KStruct]].
    *
    * @param functor
    *   the struct functor's name.
    * @param terms
    *   the arguments of the struct.
    */
  def ktStructOf(functor: String, terms: KTerm*): KStruct =
    KStruct.of(functor, terms*)

  /** Returns a tuProlog [[KRule]].
    *
    * @param head
    *   the head of the rule.
    * @param body
    *   the body of the rule.
    */
  def ktRuleOf(head: KStruct, body: KTerm*): KRule = KRule.of(head, body*)

  /** Returns a tuProlog [[KFact]] (A rule with no body).
    *
    * @param head
    *   the head of the rule.
    */
  def ktFactOf(head: KStruct): KFact = KFact.of(head)

  /** Returns a tuProlog [[KDirective]].
    *
    * @param body1
    *   first argument of the directive
    * @param bodies
    *   other arguments of the directive
    */
  def ktDirectiveOf(body1: KTerm, bodies: KTerm*): KDirective =
    KDirective.of(body1, bodies*)

  /** Returns a tuProlog [[KCons]].
    *
    * @param head
    *   the head of the list.
    * @param tail
    *   the tail of the list.
    */
  def ktConsOf(head: KTerm, tail: KTerm): KCons = KCons.of(head, tail)

  /** Returns a tuProlog [[KEmptyList]]. */
  def ktEmptyList: KEmptyList = KEmptyList.getInstance()

  /** Returns a tuProlog [[KNumeric]] from an int value.
    *
    * @param value
    *   the int value of the numeric constant.
    */
  def ktNumOf(value: Int): KNumeric = KNumeric.of(value)

  /** Returns a tuProlog [[KNumeric]] from a double value.
    *
    * @param value
    *   the double value of the numeric constant.
    */
  def ktNumOf(value: Double): KNumeric = KNumeric.of(value)

  /** Returns an empty tuProlog [[KScope]]. */
  def ktEmptyScope: KScope = KScope.empty()

  /** Returns a tuProlog [[KTheory]] of the provided [[KClause]]s.
    *
    * @param clauses
    *   the clauses forming the theory.
    */
  def ktTheoryOf(clauses: KClause*): KTheory = KTheory.of(clauses*)

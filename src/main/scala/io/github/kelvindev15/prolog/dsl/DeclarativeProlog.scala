package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.Struct.{Clause, Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.theory.Theory
import io.github.kelvindev15.prolog.core.{Struct, Term}
import io.github.kelvindev15.prolog.dsl.DeclarativeProlog.{
  MutableDynamicTheoryWrapper,
  MutableTheoryWrapper
}

trait DeclarativeProlog:
  dsl: PrologDSL =>
  private var prologProgram: PrologProgram = PrologProgram()

  /** Returns a new [[PrologProgram]].
    *
    * @param program
    *   a function that takes a [[PrologProgram]] as a context parameter and
    *   operates on it.
    */
  def prolog(program: PrologProgram ?=> Unit): PrologProgram =
    given p: PrologProgram = prologProgram
    program
    prologProgram

  /** Sets the static theory of a [[PrologProgram]].
    * Warning: it overrides any previously static theory set in the program.
    *
    * @param program
    *   the program whose static theory has to be set.
    * @param theory
    *   a function that takes a [[MutableTheoryWrapper]] as a context parameter
    *   and operates on it e.g to add or remove clauses.
    */
  def staticTheory(using program: PrologProgram)(
      theory: MutableTheoryWrapper ?=> Unit
  ): Unit =
    given t: MutableTheoryWrapper = MutableDynamicTheoryWrapper()
    theory
    prologProgram = program.setStaticTheory(t.theory)

  /** Sets the dynamic theory of a [[PrologProgram]].
    * Warning: it overrides any previously dynamic theory set in the program.
    *
    * @param program
    *   the program whose dynamic theory has to be set.
    * @param theory
    *   a function that takes a [[MutableDynamicTheoryWrapper]] as a context
    *   parameter and operates on it e.g to add or remove clauses.
    */
  def dynamicTheory(using program: PrologProgram)(
      theory: MutableDynamicTheoryWrapper ?=> Unit
  ): Unit =
    given t: MutableDynamicTheoryWrapper = MutableDynamicTheoryWrapper()
    theory
    prologProgram = prologProgram.setDynamicTheory(t.theory)

  /** Alias of [[dynamicTheory]]. Sets the dynamic theory of a [[PrologProgram]].
   * Warning: it overrides any previously dynamic theory set in the program.
   *
   * @param program
   * the program whose dynamic theory has to be set.
   * @param theory
   * a function that takes a [[MutableDynamicTheoryWrapper]] as a context
   * parameter and operates on it e.g to add or remove clauses.
   */
  def programTheory(using program: PrologProgram)(
    theory: MutableDynamicTheoryWrapper ?=> Unit
  ): Unit =
    given t: MutableDynamicTheoryWrapper = MutableDynamicTheoryWrapper()
    theory
    prologProgram = prologProgram.setDynamicTheory(t.theory)  

  /** Add an assert(X) clause to the [[dynamicTheory]] provided as a context
    * parameter.
    *
    * @param dynamicTheory
    *   the theory to which the clause will be added.
    * @param clause
    *   the clause to assert in the theory.
    */
  def assert(using dynamicTheory: MutableDynamicTheoryWrapper)(
      clause: Clause
  ): Unit =
    dynamicTheory add "assert" (clause)

  /** Add an asserta(X) clause to the [[dynamicTheory]] provided as a context
    * parameter.
    *
    * @param dynamicTheory
    *   the theory to which the clause will be added.
    * @param clause
    *   the clause to assert in the theory.
    */
  def assertA(using dynamicTheory: MutableDynamicTheoryWrapper)(
      clause: Clause
  ): Unit =
    dynamicTheory add "asserta" (clause)

  /** Add an assertz(X) clause to the [[dynamicTheory]] provided as a context
    * parameter.
    *
    * @param dynamicTheory
    *   the theory to which the clause will be added.
    * @param clause
    *   the clause to assert in the theory.
    */
  def assertZ(using dynamicTheory: MutableDynamicTheoryWrapper)(
      clause: Clause
  ): Unit =
    dynamicTheory add "assertz" (clause)

  /** Add a rule to a [[MutableTheoryWrapper]] provided as a context parameter.
    *
    * @param theory
    *   the theory to which the rule will be added.
    * @param rule
    *   the rule to add to the [[theory]].
    */
  def rule(using theory: MutableTheoryWrapper)(rule: Rule): Unit =
    theory add rule

  /** Add a fact to a [[MutableTheoryWrapper]] provided as a context parameter.
    *
    * @param theory
    *   the theory to which the fact will be added.
    * @param fact
    *   the fact to add to the [[theory]].
    */
  def fact(using theory: MutableTheoryWrapper)(fact: Fact): Unit =
    theory add fact

  /** Add a directive to a [[MutableTheoryWrapper]] provided as a context
    * parameter.
    *
    * @param theory
    *   the theory to which the directive will be added.
    * @param directive
    *   the directive to add to the [[theory]].
    */
  def directive(using theory: MutableTheoryWrapper)(
      directive: Directive
  ): Unit = theory add directive

  /** Add a clause (either a rule, a fact or a directive) to a
    * [[MutableTheoryWrapper]] provided as a context parameter.
    *
    * @param theory
    *   the theory to which the clause will be added.
    * @param c
    *   the clause to add to the [[theory]].
    */
  def clause(using theory: MutableTheoryWrapper)(c: Clause): Unit = theory add c

  /** Sets the goal of a [[PrologProgram]] provided as a context parameter.
    *
    * @param program
    *   the program whose goal will be set.
    * @param g
    *   the goal to set in the [[program]].
    */
  def goal(using program: PrologProgram)(g: Term): Unit =
    prologProgram = prologProgram withGoal g

object DeclarativeProlog:
  trait MutableTheoryWrapper:
    var theory: Theory = Theory()
    def add(clause: Clause): Theory = { theory = theory add clause; theory }
    def remove(clause: Clause): Theory = {
      theory = theory remove clause; theory
    }

  trait MutableDynamicTheoryWrapper extends MutableTheoryWrapper

  object MutableDynamicTheoryWrapper:
    def apply(t: Theory): MutableDynamicTheoryWrapper =
      new MutableDynamicTheoryWrapper:
        theory = t
    def apply(clauses: Clause*): MutableDynamicTheoryWrapper =
      new MutableDynamicTheoryWrapper:
        theory = Theory(clauses*)

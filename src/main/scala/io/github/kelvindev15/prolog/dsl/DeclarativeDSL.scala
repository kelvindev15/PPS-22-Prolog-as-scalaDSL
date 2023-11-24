package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.Struct.{Clause, Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.Theory.Theory
import io.github.kelvindev15.prolog.core.{Struct, Term}
import io.github.kelvindev15.prolog.dsl.DeclarativeDSL.{MutableDynamicTheoryWrapper, MutableTheoryWrapper}


trait DeclarativeDSL:
  dsl: PrologDSL =>
  private var prologProgram: PrologProgram = PrologProgram()

  def prolog(program: PrologProgram ?=> Unit): PrologProgram =
    given p: PrologProgram = prologProgram
    program
    prologProgram

  def staticTheory(using program: PrologProgram)(theory: MutableTheoryWrapper ?=> Unit): Unit =
    given t: MutableTheoryWrapper = MutableDynamicTheoryWrapper()
    theory
    prologProgram = program.setStaticTheory(t.theory)

  def dynamicTheory(using program: PrologProgram)(theory: MutableDynamicTheoryWrapper ?=> Unit): Unit =
    given t: MutableDynamicTheoryWrapper = MutableDynamicTheoryWrapper()
    theory
    prologProgram = prologProgram.setDynamicTheory(t.theory)

  def assert(using dynamicTheory: MutableDynamicTheoryWrapper)(clause: Clause): Unit =
    dynamicTheory add "assert"(clause)

  def assertA(using dynamicTheory: MutableDynamicTheoryWrapper)(clause: Clause): Unit =
    dynamicTheory add "asserta"(clause)

  def assertZ(using dynamicTheory: MutableDynamicTheoryWrapper)(clause: Clause): Unit =
    dynamicTheory add "assertz"(clause)

  def rule(using theory: MutableTheoryWrapper)(rule: Rule): Unit = theory add rule
  def fact(using theory: MutableTheoryWrapper)(fact: Fact): Unit = theory add fact
  def directive(using theory: MutableTheoryWrapper)(directive: Directive): Unit = theory add directive
  def clause(using theory: MutableTheoryWrapper)(c: Clause): Unit = theory add c

  def solve(using program: PrologProgram)(goal: Term): Unit =
    prologProgram = prologProgram withGoal goal

object DeclarativeDSL:
  trait MutableTheoryWrapper:
    var theory: Theory = Theory()
    def add(clause: Clause): Theory = { theory = theory add clause; theory }
    def remove(clause: Clause): Theory = { theory = theory remove clause; theory }

  trait MutableDynamicTheoryWrapper extends MutableTheoryWrapper

  object MutableDynamicTheoryWrapper:
    def apply(t: Theory): MutableDynamicTheoryWrapper = new MutableDynamicTheoryWrapper:
      theory = t
    def apply(clauses: Clause*): MutableDynamicTheoryWrapper = new MutableDynamicTheoryWrapper:
      theory = Theory(clauses*)

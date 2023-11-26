package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.core.Term
import io.github.kelvindev15.prolog.core.theory.Theory

trait PrologProgram:
  def staticTheory: Theory
  def dynamicTheory: Theory
  def goal: Option[Term]
  def withGoal(goal: Term): PrologProgram
  def setStaticTheory(theory: Theory): PrologProgram
  def setDynamicTheory(theory: Theory): PrologProgram

object PrologProgram:
  def apply(staticTheory: Theory = Theory(), dynamicTheory: Theory = Theory()): PrologProgram =
    PrologProgramImpl(staticTheory, dynamicTheory, None)
    
  def emptyTheory: PrologProgram = PrologProgramImpl(Theory.empty, Theory.empty, None)  

  private case class PrologProgramImpl(
    staticTheory: Theory,
    dynamicTheory: Theory,
    goal: Option[Term],
  ) extends PrologProgram:
    override def setStaticTheory(theory: Theory): PrologProgram = PrologProgramImpl(theory, dynamicTheory, goal)
    override def setDynamicTheory(theory: Theory): PrologProgram = PrologProgramImpl(staticTheory, theory, goal)
    override def withGoal(goal: Term): PrologProgram = PrologProgramImpl(staticTheory, dynamicTheory, Some(goal))





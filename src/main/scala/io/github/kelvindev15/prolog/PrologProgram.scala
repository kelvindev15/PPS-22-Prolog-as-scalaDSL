package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.core.Term
import io.github.kelvindev15.prolog.core.theory.Theory

/** Represents an instance of a prolog program. */
trait PrologProgram:

  /** The static [[Theory]] of the program. */
  val staticTheory: Theory

  /** The dynamic [[Theory]] of the program. */
  val dynamicTheory: Theory

  /** An [[Option]] that if filled with the goal set for the program. */
  val goal: Option[Term]

  /** Returns this program with the new provided goal.
   *
   * @param goal a [[Term]] representing the goal to be set for this program.
   */
  def withGoal(goal: Term): PrologProgram

  /** Returns this program with the new provided static theory.
   *
   * @param theory the static [[Theory]] to be set for this program.
   * @return
   */
  def setStaticTheory(theory: Theory): PrologProgram

  /** Returns this program with the new provided dynamic theory
   *
   * @param theory the dynamic [[Theory]] to be set for this program.
   * @return
   */
  def setDynamicTheory(theory: Theory): PrologProgram

object PrologProgram:

  /** Returns an instance of a [[PrologProgram]].
   *
   * @param staticTheory the static [[Theory]] of the prolog program
   * @param dynamicTheory the dynamic [[Theory]] of the prolog program
   */
  def apply(staticTheory: Theory = Theory(), dynamicTheory: Theory = Theory()): PrologProgram =
    PrologProgramImpl(staticTheory, dynamicTheory, None)

  /**
   *
   * @return an instance of a [[PrologProgram]] whose static and dynamic [[Theory]] are empty and
   *         with no goal.
   */
  def emptyTheory: PrologProgram = PrologProgramImpl(Theory.empty, Theory.empty, None)  

  private case class PrologProgramImpl(
    staticTheory: Theory,
    dynamicTheory: Theory,
    goal: Option[Term],
  ) extends PrologProgram:
    override def setStaticTheory(theory: Theory): PrologProgram = PrologProgramImpl(theory, dynamicTheory, goal)
    override def setDynamicTheory(theory: Theory): PrologProgram = PrologProgramImpl(staticTheory, theory, goal)
    override def withGoal(goal: Term): PrologProgram = PrologProgramImpl(staticTheory, dynamicTheory, Some(goal))





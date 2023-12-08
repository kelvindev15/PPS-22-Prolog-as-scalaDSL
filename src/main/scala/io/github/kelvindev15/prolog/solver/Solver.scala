package io.github.kelvindev15.prolog.solver

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.{Struct, Term, Variable}
import io.github.kelvindev15.prolog.solver.Solver.Solution
import io.github.kelvindev15.prolog.solver.Solver.Solution.{Halt, Yes}
import io.github.kelvindev15.prolog.solver.tuprolog.TuPrologClassicSolver

import scala.reflect.ClassTag

/** Instances of this trait solve [[PrologProgram]]s. */
trait Solver:

  /** Solves a program.
    *
    * @param program
    *   the program to solve.
    * @return
    *   an iterator over the program's [[Solution]]s.
    */
  def solve(program: PrologProgram): Iterator[Solution]

  /** Solves a program.
    *
    * @param program
    *   the program to solve.
    * @return
    *   a lazy list of the program's [[Solution]]s.
    */
  def lazySolve(program: PrologProgram): LazyList[Solution] =
    solve(program).to(LazyList)

  /** Solves a program.
    *
    * @param program
    *   the program to solve.
    * @return
    *   a list of the program's [[Solution]]s.
    */
  def solutionsOf(program: PrologProgram): Seq[Solution] =
    solve(program).to(Seq)

  /** Returns true if the program admits at least one solution.
    *
    * @param program
    *   the program to solve.
    */
  def hasSolutionFor(program: PrologProgram): Boolean =
    val solutions = solve(program)
    solutions.hasNext && solutions.next().isInstanceOf[Solution.Yes]

  /** Returns true if the provided goal admits at least one solution.
    *
    * @param goal
    *   the program to satisfy.
    */
  def hasSolutionFor(goal: Term): Boolean =
    val solutions = solve(PrologProgram.emptyTheory withGoal goal)
    solutions.hasNext && solutions.next().isInstanceOf[Solution.Yes]

object Solver:
  /** A mapping from [[Variable]]s to [[Term]]s */
  type Substitution = Map[Variable, Term]

  object Substitution:

    /** Returns an instance of a prolog [[Substitution]] */
    def apply(substitutions: (Variable, Term)*): Substitution = Map(
      substitutions*
    )

  enum Solution:
    /** A Yes solution, with the resolved query and the inferred substitutions.
      */
    case Yes(query: Struct, substitution: Substitution)

    /** A No solution, the the attempted query.
      */
    case No(query: Struct)

    /** A wrapper for the exception raised by the solver.
      */
    case Halt(exception: Exception)

  extension (solution: Solution)
    /** Retrieve the substitution term for the provided variable.
      */
    def apply(variable: Variable): Option[Term] = solution match
      case y: Solution.Yes => Some(y.substitution(variable))
      case _               => None

    /** Returns true if the solution is a [[Yes]]. */
    def isYes: Boolean = solution.isInstanceOf[Solution.Yes]

    /** Returns true if the solution is a [[No]]. */
    def isNo: Boolean = solution.isInstanceOf[Solution.No]

    /** Returns true if the solution is a [[Halt]]. */
    def isHalt: Boolean = solution.isInstanceOf[Solution.Halt]

    /** Cast the solution to a [[Solution]] of type [[T]].
      *
      * @tparam T
      *   the type of the expected solution
      *
      * @throws ClassCastException
      *   if [[T]] is not the runtime type of the solution.
      */
    def as[T <: Solution](using ClassTag[T]): T =
      solution.asInstanceOf[T]

    /** Cast the solution to a [[Yes]] [[Solution]].
      *
      * @throws ClassCastException
      *   if [[Yes]] is not the runtime type of the solution.
      */
    def asYes: Solution.Yes = solution.as[Solution.Yes]

    /** Cast the solution to a [[No]] [[Solution]].
      *
      * @throws ClassCastException
      *   if [[No]] is not the runtime type of the solution.
      */
    def asNo: Solution.No = solution.as[Solution.No]

    /** Cast the solution to a [[Halt]] [[Solution]].
      *
      * @throws ClassCastException
      *   if [[Halt]] is not the runtime type of the solution.
      */
    def asHalt: Solution.Halt = solution.as[Solution.Halt]

  /** Returns a Solver that leverages on the tuProlog engine. */
  def tuPrologSolver(): Solver = TuPrologClassicSolver()

  /** Solves a program using a solver that is either provided as a context
    * parameter, found as a given instance or by using the default one
    * ([[TuPrologClassicSolver]]).
    *
    * @param solver
    *   the solver that should be used.
    * @param prologProgram
    *   the program to solve.
    * @return
    *   an iterator over the [[Solution]]s of the program.
    */
  def solve(using solver: Solver = tuPrologSolver())(
      prologProgram: PrologProgram
  ): Iterator[Solution] =
    solver solve prologProgram

  /** Solves a program using a solver that is either provided as a context
    * parameter, found as a given instance or by using the default one
    * ([[TuPrologClassicSolver]]).
    *
    * @param solver
    *   the solver that should be used.
    * @param prologProgram
    *   the program to solve.
    * @return
    *   a lazy list of the program's [[Solution]]s.
    */
  def lazySolve(using solver: Solver = tuPrologSolver())(
      prologProgram: PrologProgram
  ): LazyList[Solution] =
    solver lazySolve prologProgram

  /** Solves a program using a solver that is either provided as a context
    * parameter, found as a given instance or by using the default one
    * ([[TuPrologClassicSolver]]).
    *
    * @param solver
    *   the solver that should be used.
    * @param prologProgram
    *   the program to solve.
    * @return
    *   a list of the program's [[Solution]]s.
    */
  def solutionsOf(using solver: Solver = tuPrologSolver())(
      prologProgram: PrologProgram
  ): Seq[Solution] =
    solver solutionsOf prologProgram

  /** Solves the goal on program with an empty theory using a solver that is
    * either provided as a context parameter, found as a given instance or by
    * using the default one ([[TuPrologClassicSolver]]).
    *
    * @param solver
    *   the solver that should be used.
    * @param query
    *   the goal to be solved.
    * @return
    *   an iterator over the program's [[Solution]]s.
    */
  def query(using solver: Solver = tuPrologSolver())(
      query: Term
  ): Iterator[Solution] =
    solver solve (PrologProgram.emptyTheory withGoal query)

  /** Solves the goal on program with an empty theory using a solver that is
    * either provided as a context parameter, found as a given instance or by
    * using the default one ([[TuPrologClassicSolver]]).
    *
    * @param solver
    *   the solver that should be used.
    * @param query
    *   the goal to be solved.
    * @return
    *   a lazy list of the program's [[Solution]]s.
    */
  def lazyQuery(using solver: Solver = tuPrologSolver())(
      query: Term
  ): LazyList[Solution] =
    solver lazySolve (PrologProgram.emptyTheory withGoal query)

  /** Returns true if the program admits at least one solution. If not specified
    * the default solver that will be used is the [[TuPrologClassicSolver]].
    *
    * @param solver
    *   the solver that should be used.
    * @param program
    *   the program to solve.
    */
  def hasSolutionForProgram(using solver: Solver = tuPrologSolver())(
      program: PrologProgram
  ): Boolean = solver hasSolutionFor program

  /** Returns true if the provided goal admits at least one solution. If not
    * specified the default solver that will be used is the
    * [[TuPrologClassicSolver]].
    * @param solver
    *   the solver that should be used.
    * @param goal
    *   the program to satisfy.
    */
  def hasSolutionForGoal(using solver: Solver = tuPrologSolver())(
      goal: Term
  ): Boolean = solver hasSolutionFor goal

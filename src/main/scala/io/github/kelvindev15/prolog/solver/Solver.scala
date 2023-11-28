package io.github.kelvindev15.prolog.solver

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.{Struct, Term, Variable}
import io.github.kelvindev15.prolog.solver.Solver.Solution
import io.github.kelvindev15.prolog.solver.Solver.Solution.{Halt, Yes}
import io.github.kelvindev15.prolog.solver.tuprolog.TuPrologClassicSolver

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
    Solver.solve(program).to(LazyList)

  /** Solves a program.
    *
    * @param program
    *   the program to solve.
    * @return
    *   a list of the program's [[Solution]]s.
    */
  def solutionsOf(program: PrologProgram): Seq[Solution] =
    Solver.solve(program).to(Seq)

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

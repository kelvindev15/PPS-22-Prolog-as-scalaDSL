package io.github.kelvindev15.prolog.engine

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.{Struct, Term, Variable}
import io.github.kelvindev15.prolog.engine.Solver.Solution
import io.github.kelvindev15.prolog.engine.Solver.Solution.{Halt, Yes}
import io.github.kelvindev15.prolog.engine.solvers.TuPrologClassicSolver

trait Solver:
  def solve(program: PrologProgram): Iterator[Solution]
  def lazySolve(program: PrologProgram): LazyList[Solution] = Solver.solve(program).to(LazyList)
  def solutionsOf(program: PrologProgram): Seq[Solution] = Solver.solve(program).to(Seq)


object Solver:
  type Substitution = Map[Variable, Term]
  object Substitution:
    def apply(substitutions: (Variable, Term)*): Substitution = Map(substitutions*)
  enum Solution:
    case Yes(query: Struct, substitution: Substitution)
    case No(query: Struct)
    case Halt(exception: Exception)
  
  def tuPrologSolver(): Solver = TuPrologClassicSolver()
  
  def solve(using solver: Solver = tuPrologSolver())(prologProgram: PrologProgram): Iterator[Solution] = 
    solver solve prologProgram

  def lazySolve(using solver: Solver = tuPrologSolver())(prologProgram: PrologProgram): LazyList[Solution] =
    solver lazySolve prologProgram
    
  def solutionsOf(using solver: Solver = tuPrologSolver())(prologProgram: PrologProgram): Seq[Solution] =
    solver solutionsOf prologProgram
   
  def query(using solver: Solver = tuPrologSolver())(query: Term): Iterator[Solution] =
    solver solve (PrologProgram.emptyTheory withGoal query)
    
  def lazyQuery(using solver: Solver = tuPrologSolver())(query: Term): LazyList[Solution] = 
    solver lazySolve (PrologProgram.emptyTheory withGoal query)

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
  enum Solution:
    case Yes(query: Struct, substitution: Substitution)
    case No(query: Struct)
    case Halt(exception: Exception)
  
  def tuPrologSolver(): Solver = TuPrologClassicSolver()
    
  def solve(using solver: Solver = tuPrologSolver())(prologProgram: PrologProgram): Iterator[Solution] = 
    solver solve prologProgram

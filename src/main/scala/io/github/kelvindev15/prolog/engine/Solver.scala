package io.github.kelvindev15.prolog.engine

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.theory.Theory
import io.github.kelvindev15.prolog.core.{Struct, Term, Variable}
import io.github.kelvindev15.prolog.engine.Solver.Solution
import io.github.kelvindev15.prolog.engine.Solver.Solution.{Halt, Yes}
import io.github.kelvindev15.prolog.engine.visitors.{BackVisitor, TuPKtTermVisitor}
import it.unibo.tuprolog.core.{Clause as KClause, Struct as KStruct, Substitution as KSubstitution, Term as KTerm}
import it.unibo.tuprolog.solve.{Solution as KSolution, Solver as KSolver}
import it.unibo.tuprolog.solve.channel.{InputChannel, OutputChannel}
import it.unibo.tuprolog.solve.classic.ClassicSolverFactory
import it.unibo.tuprolog.solve.flags.FlagStore
import it.unibo.tuprolog.theory.Theory as KTheory
import it.unibo.tuprolog.unify.Unificator
import scala.jdk.CollectionConverters.*

trait Solver:
  def solve(program: PrologProgram): Iterator[Solution]
  def lazySolve(program: PrologProgram): LazyList[Solution] = Solver.solve(program).to(LazyList)
  def solutionsOf(program: PrologProgram): Seq[Solution] = Solver.solve(program).to(Seq)
    

object Solver:
  type Substitution = Map[Variable, Term]
  enum Solution:
    case Yes(query: Struct, substitution: Substitution)
    case No(query: Struct)
    case Halt

  private val visitor = TuPKtTermVisitor()
  private val back = BackVisitor()
  given Conversion[Term, KTerm] = _.accept(visitor)
  given Conversion[KTerm, KClause] = _.asClause()
  given Conversion[KTerm, KStruct] = _.asStruct()
  given Conversion[Theory, KTheory] with
    override def apply(theory: Theory): KTheory = KTheory.of(theory.map(_.asClause()) *)
  given Conversion[KStruct, Struct] = back.visitStruct(_)
  given Conversion[KSubstitution, Substitution] = {
    case substitution: KSubstitution.Unifier => Map(
      substitution.asScala.toSeq.map(p => (back.visitVar(p._1),  back.visitTerm(p._2)))*
    )
  }
  given Conversion[KSolution, Solution] = {
    case yes: KSolution.Yes => Yes(yes.getQuery, yes.getSubstitution)
    case no: KSolution.No => Solution.No(no.getQuery)
    case halt: KSolution.Halt => Halt
  }
  given Conversion[java.util.Iterator[KSolution], Iterator[Solution]] = _.asScala.map(identity)

  private def tuPrologClassicSolverOf(staticTheory: Theory, dynamicTheory: Theory): KSolver =
    ClassicSolverFactory.INSTANCE.solverWithDefaultBuiltins(
      Unificator.getDefault,
      ClassicSolverFactory.INSTANCE.getDefaultRuntime,
      FlagStore.DEFAULT,
      staticTheory,
      dynamicTheory,
      InputChannel.stdIn(),
      OutputChannel.stdOut(),
      OutputChannel.stdErr(),
      OutputChannel.warn()
    )

  def tuPrologSolver(): Solver = (program: PrologProgram) =>
    val solver = tuPrologClassicSolverOf(program.dynamicTheory, program.staticTheory)
    program.goal.map { goal => solver.solve(goal.asStruct()).iterator() }.get
    
  def solve(using solver: Solver = tuPrologSolver())(prologProgram: PrologProgram): Iterator[Solution] = 
    solver.solve(prologProgram)

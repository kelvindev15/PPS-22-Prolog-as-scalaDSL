package io.github.kelvindev15.prolog.engine.solvers

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.theory.Theory
import io.github.kelvindev15.prolog.core.{Struct, Term}
import io.github.kelvindev15.prolog.engine.Solver
import io.github.kelvindev15.prolog.engine.Solver.Solution.{Halt, Yes}
import io.github.kelvindev15.prolog.engine.Solver.{Solution, Substitution}
import io.github.kelvindev15.prolog.engine.visitors.{From2PKtTermVisitor, To2PKtTermVisitor}
import it.unibo.tuprolog.core.{Clause as KClause, Struct as KStruct, Substitution as KSubstitution, Term as KTerm}
import it.unibo.tuprolog.solve.channel.{InputChannel, OutputChannel}
import it.unibo.tuprolog.solve.classic.ClassicSolverFactory
import it.unibo.tuprolog.solve.flags.FlagStore
import it.unibo.tuprolog.solve.{Solution as KSolution, Solver as KSolver}
import it.unibo.tuprolog.theory.Theory as KTheory
import it.unibo.tuprolog.unify.Unificator

import scala.jdk.CollectionConverters.*

class TuPrologClassicSolver extends Solver:
  private val to2pktVisitor = To2PKtTermVisitor.withNewScope
  private val from2pktVisitor = From2PKtTermVisitor()

  given Conversion[Term, KTerm] = _.accept(to2pktVisitor)
  given Conversion[KTerm, KClause] = _.asClause()
  given Conversion[KTerm, KStruct] = _.asStruct()
  given Conversion[Theory, KTheory] with
    override def apply(theory: Theory): KTheory =
      KTheory.of(theory.map(_.accept(To2PKtTermVisitor.withNewScope).asClause())*)
  given Conversion[KStruct, Struct] = from2pktVisitor.visitStruct(_)
  given Conversion[KSubstitution, Substitution] = {
    case substitution: KSubstitution.Unifier => Map(
      substitution.asScala.toSeq.map(p => (from2pktVisitor.visitVar(p._1), from2pktVisitor.visitTerm(p._2))) *
    )
  }

  given Conversion[KSolution, Solution] = {
    case yes: KSolution.Yes => Yes(yes.getQuery, yes.getSubstitution)
    case no: KSolution.No => Solution.No(no.getQuery)
    case halt: KSolution.Halt => Halt(halt.getException)
  }

  given Conversion[java.util.Iterator[KSolution], Iterator[Solution]] = _.asScala.map(identity)

  private def classicSolverOf(staticTheory: Theory, dynamicTheory: Theory): KSolver =
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

  override def solve(program: PrologProgram): Iterator[Solution] =
    val solver = classicSolverOf(program.staticTheory, program.dynamicTheory)
    program.goal.map { goal => solver.solve(goal.asStruct()).iterator() }.get

package io.github.kelvindev15.prolog.solver.tuprolog

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.theory.Theory
import io.github.kelvindev15.prolog.core.{Struct, Term}
import io.github.kelvindev15.prolog.solver.Solver
import io.github.kelvindev15.prolog.solver.Solver.Solution.{Halt, Yes}
import io.github.kelvindev15.prolog.solver.Solver.{Solution, Substitution}
import TuPrologFactoryMethods.*
import io.github.kelvindev15.prolog.solver.tuprolog.visitors.{From2PKtTermVisitor, To2PKtTermVisitor}
import it.unibo.tuprolog.core.{Struct as KStruct, Substitution as KSubstitution, Term as KTerm}
import it.unibo.tuprolog.solve.classic.ClassicSolverFactory
import it.unibo.tuprolog.solve.{Solution as KSolution, Solver as KSolver}
import it.unibo.tuprolog.theory.Theory as KTheory

import scala.jdk.CollectionConverters.*

private[tuprolog] object ConversionsUtils:
  private val from2pktVisitor = From2PKtTermVisitor()
  given Conversion[Term, KTerm] = _.accept(To2PKtTermVisitor.withNewScope)
  given Conversion[Theory, KTheory] with
    override def apply(theory: Theory): KTheory =
      ktTheoryOf(theory.map(_.accept(To2PKtTermVisitor.withNewScope).asClause()) *)
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

/** A [[Solver]] that leverages on the tuProlog engine */
class TuPrologClassicSolver extends Solver:
  import ConversionsUtils.given

  private def classicSolverOf(staticTheory: Theory, dynamicTheory: Theory): KSolver =
    ClassicSolverFactory.INSTANCE.solverWithDefaultBuiltins(
      ClassicSolverFactory.INSTANCE.getDefaultUnificator,
      ClassicSolverFactory.INSTANCE.getDefaultRuntime,
      ClassicSolverFactory.INSTANCE.getDefaultFlags,
      staticTheory,
      dynamicTheory,
      ClassicSolverFactory.INSTANCE.getDefaultInputChannel,
      ClassicSolverFactory.INSTANCE.getDefaultOutputChannel,
      ClassicSolverFactory.INSTANCE.getDefaultErrorChannel,
      ClassicSolverFactory.INSTANCE.getDefaultWarningsChannel
    )

  override def solve(program: PrologProgram): Iterator[Solution] =
    val solver = classicSolverOf(program.staticTheory, program.dynamicTheory)
    program.goal.map { goal => solver.solve(goal.castToStruct()).iterator() }.get

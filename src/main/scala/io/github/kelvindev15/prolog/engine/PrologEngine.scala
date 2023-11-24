package io.github.kelvindev15.prolog.engine

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.Term
import io.github.kelvindev15.prolog.core.Theory.Theory
import io.github.kelvindev15.prolog.engine.PrologEngine.Solution
import io.github.kelvindev15.prolog.engine.visitors.TuPKtTermVisitor
import it.unibo.tuprolog.solve.channel.{InputStore, OutputStore}
import it.unibo.tuprolog.solve.classic.ClassicSolverFactory
import it.unibo.tuprolog.solve.flags.FlagStore
import it.unibo.tuprolog.unify.Unificator
import it.unibo.tuprolog.solve.library.Runtime
import it.unibo.tuprolog.theory.Theory as KTheory
import it.unibo.tuprolog.core.{Clause as KClause, Struct as KStruct, Term as KTerm}
import it.unibo.tuprolog.solve.Solver as KSolver

import scala.jdk.CollectionConverters.*

trait PrologEngine extends Function[PrologProgram, Seq[Solution]]:
  ???

object PrologEngine:
  trait Solution

object Solver:
  private val visitor = TuPKtTermVisitor()
  given Conversion[Term, KTerm] = _.accept(visitor)
  given Conversion[KTerm, KClause] = _.asClause()
  given Conversion[KTerm, KStruct] = _.asStruct()
  given Conversion[Theory, KTheory] with
    override def apply(theory: Theory): KTheory = KTheory.of(theory.map(_.asClause())*)

  private def solverOf(staticTheory: Theory, dynamicTheory: Theory): KSolver =
    ClassicSolverFactory.INSTANCE.solverOf(
      Unificator.getDefault,
      Runtime.empty(),
      FlagStore.DEFAULT,
      staticTheory,
      dynamicTheory,
      InputStore.fromStandard(),
      OutputStore.fromStandard()
    )

  def solve(program: PrologProgram): Solution =
    val solver = solverOf(program.dynamicTheory, program.staticTheory)
    program.goal.foreach { t =>
      val goal: KStruct = Some(t.asStruct()).get
      val sol = solver.solve(goal)
      sol.iterator().forEachRemaining(s => {
        println(s)
      })
    }
    new Solution {}

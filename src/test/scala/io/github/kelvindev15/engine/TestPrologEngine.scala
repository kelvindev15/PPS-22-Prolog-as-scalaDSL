package io.github.kelvindev15.engine

import io.github.kelvindev15.engine.utils.EngineTestUtils
import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.{PrologList, Term}
import io.github.kelvindev15.prolog.dsl.{DeclarativeProlog, PrologDSL}
import io.github.kelvindev15.prolog.solver.Solver
import io.github.kelvindev15.prolog.solver.Solver.Solution
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

import scala.reflect
import scala.reflect.ClassTag

class TestPrologEngine
    extends AnyFlatSpec
    with Matchers
    with EngineTestUtils
    with PrologDSL
    with DeclarativeProlog:

  private val rainbowColors =
    PrologList("red", "orange", "yellow", "green", "blue", "indigo", "violet")
  private val rainbowProgram = prolog:
    staticTheory {
      for color <- rainbowColors do clause { "rainbow" (color) }
    }

  "'rainbow(orange)'" should "be a Yes solution of the rainbow program" in:
    expectOne[Solution.Yes]:
      Solver solve (rainbowProgram withGoal "rainbow" ("orange"))

  "A prolog program with no solution" should "return a single NO answer" in:
    expectOne[Solution.No]:
      Solver solve (rainbowProgram withGoal "rainbow" ("purple"))

  "Member predicate" should "give a Yes solution if the term is in the list" in:
    expect[Solution.Yes]:
      Solver query member("yellow", rainbowColors)

  "Member predicate" should "give a No solution if the term is not in the list" in:
    expect[Solution.No]:
      Solver query member("purple", rainbowColors)

  "The goal '2 is 1 + 3'" should "give a No solution" in:
    expectOne[Solution.No]:
      Solver query (2 is 1 + 3)

  "The goal 'X = 2, Y = 3, 5 is X + Y'" should "give a Yes solution" in:
    expectOne[Solution.Yes]:
      Solver query &&(X `=` 2, Y `=` 3, 5 is X + Y)

  "All solution" should "be returned by the engine" in:
    val fruit = "fruit"
    val fruits = Seq("banana", "orange", "apple")
    val query = fruit(X)
    Solver lazySolve {
      prolog:
        staticTheory:
          for f <- fruits do clause(fruit(f))
        goal:
          query
    } expectSolutionsIn fruits.map(e => query.yes(X -> e))

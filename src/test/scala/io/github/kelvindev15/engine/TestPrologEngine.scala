package io.github.kelvindev15.engine

import io.github.kelvindev15.prolog.core.{PrologList, Term}
import io.github.kelvindev15.prolog.dsl.{DeclarativeDSL, PrologDSL}
import io.github.kelvindev15.prolog.engine.Solver
import io.github.kelvindev15.prolog.engine.Solver.Solution
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

import scala.reflect
import scala.reflect.ClassTag

class TestPrologEngine extends AnyFlatSpec with Matchers with PrologDSL with DeclarativeDSL:

  private val rainbowColors = PrologList("red", "orange", "yellow", "green", "blue", "indigo", "violet")
  private val rainbowProgram = prolog:
    staticTheory {
      for color <- rainbowColors do clause { "rainbow"(color) }
    }

  private def expect[T <: Solution](using tag: ClassTag[T])(solutions: Iterator[Solution]): Unit =
    assert(solutions.hasNext)
    solutions.next() shouldBe a [T]
  private def expectOne[T <: Solution](using tag: ClassTag[T])(solution: Iterator[Solution]): Unit =
    expect[T](solution)
    solution.hasNext shouldBe false

  "'rainbow(orange)'" should "be a Yes solution of the rainbow program" in:
    expectOne[Solution.Yes]:
      Solver solve (rainbowProgram withGoal "rainbow"("orange"))

  "A prolog program with no solution" should "return a single NO answer" in:
    expectOne[Solution.No]:
      Solver solve (rainbowProgram withGoal "rainbow"("purple"))

  "Member predicate" should "give a Yes solution if the term is in the list" in:
    expect[Solution.Yes]:
      Solver solve {
        prolog {
          goal { member("yellow", rainbowColors) }
        }
      }

  "Member predicate" should "give a No solution if the term is not in the list" in:
    expect[Solution.No]:
      Solver solve {
        prolog {
          goal { member("purple", rainbowColors) }
        }
      }

package io.github.kelvindev15.prolog.solver.engine

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.{Constant, PrologList, Term}
import io.github.kelvindev15.prolog.dsl.{DeclarativeProlog, PrologDSL}
import io.github.kelvindev15.prolog.solver.Solver
import io.github.kelvindev15.prolog.solver.Solver.Solution
import io.github.kelvindev15.prolog.solver.engine.utils.EngineTestUtils
import io.github.kelvindev15.prolog.solver.tuprolog.visitors.To2PKtTermVisitor
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

import scala.reflect
import scala.reflect.ClassTag

class PrologEngineSpec
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

  "Solver's method 'admitsSolutions'" should "return false on a program with no solutions, and yes on a program" +
    " with at least one solution" in:
      assert(!(Solver hasSolutionForGoal member("notInList", list(1, 2, 4))))
      assert(Solver hasSolutionForGoal member("b", list("a", "b", "c", 1)))

class TestPrologEngine
    extends AnyFunSuite
    with Matchers
    with EngineTestUtils
    with PrologDSL
    with DeclarativeProlog:
  test("Access to substitutions of Yes/No solutions"):
    val solutions = Solver query member(X, list(1, 2, 3))
    assert(solutions.hasNext)
    val first = solutions.next()
    assert(first.isYes)
    first.asYes(X) shouldBe Some(Constant(1))
    { solutions.next(); solutions.next() }
    assert(solutions.hasNext)
    val last = solutions.next()
    assert(last.isNo)
    last.asNo(X) shouldBe None

  test("Access to substitutions of Halt solutions"):
    val solutions = Solver query (X is Y)
    assert(solutions.hasNext)
    val theSolution = solutions.next()
    assert(theSolution.isHalt)
    theSolution.asHalt(X) shouldBe None

  test("Instance of a solution"):
    val termList = list("a", "b", "c")
    val solutions = Solver lazyQuery member(X, termList)
    solutions.map(_.instance) shouldBe LazyList[Option[Term]](
      Some(member("a", termList)),
      Some(member("b", termList)),
      Some(member("c", termList)),
      None
    )

    val program = prolog:
      staticTheory:
        fact { "person" ("mario", 1.80, 50) }
        fact { "person" ("luigi", 1.20, 80) }
        fact { "person" ("luca", 2.00, 70) }
        rule { "height" (H, "tall") :- (H @>= 1.9) }
        rule { "height" (H, "medium") :- ((H @>= 1.45) &: (H @< 1.9)) }
        rule { "height" (H, "short") :- (1.45 @> H) }
        rule { "weight" (W, "skinny") :- (W @< 45.0) }
        rule { "weight" (W, "normal") :- (W @>= 45.0) }
        rule {
          "signs" (X, A, B) :- &&(
            "person" (X, H, W),
            "height" (H, A),
            "weight" (W, B)
          )
        }
    Solver solutionsOf {
      program withGoal "signs" ("mario", X, Y)
    } expectInstancesIn Seq("signs" ("mario", "medium", "skinny"))

    Solver solutionsOf {
      program withGoal "signs" ("luigi", X, Y)
    } expectInstancesIn Seq("signs" ("luigi", "short", "skinny"))

    Solver solutionsOf {
      program withGoal "signs" ("luca", X, Y)
    } expectInstancesIn Seq("signs" ("luca", "tall", "skinny"))

package io.github.kelvindev15.prolog.solver.engine.utils

import io.github.kelvindev15.prolog.core.{Struct, Term, Variable}
import io.github.kelvindev15.prolog.solver.Solver
import io.github.kelvindev15.prolog.solver.Solver.Solution.Yes
import io.github.kelvindev15.prolog.solver.Solver.{Solution, Substitution}
import org.scalatest.matchers.should.Matchers

import scala.reflect.ClassTag

trait EngineTestUtils:
  matchers: Matchers =>
  def expect[T <: Solution](using tag: ClassTag[T])(
      solutions: Iterator[Solution]
  ): Unit =
    assert(solutions.hasNext)
    solutions.next() shouldBe a[T]

  def expectOne[T <: Solution](using tag: ClassTag[T])(
      solution: Iterator[Solution]
  ): Unit =
    expect[T](solution)
    solution.hasNext shouldBe false

  extension (solutions: Iterable[Solution])
    def expectSolutionsIn(expectedSolutions: Iterable[Solution]): Unit =
      solutions should contain allElementsOf expectedSolutions.to(LazyList)
    def expect(solution: Solution): Unit =
      assert(solutions.exists(_ == solution))
    def expectOnly(solution: Solution): Unit =
      solutions should contain only solution
    def expectInstancesIn(expectedInstances: Iterable[Term]): Unit =
      solutions
        .map(_.instance)
        .filter(_.isDefined)
        .map(_.get) should contain allElementsOf expectedInstances.to(LazyList)
    def expect(instance: Term): Unit =
      assert(solutions.exists(_.instance == instance))
    def expectOnly(instance: Term): Unit =
      solutions.map(_.instance) should contain only Some(instance)

  extension (query: Struct)
    def yes(substitutions: (Variable, Term)*): Yes =
      Yes(query, Substitution(substitutions*))
    def no: Solution.No = Solution.No(query)
    def also(actions: Struct => Unit): Unit = actions(query)
    def query: LazyList[Solution] = Solver lazyQuery query
    def queryAndExpectOnly(goal: Struct => Solution): Unit =
      query also { q => q.query expectOnly goal(query) }

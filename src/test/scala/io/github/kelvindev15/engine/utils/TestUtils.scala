package io.github.kelvindev15.engine.utils

import io.github.kelvindev15.prolog.engine.Solver.Solution
import org.scalatest.matchers.should.Matchers

import scala.reflect.ClassTag

trait TestUtils:
  matchers: Matchers =>
  def expect[T <: Solution](using tag: ClassTag[T])(solutions: Iterator[Solution]): Unit =
    assert(solutions.hasNext)
    solutions.next() shouldBe a[T]

  def expectOne[T <: Solution](using tag: ClassTag[T])(solution: Iterator[Solution]): Unit =
    expect[T](solution)
    solution.hasNext shouldBe false
    
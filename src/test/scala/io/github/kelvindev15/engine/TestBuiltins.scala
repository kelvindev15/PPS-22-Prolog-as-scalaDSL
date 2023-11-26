package io.github.kelvindev15.engine

import io.github.kelvindev15.engine.utils.TestUtils
import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.dsl.{DeclarativeDSL, PrologDSL}
import io.github.kelvindev15.prolog.engine.Solver
import io.github.kelvindev15.prolog.engine.Solver.Solution
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestBuiltins extends AnyFunSuite with Matchers with PrologDSL with DeclarativeDSL with TestUtils:
  test("Test var(X)"):
    expectOne[Solution.Yes]:
      Solver solve (PrologProgram.emptyTheory withGoal `var`(X))
    expectOne[Solution.No]:
      Solver solve (PrologProgram.emptyTheory withGoal `var`(23))
    expectOne[Solution.No]:
      Solver solve (PrologProgram.emptyTheory withGoal &&(X `=` Y, Y `=` 23 , `var`(X)))

  test("Test atom(X)"):
    expectOne[Solution.No]:
      Solver solve (PrologProgram.emptyTheory withGoal atom(23))
    expectOne[Solution.Yes]:
      Solver solve (PrologProgram.emptyTheory withGoal atom("apples"))
    expectOne[Solution.Yes]:
      Solver solve (PrologProgram.emptyTheory withGoal atom("'/us/chris/pl.123'"))
    expectOne[Solution.No]:
      Solver solve (PrologProgram.emptyTheory withGoal atom(X))
    expectOne[Solution.No]:
      Solver solve (PrologProgram.emptyTheory withGoal atom("book"("bronte", "w_h", X)))

  test("Test atomic(X)"):
    expectOne[Solution.Yes]:
      Solver solve (PrologProgram.emptyTheory withGoal atomic(23.4))
    expectOne[Solution.No]:
      Solver solve (PrologProgram.emptyTheory withGoal atomic(X))


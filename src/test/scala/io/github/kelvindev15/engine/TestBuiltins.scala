package io.github.kelvindev15.engine

import io.github.kelvindev15.engine.utils.TestUtils
import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.{PrologList, Struct}
import io.github.kelvindev15.prolog.dsl.{DeclarativeDSL, PrologDSL}
import io.github.kelvindev15.prolog.engine.Solver
import io.github.kelvindev15.prolog.engine.Solver.Solution
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestBuiltins extends AnyFunSuite with Matchers with PrologDSL with DeclarativeDSL with TestUtils:
  test("Test var(X)"):
    expectOne[Solution.Yes]:
      Solver query `var`(X)
    expectOne[Solution.No]:
      Solver query `var`(23)
    expectOne[Solution.No]:
      Solver query &&(X `=` Y, Y `=` 23 , `var`(X))

  test("Test atom(X)"):
    expectOne[Solution.No]:
      Solver query atom(23)
    expectOne[Solution.Yes]:
      Solver query atom("apples")
    expectOne[Solution.Yes]:
      Solver query atom("'/us/chris/pl.123'")
    expectOne[Solution.No]:
      Solver query atom(X)
    expectOne[Solution.No]:
      Solver query atom("book"("bronte", "w_h", X))

  test("Test atomic(X)"):
    expectOne[Solution.Yes]:
      Solver query atomic(23.4)
    expectOne[Solution.No]:
      Solver query atomic(X)

  test("Test clause(X, Y)"):
    val append = "app"
    val query = clause(append(A, B, C), Y)
    Solver lazySolve {
      prolog:
        staticTheory:
          fact { append(Nil, X, X) }
          rule { append(cons(A)(B), C, cons(A)(D)) :- append(B, C, D) }
        goal:
          query
    } expectSolutionsIn Seq(
      query.yes(A -> Nil, B -> C, Y -> true),
      query.yes(A -> cons(A, B), C -> cons(A, D), Y -> append(B, B, D))
    )

  test("Test functor(T, F, N)"):
    functor("f"("a", "b", "g"(Z)), F, N) queryAndExpectOnly (_.yes(F -> "f", N -> 3))
    functor("a".functor + "b", F, N) queryAndExpectOnly (_.yes(F -> "+", N -> 2))
    functor(list("a", "b", "c"), F, N) queryAndExpectOnly (_.yes(F -> ".", N -> 2))
    functor("apple", F, N) queryAndExpectOnly (_.yes(F -> "apple", N -> 0))
    functor(list("a", "b", "c"), ".", 3) queryAndExpectOnly (_.no)
    functor(list("a", "b", "c"), "a", Z) queryAndExpectOnly (_.no)

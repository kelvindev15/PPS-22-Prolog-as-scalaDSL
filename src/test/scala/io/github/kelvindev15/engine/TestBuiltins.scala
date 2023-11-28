package io.github.kelvindev15.engine

import io.github.kelvindev15.engine.utils.EngineTestUtils
import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.dsl.{DeclarativeProlog, PrologDSL}
import io.github.kelvindev15.prolog.solver.Solver
import io.github.kelvindev15.prolog.solver.Solver.Solution
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestBuiltins
    extends AnyFunSuite
    with Matchers
    with PrologDSL
    with DeclarativeProlog
    with EngineTestUtils:
  test("Test var(X)"):
    expectOne[Solution.Yes]:
      Solver query `var`(X)
    expectOne[Solution.No]:
      Solver query `var`(23)
    expectOne[Solution.No]:
      Solver query &&(X `=` Y, Y `=` 23, `var`(X))

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
      Solver query atom("book" ("bronte", "w_h", X))

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
    functor("f" ("a", "b", "g" (Z)), F, N) queryAndExpectOnly (_.yes(
      F -> "f",
      N -> 3
    ))
    functor("a".functor + "b", F, N) queryAndExpectOnly (_.yes(
      F -> "+",
      N -> 2
    ))
    functor(list("a", "b", "c"), F, N) queryAndExpectOnly (_.yes(
      F -> ".",
      N -> 2
    ))
    functor("apple", F, N) queryAndExpectOnly (_.yes(F -> "apple", N -> 0))
    functor(list("a", "b", "c"), ".", 3) queryAndExpectOnly (_.no)
    functor(list("a", "b", "c"), "a", Z) queryAndExpectOnly (_.no)

    val query = "copy" ("sentence" ("np" ("n" ("john")), "v" ("eats")), X)
    Solver lazySolve {
      prolog:
        staticTheory:
          rule {
            "copy" (varOf("Old"), varOf("New")) :-
              &&(functor(varOf("Old"), F, N), functor(varOf("New"), F, N))
          }
        goal:
          query
    } expectSolutionsIn Seq(
      query.yes(X -> "sentence" (`__`, `__`))
    )

  test("Test arg(N, T, A)"):
    arg(2, "related" ("john", "mother" ("jane")), X) queryAndExpectOnly (_.yes(
      X -> "mother" ("jane")
    ))
    arg(1, "a".functor + ("b".functor + "c"), X) queryAndExpectOnly (_.yes(
      X -> "a"
    ))
    arg(2, list("a", "b", "c"), X) queryAndExpectOnly (_.yes(
      X -> list("b", "c")
    ))
    arg(1, "a".functor + ("b".functor + "c"), "b") queryAndExpectOnly (_.no)

  test("Test univ (=..)"):
    ("foo" ("a", "b", "c") `=..` X) queryAndExpectOnly (_.yes(
      X -> list("foo", "a", "b", "c")
    ))
    (list("a", "b", "c", "d") `=..` L) queryAndExpectOnly (_.yes(
      L -> list(".", "a", list("b", "c", "d"))
    ))
    ("a".functor + "b" `=..` list("+", X, Y)) queryAndExpectOnly (_.yes(
      X -> "a",
      Y -> "b"
    ))
    (list("a", "b", "c", "d") `=..` cons(X)(Y)) queryAndExpectOnly (
      _.yes(X -> ".", Y -> list("a", list("b", "c", "d")))
    )
    (X `=..` list("a", "b", "c", "d")) queryAndExpectOnly (_.yes(
      X -> "a" ("b", "c", "d")
    ))

  test("atom_chars(A, L)"):
    atom_chars("apple", X) queryAndExpectOnly (_.yes(
      X -> list("a", "p", "p", "l", "e")
    ))
    atom_chars(X, list("a", "p", "p", "l", "e")) queryAndExpectOnly (_.yes(
      X -> "apple"
    ))

  test("number_chars(A, L)"):
    number_chars(123.5, X) queryAndExpectOnly (_.yes(
      X -> list("1", "2", "3", ".", "5")
    ))
    number_chars(X, list("1", "2", "3")) queryAndExpectOnly (_.yes(X -> 123))

  test("Test term equality (==)"):
    expectOne[Solution.No]:
      Solver query (X strictEq Y)
    expectOne[Solution.Yes]:
      Solver query (X strictEq X)

  test("Test operators"):
    expectOne[Solution.Yes]:
      Solver query (&&(X `=` 3, 2 < X))

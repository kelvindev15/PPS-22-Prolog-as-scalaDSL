package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.{Conjunction, Disjunction}
import io.github.kelvindev15.prolog.core.PrologList.{Cons, Nil}
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestRecursiveStructs extends AnyFunSuite with Matchers:
  private val cmpGoal = Conjunction(Atom("X"), Atom("Y"), Atom("Z"))

  test("Cannot create a conjunction of goals from no terms"):
    assertThrows[IllegalArgumentException]:
      Conjunction.wrapIfNecessary()

  test(
    "A conjunction of goal is a recursive predicate with arity 2 and with ',' as a functor"
  ):
    cmpGoal shouldBe a[Term]
    cmpGoal.arity shouldBe 2
    cmpGoal.functor shouldBe Atom(",")

  test("Goal conjunction arguments"):
    cmpGoal.first shouldBe Atom("X")
    cmpGoal.second shouldBe Conjunction(Atom("Y"), Atom("Z"))

  private val goals = Seq(
    Atom("X"),
    Conjunction(Atom("X"), Variable("O")),
    Variable("Z"),
    Conjunction(Constant(1), Constant(2))
  )
  private val linearizationExpectation =
    goals.take(3) ++ Seq(Constant(1), Constant(2))

  test("Compound goal linearized arguments"):
    val complexGoalConjunction = Conjunction(goals*)
    complexGoalConjunction.linearizedArguments shouldBe linearizationExpectation

  test("Disjunction of goals linearized arguments"):
    val complexGoalDisjunction = Disjunction(goals*)
    complexGoalDisjunction.linearizedArguments shouldBe linearizationExpectation

  private val list = PrologList(Atom("a"), Atom("b"), Atom("c"), Atom("d"))

  test("PrologList creation"):
    list shouldBe a[Term]
    list.functor shouldBe Atom(".")
    list.arity shouldBe 2
    list.arguments.head shouldBe Atom("a")
    list.arguments.tail.head shouldBe a[PrologList]

  test("Prolog list arguments"):
    list.linearizedArguments shouldBe Seq("a", "b", "c", "d").map(Atom(_))

  test("Creation of a prolog list with Cons and Nil"):
    Cons(
      Atom("a"),
      Cons(Atom("b"), Cons(Atom("c"), Cons(Atom("d"), Nil)))
    ) shouldBe list

  test("A list can end also with a variable"):
    val list = Cons(Atom("a"), Variable("X"))
    list shouldBe a[PrologList]
    list.linearizedArguments shouldBe Seq(Atom("a"), Variable("X"))

  test("A list not ending with a variable"):
    val list = PrologList(Atom("a"), Variable("X"))
    list shouldBe Cons(Atom("a"), Cons(Variable("X"), Nil))
    assert(list != Cons(Atom("a"), Variable("X")))

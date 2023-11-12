package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Constant.Atom
import io.github.kelvindev15.prolog.PrologList.{Cons, Nil}
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestRecursiveStructs extends AnyFunSuite with Matchers:
  private val cmpGoal = CompoundGoal(Atom("X"), Atom("Y"), Atom("Z"))

  test("Cannot create a compound goal from no term") {
    assertThrows[IllegalArgumentException] {
      CompoundGoal.ifNecessary()
    }
  }

  test("A Compound goal is a recursive predicate with arity 2 and with ',' as a functor") {
    cmpGoal shouldBe a [Term]
    cmpGoal.arity shouldBe 2
    cmpGoal.functor shouldBe Atom(",")
  }

  test("Compound goal arguments") {
    cmpGoal.first shouldBe Atom("X")
    cmpGoal.second shouldBe CompoundGoal(Atom("Y"), Atom("Z"))
  }

  test("Compound goal linearized arguments") {
    val goals = Seq(
      Atom("X"),
      CompoundGoal(Atom("X"), Variable("O")),
      Variable("Z"),
      CompoundGoal(Constant(1), Constant(2)))
    val complexCompoundGoal = CompoundGoal(goals*)
    complexCompoundGoal.linearizedArguments shouldBe goals.take(3) ++ Seq(Constant(1), Constant(2))
  }

  private val list = PrologList(Atom("a"), Atom("b"), Atom("c"), Atom("d"))

  test("PrologList creation") {
    list shouldBe a [Term]
    list.functor shouldBe Atom(".")
    list.arity shouldBe 2
    list.arguments.head shouldBe Atom("a")
    list.arguments.tail.head shouldBe a [PrologList]
  }

  test("Prolog list arguments") {
    list.linearizedArguments shouldBe Seq("a", "b", "c", "d").map(Atom(_))
  }

  test("Creation of a prolog list with Cons and Nil") {
    Cons(Atom("a"), Cons(Atom("b"), Cons(Atom("c"), Cons(Atom("d"), Nil)))) shouldBe list
  }

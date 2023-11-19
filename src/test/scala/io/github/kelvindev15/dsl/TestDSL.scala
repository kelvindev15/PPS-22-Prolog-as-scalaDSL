package io.github.kelvindev15.dsl


import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.{Constant, RecursiveStruct, Struct, Variable}
import io.github.kelvindev15.prolog.core.Struct.{Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.Variable.anonymous
import io.github.kelvindev15.prolog.dsl.PrologDSL
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestDSL extends AnyFunSuite with Matchers with PrologDSL {
  
  test("Creation of a fact") {
    val t = theory(
      "father"("abraham", "tehrach"),
    )
    t should have size 1
    t.head shouldBe a [Fact]
  }

  test("Creation of a rule") {
    val t = theory(
      "grandfather"(X, Y) :- ("father"(X, Z) and "father"(Z, Y)),
    )
    t should have size 1
    val r = t.head
    r shouldBe a [Rule]
    assert(r.head.isDefined)
    r.head.get shouldBe Struct(Atom("grandfather"), Variable("X"), Variable("Y"))
    r.body shouldBe a [RecursiveStruct]
  }

  test("Creation of a directive") {
    val t = theory(
      :- ("op"(1199, "xfx", "-->"))
    )
    t should have size 1
    val d = t.head
    d shouldBe a [Directive]
    assert(d.head.isEmpty)
    d.body shouldBe Struct(Atom("op"), Constant(1199), Atom("xfx"), Atom("-->"))
  }

  test("Creating a simple theory") {
    val t = theory(
      "search"(X, "cons"(X, `__`)),
      "search"(X, "cons"(`__`, Variable("Xs"))) :- "search"(X, Variable("Xs"))
    )
    t should have size 2
    t.head shouldBe Fact(Struct(Atom("search"), Variable("X"), Struct(Atom("cons"), Variable("X"), anonymous())))
  }

  test("Creation of lists") {
    cons("item1", nil).arguments shouldBe Seq(Atom("item1"), nil)
    cons(1, X).arguments should have size 2
    cons(H, T).variables shouldBe Seq(Variable("H"), Variable("T"))
    list(1, 2, 3) shouldBe cons(1, cons(2, cons(3, nil)))
  }
}

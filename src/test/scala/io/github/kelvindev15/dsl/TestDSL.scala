package io.github.kelvindev15.dsl


import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.{Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.Variable.anonymous
import io.github.kelvindev15.prolog.core.{Constant, RecursiveStruct, Struct, Term, Variable}
import io.github.kelvindev15.prolog.dsl.PrologDSL
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestDSL extends AnyFunSuite with Matchers with PrologDSL:

  test("Creation of a fact"):
    val f: Fact = "father"("abraham", "tehrach")
    f shouldBe a [Fact]

  test("Creation of a rule"):
    val r = "grandfather"(X, Y) :- ("father"(X, Z) and "father"(Z, Y))
    r shouldBe a [Rule]
    r.head.get shouldBe Struct(Atom("grandfather"), Variable("X"), Variable("Y"))
    r.body shouldBe a [RecursiveStruct]

  test("Creation of a directive"):
    val d: Term = :-("op"(1199, "xfx", "-->"))
    d shouldBe a [Directive]
    d.asInstanceOf[Directive].body shouldBe Struct(Atom("op"), Constant(1199), Atom("xfx"), Atom("-->"))

  test("Creation of a simple theory"):
    val t = theory(
      "search"(X, "cons"(X, `__`)),
      "search"(X, "cons"(`__`, Variable("Xs"))) :- "search"(X, Variable("Xs"))
    )
    t should have size 2
    t.head shouldBe Fact(Struct(Atom("search"), Variable("X"), Struct(Atom("cons"), Variable("X"), anonymous())))

  test("Creation of lists"):
    cons("item1", nil).arguments shouldBe Seq(Atom("item1"), nil)
    cons(1, X).arguments should have size 2

  test("Construction equivalence"):
    list(1, 2, 3) shouldBe cons(1, cons(2, cons(3, nil)))

  test("List variables"):
    cons(H, T).variables shouldBe Seq(Variable("H"), Variable("T"))

  test("List with 'pipe' notation"):
    cons(H)(T) shouldBe cons(H, T)

  test("Creating a list with no head arguments should throw an exception"):
    assertThrows[IllegalArgumentException]:
      cons()(T)

  test("Alternative syntax for pipe notation"):
    (head(1, 2, 3, 4) | T) shouldBe cons(1, 2, 3, 4)(T)

package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.{Conjunction, Disjunction}
import io.github.kelvindev15.prolog.core.PrologList.Nil
import io.github.kelvindev15.prolog.core.Struct.{Directive, Fact, Indicator, Rule}
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestTermConversion extends AnyFunSuite with Matchers:

  test("A rule is a binary struct with :- as a functor"):
    val head = Struct(Atom("grandfather"), Variable("X"), Variable("Y"))
    val bodyArgs = Seq(Struct(Atom("father"), Variable("X"), Variable("Z")),
      Struct(Atom("father"), Variable("Z"), Variable("Y")))
    Rule(head, bodyArgs*).asTerm shouldBe Struct(Atom(":-"), head, Struct(Atom(","), bodyArgs*))

  test("A fact is a binary struct with :- as a functor"):
    val head = Struct(Atom("sequence"), Atom("a"), Atom("b"), Atom("c"), Atom("d"))
    Fact(head).asTerm shouldBe Struct(Atom(":-"), head, Atom("true"))

  test("A directive is a unary struct with :- as a functor"):
    Directive(Struct(Atom("dynamic"), Indicator(Atom("foo"), Constant.Numeric(2)))).asTerm shouldBe
      Struct(Atom(":-"), Struct(Atom("dynamic"), Struct(Atom("/"), Atom("foo"), Constant.Numeric(2))))

  test("A conjunction of goals is a binary recursive struct with , as a functor"):
    val functor = Atom(",")
    Conjunction(Atom("a"), Atom("b"), Atom("c")).asTerm shouldBe
      Struct(functor, Atom("a"), Struct(functor, Atom("b"), Atom("c")))

  test("A disjunction of goals is a binary recursive struct with , as a function"):
    val functor = Atom(";")
    Disjunction(Atom("a"), Atom("b"), Atom("c")).asTerm shouldBe
      Struct(functor, Atom("a"), Struct(functor, Atom("b"), Atom("c")))

  test("The functor of an empty list is []"):
    Nil.asTerm shouldBe Atom("[]")

  test("A prolog list is binary recursive struct with . as a functor"):
    val functor = Atom(".")
    PrologList(Atom("a"), Atom("b"), Atom("c"), Atom("d")).asTerm shouldBe
      Struct(functor, Atom("a"), Struct(functor, Atom("b"),
        Struct(functor, Atom("c"),
          Struct(functor, Atom("d"), Atom("[]")))))

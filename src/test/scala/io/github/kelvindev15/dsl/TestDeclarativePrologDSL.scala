package io.github.kelvindev15.dsl

import io.github.kelvindev15.prolog.PrologProgram
import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.Conjunction
import io.github.kelvindev15.prolog.core.PrologList.Cons
import io.github.kelvindev15.prolog.core.Struct.{Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.{
  Constant,
  PrologList,
  Struct,
  Variable
}
import io.github.kelvindev15.prolog.dsl.{DeclarativeProlog, PrologDSL}
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestDeclarativePrologDSL
    extends AnyFunSuite
    with Matchers
    with PrologDSL
    with DeclarativeProlog:
  test("Creation of an empty prolog program"):
    val program: PrologProgram = prolog {}
    program.staticTheory shouldBe empty
    program.dynamicTheory shouldBe empty
    program.goal shouldBe empty

  test("Creation of a simple static theory"):
    val program: PrologProgram = prolog {
      staticTheory {
        fact { "likes" ("alice", X) }
        rule { "grandfather" (X, Y) :- ("father" (X, Z) &: "father" (Z, Y)) }
        directive { :-("dynamic" ("foo" / 2)) }
      }
    }
    program.staticTheory should have size 3
    program.staticTheory.head shouldBe a[Fact]
    program.staticTheory.tail.head shouldBe a[Rule]
    program.staticTheory.tail.tail.head shouldBe a[Directive]

  test("Defining multiple times a theory overrides the theory"):
    val program: PrologProgram = prolog {
      staticTheory {
        fact { "person" ("luca") }
      }
      staticTheory {}

      dynamicTheory {
        assert { "foo" (X, Y) :- (2 is X + Y) }
      }
      dynamicTheory {}
    }
    program.staticTheory shouldBe empty
    program.dynamicTheory shouldBe empty

  test("Asserts on dynamic theories"):
    prolog {
      dynamicTheory {
        assertA { "foo" (X, Y) :- (2 is X + Y) }
        assertZ { "bar" (X, Y) :- (2.5 is X + Y) }
      }
    }.dynamicTheory shouldBe Seq(
      Fact(
        Struct(
          Atom("asserta"),
          Rule(
            Struct(Atom("foo"), Variable("X"), Variable("Y")),
            Struct(
              Atom("is"),
              Constant.Numeric(2),
              Struct(Atom("+"), Variable("X"), Variable("Y"))
            )
          )
        )
      ),
      Fact(
        Struct(
          Atom("assertz"),
          Rule(
            Struct(Atom("bar"), Variable("X"), Variable("Y")),
            Struct(
              Atom("is"),
              Constant.Numeric(2.5),
              Struct(Atom("+"), Variable("X"), Variable("Y"))
            )
          )
        )
      )
    )

  test("Setting the goal of a prolog program"):
    prolog {
      goal {
        &&(2 is X + Y, (head(H) | T) `=` S)
      }
    }.goal shouldBe Some(
      Conjunction(
        Struct(
          Atom("is"),
          Constant.Numeric(2),
          Struct(Atom("+"), Variable("X"), Variable("Y"))
        ),
        Struct(Atom("="), Cons(Variable("H"), Variable("T")), Variable("S"))
      )
    )

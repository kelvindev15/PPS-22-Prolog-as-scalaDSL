package io.github.kelvindev15.dsl


import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.{Constant, RecursiveStruct, Struct, Variable}
import io.github.kelvindev15.prolog.core.Struct.{Fact, Rule}
import io.github.kelvindev15.prolog.dsl.PrologDSL
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestDSL extends AnyFunSuite with Matchers with PrologDSL {
  
  test("Creation of a fact") {
    val t = theory {
      fact { "father"("abraham", "tehrach") }
    }
    t should have size 1
    t.head shouldBe a [Fact]
  }

  test("Creation of a rule") {
    val t = theory {
      rule { "grandfather"(X, Y) :- ("father"(X, Z) and "father"(Z, Y)) }
    }
    t should have size 1
    val r = t.head
    r shouldBe a [Rule]
    assert(r.head.isDefined)
    r.head.get shouldBe Struct(Atom("grandfather"), Variable("X"), Variable("Y"))
    r.body shouldBe a [RecursiveStruct]
  }

  test("Creation of a directive") {
    val t = theory {
      directive { :-("op"(1199, "xfx", "-->")) }
    }
    t should have size 1
    val d = t.head
    assert(d.head.isEmpty)
    d.body shouldBe Struct(Atom("op"), Constant(1199), Atom("xfx"), Atom("-->"))
  }
}

package io.github.kelvindev15.prolog.visitors

import io.github.kelvindev15.prolog.core.Struct.Fact
import io.github.kelvindev15.prolog.dsl.{DeclarativeProlog, PrologDSL}
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestStringTermVisitor
    extends AnyFunSuite
    with Matchers
    with PrologDSL
    with DeclarativeProlog:

  test("Test structs"):
    "rainbow" ("orange").toString shouldEqual "rainbow(orange)"
    "father" ("abraham", X).toString shouldEqual "father(abraham, X)"

  test("Test facts"):
    Fact("abraham").toString shouldEqual "abraham :- true."
    Fact("father" (X)).toString shouldEqual "father(X) :- true."

  test("Test rules"):
    ("a" :- "b").toString shouldEqual "a :- b."
    ("a" :- &&("b", "c", "d")).toString shouldEqual "a :- b, c, d."
    ("a" :- ||("b", "c", "d")).toString shouldEqual "a :- b; c; d."

  test("Test lists"):
    list("a", "b", "d").toString shouldEqual "[a, b, d]"
    list("a").toString shouldEqual "[a]"

  test("Test numeric"):
    "pred" (1.3).toString shouldEqual "pred(1.3)"
    "pred" (25).toString shouldEqual "pred(25)"

  test("Test prolog program"):
    prolog {
      staticTheory:
        clause { "father" ("abraham", "isaac") }
        clause { "father" ("terach", "abraham") }
        clause {
          "grandfather" (varOf("GF"), varOf("GS")) :- ("father" (
            varOf("GF"),
            F
          ) &: "father" (F, varOf("GS")))
        }
    }.toString shouldBe
      """|staticTheory {
        |  father(abraham, isaac) :- true.
        |  father(terach, abraham) :- true.
        |  grandfather(GF, GS) :- father(GF, F), father(F, GS).
        |}
        |
        |dynamicTheory {
        |
        |}
        |
        |?- <empty_goal>""".stripMargin

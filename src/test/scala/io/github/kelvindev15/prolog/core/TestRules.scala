package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Rule
import io.github.kelvindev15.prolog.visitors.BinaryToFlatVisitor
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class TestRules extends AnyFlatSpec with Matchers:

  private val grandfatherRule = Rule(
    Struct(Atom("grandfather"), Variable("X"), Variable("Y")),
    Struct(Atom("father"), Variable("X"), Variable("Z")),
    Struct(Atom("father"), Variable("Z"), Variable("Y"))
  )

  "A rule" can "have a single term body" in:
    Rule(
      Struct(Atom("edible"), Variable("X")),
      Struct(Atom("food"), Variable("X"))
    ) shouldBe a[Term]

  "The functor of a rule" should "be ':-'" in:
    grandfatherRule.functor shouldBe Atom("':-'")

  "The arity of a rule" should "be 2" in:
    grandfatherRule.arity shouldBe 2

  "The rule grandfather(X, Y) :- father(X, Z), father(Z, Y)" should "have 2 terms in the linearized version" in:
    grandfatherRule.body.accept(BinaryToFlatVisitor()) should have size 2

  it should "have a grandfather(X, Y) as a head" in:
    assert(grandfatherRule.head.isDefined)
    grandfatherRule.head.get shouldBe Struct(
      Atom("grandfather"),
      Variable("X"),
      Variable("Y")
    )

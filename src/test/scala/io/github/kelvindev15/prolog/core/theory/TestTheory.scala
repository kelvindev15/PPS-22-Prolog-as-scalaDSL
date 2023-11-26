package io.github.kelvindev15.prolog.core.theory

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Rule
import io.github.kelvindev15.prolog.core.theory.Theory
import io.github.kelvindev15.prolog.core.{Struct, Variable}
import org.scalatest.BeforeAndAfterAll
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestTheory extends AnyFunSuite with BeforeAndAfterAll with Matchers:
  private val rule = Rule(Struct(Atom("eatable"), Variable("X")), Struct(Atom("food"), Variable("X")))

  test("Adding a rule to a prolog program"):
    var program = Theory()
    program shouldBe empty
    program = program add rule
    program should have size 1

  test("Removing a rule from a prolog program"):
    var program = Theory(rule)
    program should have size 1
    program = program remove rule
    program shouldBe empty

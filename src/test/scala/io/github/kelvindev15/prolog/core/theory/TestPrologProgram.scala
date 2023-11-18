package io.github.kelvindev15.prolog.core.theory

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Rule
import io.github.kelvindev15.prolog.core.Theory.PrologProgram
import io.github.kelvindev15.prolog.core.{Struct, Variable}
import org.scalatest.BeforeAndAfterAll
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestPrologProgram extends AnyFunSuite with BeforeAndAfterAll with Matchers:
  private val rule = Rule(Struct(Atom("eatable"), Variable("X")), Struct(Atom("food"), Variable("X")))

  test("Adding a rule to a prolog program") {
    var program = PrologProgram()
    program shouldBe empty
    program = program addClause rule
    program should have size 1
  }

  test("Removing a rule from a prolog program") {
    var program = PrologProgram(rule)
    program should have size 1
    program = program removeClause rule
    program shouldBe empty
  }

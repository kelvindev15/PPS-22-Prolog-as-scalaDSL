package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.{Struct, Term, Variable}
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class TestVariables extends AnyFlatSpec with Matchers:

  "_" should "be an anonymous variable" in {
    assert(Variable("_").isAnonymous)
  }

  "A variable name" should "be an alphanumerical string beginning with an with an uppercase letter" in {
    Seq("X", "X2", "Abraham", "Snake_variable", "_") foreach {
      Variable(_) shouldBe a[Variable]
    }
    Seq("a", "2X", "X$", "A-Y") foreach { name =>
      assertThrows[IllegalArgumentException] {
        Variable(name)
      }
    }
  }
  
  it should "not be ground" in {
    assert(!Variable("X").isGround)
  }

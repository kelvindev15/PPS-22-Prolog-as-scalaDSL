package io.github.kelvindev15.dsl

import io.github.kelvindev15.prolog.dsl.PrologDSL
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class TestDSL extends AnyFunSuite with Matchers {
  
  test("Creation of an atom") {
    object Demo extends PrologDSL
  }
}

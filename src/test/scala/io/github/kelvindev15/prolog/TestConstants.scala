package io.github.kelvindev15.prolog

import io.github.kelvindev15
import io.github.kelvindev15.prolog.Constant.{Atom, Numeric}
import io.github.kelvindev15.prolog.{Struct, Term, Variable}
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.*

class TestConstants extends AnyFlatSpec with Matchers:

  "A constant" can "be a numeric value" in {
    Seq(12.0, 2, Int.MaxValue) foreach { Constant(_) shouldBe a [Numeric] }
  }

  it can "be a sequence of characters" in {
    Seq("a", "abraham") foreach { Constant(_) shouldBe a [Atom] }
  }

  "The value of a malformed atom" should "be quoted" in {
    val atom = Atom("X")
    atom.value should be ("'X'")
  }

  "When creating a atom quotes" should "not be considered when determining if it is well formed" in {
    Atom(":-") shouldBe Atom("':-'")
    Atom("''Abraham''") shouldBe Atom("Abraham")
  }




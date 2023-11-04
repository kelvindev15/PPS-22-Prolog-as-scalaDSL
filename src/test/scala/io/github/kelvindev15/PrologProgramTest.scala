package io.github.kelvindev15

import io.github.kelvindev15
import io.github.kelvindev15.prolog.Constant.{Atom, Numeric}
import io.github.kelvindev15.prolog.{Constant, Struct, Term, Variable}
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.*

class PrologProgramTest extends AnyFlatSpec with Matchers:
  "A constant" can "be a numeric value" in {
    Seq(12.0, 2, Int.MaxValue) foreach { Constant(_) shouldBe a [Numeric] }
  }

  it can "be a sequence of characters" in {
    Seq("a", "abraham") foreach { Constant(_) shouldBe a [Atom] }
  }

  "A struct" should "be comprised of a functor and a sequence of one ore more arguments" in {
    Seq(
      Struct(Atom("father"), Atom("abraham"), Atom("therach")),
      Struct(Atom("sum"), Constant(2), Constant(5), Constant(7))
    ) foreach { _ shouldBe a [Struct]}
  }

  "A variable name" should "be an alphanumerical string beginning with an with an uppercase letter" in {
    Seq("X", "X2", "Abraham", "Snake_variable", "_") foreach { Variable(_) shouldBe a [Variable] }
    Seq("a", "2X", "X$", "A-Y") foreach { name =>
      assertThrows[IllegalArgumentException] { Variable(name) }
    }
  }

  "Only non-ground terms" can "contain variables" in {
    val nonGroundTerms = Seq[Term](Constant("bob"), Constant(23), Struct(Atom("sum"), Numeric(2), Numeric(2)))
  }

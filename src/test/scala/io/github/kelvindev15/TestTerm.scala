package io.github.kelvindev15

import io.github.kelvindev15.prolog.Constant.Atom
import io.github.kelvindev15.prolog.Term.Recursive
import io.github.kelvindev15.prolog.{Struct, Term, Variable}
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers

class RecursiveTerms extends AnyFunSuite with Matchers:
  test("Can create a recursive term") {
    val recursivePredicate = Recursive.of(Atom(","), 2)
    recursivePredicate.fold(Atom("a"), Atom("b"), Atom("c")) shouldBe a [Term]
    recursivePredicate.fold(Atom("a"), Atom("b"), Atom("c"), Atom("d")) shouldBe a [Term]

    val otherRecursiveTerm = Recursive.of(Atom("s"), 3)
    otherRecursiveTerm.fold(Atom("a"), Struct(Atom("a")), Variable("X")) shouldBe a [Term]
    otherRecursiveTerm.fold(Atom("a"), Struct(Atom("b")), Variable("X"), Atom("b"), Atom("c")) shouldBe a [Term]

  }

  test("Creating a recursive term with wrong number of parameters should fail") {
    val recursivePredicate = Recursive.of(Atom(","), 2)
    assertThrows[IllegalArgumentException] {
      recursivePredicate.fold(Atom("a"))
    }
    val otherRecursivePredicate = Recursive.of(Atom("s"), 3)
    assertThrows[IllegalArgumentException] {
      otherRecursivePredicate.fold(Atom("a"), Atom("b"), Atom("c"), Atom("d"))
    }
  }

class Terms extends AnyFlatSpec with Matchers:
  "Only terms with no variables" should "be ground" in {
    val groundTerm = Struct(Atom("likes"), Atom("mario"), Atom("pizza"))
    assert(groundTerm.isGround)

    val nonGroundTerm = Struct(Atom("likes"), Atom("mario"), Struct(Atom("food"), Variable("X")))
    assert(!nonGroundTerm.isGround)
  }

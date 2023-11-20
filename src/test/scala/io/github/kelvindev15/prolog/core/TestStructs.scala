package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.core.Constant.{Atom, Numeric}
import io.github.kelvindev15.prolog.core.{Constant, Struct, Term, Variable}
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class TestStructs extends AnyFlatSpec with Matchers:

  "A struct" should "be comprised of a functor and a sequence of one ore more arguments" in:
    Seq(
      Struct(Atom("father"), Atom("abraham"), Atom("therach")),
      Struct(Atom("sum"), Numeric(2), Numeric(5), Numeric(7))
    ) foreach { _ shouldBe a[Term] }

  "The arity of a Struct " should "equal the number of arguments" in:
    val args = Seq(Variable("X"), Atom("pasta"), Constant(4.5))
    Struct(Atom("order"), args*).arity shouldBe args.size

  "The functor of the struct equivalent to father(X, X) " should "be the atom father" in:
    Struct(Atom("father"), Variable("X"), Variable("X")).functor shouldBe Atom("father")

  "Non ground term variables" should "not be empty" in:
    Struct(Atom("likes"), Atom("mario"), Variable("X")).variables shouldEqual Seq(Variable("X"))
    Struct(Atom("likes"), Atom("mario"), Struct(Atom("food"), Variable("X"))).variables shouldEqual Seq(Variable("X"))

  "Only terms with no variables" should "be ground" in:
    val groundTerm = Struct(Atom("likes"), Atom("mario"), Atom("pizza"))
    assert(groundTerm.isGround)

    val nonGroundTerm = Struct(Atom("likes"), Atom("mario"), Struct(Atom("food"), Variable("X")))
    assert(!nonGroundTerm.isGround)

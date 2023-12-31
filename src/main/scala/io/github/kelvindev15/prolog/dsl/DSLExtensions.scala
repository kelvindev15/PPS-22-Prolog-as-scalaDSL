package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Rule
import io.github.kelvindev15.prolog.core.{Goals, Struct, Term}

import scala.annotation.targetName

protected[dsl] trait DSLExtensions:
  dsl: PrologDSL =>
  extension (atom: Atom)
    /** Creates [[Struct]] using the this atom as a functor.
      */
    def apply(terms: Term*): Struct = structOf(atom, terms*)

  extension (struct: Struct)
    /** Creates a [[Rule]] using this struct as the head of the rule and the
      * provided term as the body.
      */
    @targetName("iff")
    def :-(body: Term): Rule = ruleOf(struct, body)

  extension (term: Term)
    /** Returns this term in [[Conjunction]] with another term
      */
    def and(other: Term): Struct = Goals.Conjunction(term, other)

    /** Returns this term in [[Conjunction]] with another term
      */
    @targetName("conjunctWith")
    def &:(other: Term): Struct = term and other

    /** Returns this term in [[Conjunction]] with another term
      */
    def or(other: Term): Struct = Goals.Disjunction(term, other)

    /** Returns this term in [[Conjunction]] with another term
      */
    @targetName("disjointWith")
    def |:(other: Term): Struct = term or other

    /** Returns a "=..([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("univ")
    def `=..`(other: Term): Struct = structOf("=..", term, other)

    /** Returns a "=([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("equality")
    def `=`(other: Term): Struct = structOf("=", term, other)

    /** Returns a "==([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("strictEquality")
    def strictEq(other: Term): Struct = structOf("==", term, other)

    /** Returns a "is([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    def is(other: Term): Struct = structOf("is", term, other)

    /** Returns a "+([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("plus")
    def +(other: Term): Struct = structOf("+", term, other)

    /** Returns a "-([[term]], [[other]])" [[Struct]]
     *
     * @param other
     * the other term to put as second argument.
     */
    @targetName("minus")
    def -(other: Term): Struct = structOf("-", term, other)

    /** Returns a "*([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("times")
    def *(other: Term): Struct = structOf("*", term, other)

    /** Returns a "/([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("div")
    def /(other: Term): Struct = structOf("/", term, other)

    /** Returns a "//([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("intDiv")
    def `//`(other: Term): Struct = structOf("//", term, other)

    /** Returns a "mod([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    def mod(other: Term): Struct = structOf("mod", term, other)

    /** Returns a "=:=([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("numericEquality")
    def =:=(other: Term): Struct = structOf("=:=", term, other)

    /** Returns a "=\=([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("numericInequality")
    def =\=(other: Term): Struct = structOf("=\\=", term, other)

    /** Returns a "<([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("lessThan")
    def <(other: Term): Struct = structOf("<", term, other)

    /** Returns a ">([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("greaterThan")
    def >(other: Term): Struct = structOf(">", term, other)

    /** Returns a ">=([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("greaterOrEqualThan")
    def >=(other: Term): Struct = structOf(">=", term, other)

    /** Returns a "=<([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("lessOrEqualThan")
    def =<(other: Term): Struct = structOf("=<", term, other)

    /** Returns a "@<([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("termLessThan")
    def @<(other: Term): Struct = structOf("@<", term, other)

    /** Returns a "@>([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("termGreaterThan")
    def @>(other: Term): Struct = structOf("@>", term, other)

    /** Returns a "@>=([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("termGreaterThanOrEqual")
    def @>=(other: Term): Struct = structOf("@>=", term, other)

    /** Returns a "@=<([[term]], [[other]])" [[Struct]]
      *
      * @param other
      *   the other term to put as second argument.
      */
    @targetName("termLessThanOrEqual")
    def @=<(other: Term): Struct = structOf("@=<", term, other)

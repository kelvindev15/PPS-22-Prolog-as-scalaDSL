package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Rule
import io.github.kelvindev15.prolog.core.{Goals, Struct, Term}

import scala.annotation.targetName

trait DSLExtensions:
  dsl: PrologDSL =>
  extension (atom: Atom)
    def apply(terms: Term*): Struct = Struct(atom, terms *)

  extension (struct: Struct)
    @targetName("iff")
    def :-(body: Term): Rule = Rule(struct, body)

  extension (term: Term)
    def and(other: Term): Struct = Goals.Conjunction(term, other)
    @targetName("conjunctWith")
    def &:(other: Term): Struct = term and other
    def or(other: Term): Struct = Goals.Disjunction(term, other)
    @targetName("disjointWith")
    def |: (other: Term): Struct = term or other
    @targetName("univ")
    def `=..`(other: Term): Struct = Struct(Atom("=.."), term, other)
    @targetName("equality")
    def `=`(other: Term): Struct = Struct(Atom("="), term, other)
    @targetName("strictEquality")
    def ==(other: Term): Struct = Struct(Atom("=="), term, other)
    def is(other: Term): Struct = Struct(Atom("is"), term, other)
    @targetName("plus")
    def +(other: Term): Struct = Struct(Atom("+"), term, other)
    @targetName("times")
    def *(other: Term): Struct = Struct(Atom("*"), term, other)
    @targetName("div")
    def /(other: Term): Struct = Struct(Atom("/"), term, other)
    @targetName("intDiv")
    def `//`(other: Term): Struct = Struct(Atom("//"), term, other)
    def mod(other: Term): Struct = Struct(Atom("mod"), term, other)
    @targetName("numericEquality")
    def =:=(other: Term): Struct = Struct(Atom("=:="), term, other)
    @targetName("numericInequality")
    def =\=(other: Term): Struct = Struct(Atom("=\\="), term, other)
    @targetName("lessThan")
    def <(other: Term): Struct = Struct(Atom("<"), term, other)
    @targetName("greaterThan")
    def >(other: Term): Struct = Struct(Atom(">"), term, other)
    @targetName("greaterOrEqualThan")
    def >=(other: Term): Struct = Struct(Atom(">="), term, other)
    @targetName("lessOrEqualThan")
    def =<(other: Term): Struct = Struct(Atom("=<"), term, other)
    @targetName("termLessThan")
    def @<(other: Term): Struct = Struct(Atom("@<"), term, other)
    @targetName("termGreaterThan")
    def @>(other: Term): Struct = Struct(Atom("@>"), term, other)
    @targetName("termGreaterThanOrEqual")
    def @>=(other: Term): Struct = Struct(Atom("@>="), term, other)
    @targetName("termLessThanOrEqual")
    def @=<(other: Term): Struct = Struct(Atom("@=<"), term, other)

package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.{Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.{Constant, Goals, Struct, Term}

import scala.annotation.targetName

object DSLFacilities:
  given Conversion[String, Atom] = Atom(_)
  given Conversion[AnyVal, Constant.Numeric] = Constant.Numeric(_)
  
  extension (atom: Atom)
    def apply(terms: Term*): Struct = Struct(atom, terms *)

  given Conversion[Struct, Fact] = Fact(_)

  extension (struct: Struct)
    @targetName("iff")
    def :-(body: Term): Rule = Rule(struct, body)
    def and(other: Term): Struct = Goals.Conjunction(struct, other)

  @targetName("iff")
  def :-(terms: Term*): Directive = Directive(terms*)

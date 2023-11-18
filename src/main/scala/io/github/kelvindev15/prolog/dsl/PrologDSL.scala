package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.Conjunction
import io.github.kelvindev15.prolog.core.Struct.{Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.{Constant, Goals, Prolog, Struct, Term, Variable}
import io.github.kelvindev15.prolog.core.Theory.Theory
import io.github.kelvindev15.prolog.core.Theory.Theory.MutableTheory

import scala.annotation.targetName

object DSLVariables:
  def A: Variable = Variable("A")
  def B: Variable = Variable("B")
  def C: Variable = Variable("C")
  def H: Variable = Variable("H")
  def S: Variable = Variable("S")
  def T: Variable = Variable("T")
  def X: Variable = Variable("X")
  def Y: Variable = Variable("Y")
  def Z: Variable = Variable("Z")

object DSLFacilities:
  export DSLVariables.*
  
  given Conversion[String, Atom] = Atom(_)
  given Conversion[AnyVal, Constant.Numeric] = Constant.Numeric(_)
  extension (atom: Atom)
    def apply(terms: Term*): Struct = Struct(atom, terms *)

  given Conversion[Struct, Fact] with
    override def apply(x: Struct): Fact = Fact(x)

  extension (struct: Struct)
    @targetName("iff")
    def :-(body: Term): Rule = Rule(struct, body)
    def and(other: Term): Struct = Goals.Conjunction(struct, other)
    
  def :-(terms: Term*): Directive = Directive(terms*)  

trait PrologDSL:
  export DSLFacilities.*
  export DSLFacilities.given

  def theory(program: Theory ?=> Unit): Theory =
    given theory: Theory = MutableTheory()
    program
    theory

  def fact(using theory: Theory)(fact: Fact): Unit =
    theory add fact

  def rule(using theory: Theory)(rule: Rule): Unit =
    theory add rule
    
  def directive(using theory: Theory)(directive: Directive): Unit =
    theory add directive  



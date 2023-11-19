package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.Conjunction
import io.github.kelvindev15.prolog.core.Struct.{Directive, Indicator}
import io.github.kelvindev15.prolog.core.{Constant, Struct, Term}

import scala.annotation.targetName

enum AssociativitySpec extends Atom:
  case fx, fy, xf, xfx, xfy, yfx, yfy
  override val value: String = toString

object DSLPrologBuiltins:
  export AssociativitySpec.*

  @targetName("iff")
  def :-(terms: Term*): Directive = Directive(terms *)

  def `var`(term: Term): Term = Struct(Atom("var"), term)
  def nonvar(term: Term): Term = Struct(Atom("nonvar"), term)
  def atom(term: Term): Term = Struct(Atom("atom"), term)
  def number(term: Term): Term = Struct(Atom("number"), term)
  def atomic(term: Term): Term = Struct(Atom("atomic"), term)
  def ground(term: Term): Term = Struct(Atom("ground"), term)

  def member(term: Term, l: Term): Term = Struct(Atom("member"), term, l)
  def append(l1: Term, l2: Term): Term = Struct(Atom("append"), l1, l2)

  def dynamic(indicators: Indicator*): Term =
    Directive(Struct(Atom("dynamic"), Conjunction.wrapIfNecessary(indicators*)))

  def clause(head: Term, body: Term): Term = Struct(Atom("clause"), head, body)
  def asserta(clause: Term): Term = Struct(Atom("asserta"), clause)
  def assertz(clause: Term): Term = Struct(Atom("assertz"), clause)
  def retract(clause: Term): Term = Struct(Atom("retract"), clause)

  def functor(term: Term, functor: Term, arity: Term): Term =
    Struct(Atom("functor"), term, functor, arity)

  def arg(number: Term, term: Struct, arg: Term): Term = Struct(Atom("arg"), number, term, arg)

  def atom_chars(atom: Term, list: Term): Term = Struct(Atom("atom_chars"), atom, list)
  def number_chars(atom: Term, list: Term): Term = Struct(Atom("atom"), atom, list)

  @targetName("cut")
  val `!`: Atom = Atom("!")

  val repeat: Atom = Atom("repeat")

  def call(goal: Term): Term = Struct(Atom("call"), goal)
  def once(goal: Term): Term = Struct(Atom("once"), goal)
  def not(goal: Term): Term = Struct(Atom("not"), goal)

  def findall(res: Term, goal: Term, list: Term): Term = Struct(Atom("findall"), res, goal, list)

  @targetName("naf")
  def !(goal: Term): Term = Struct(Atom("\\+"), goal)

  def op(precedence: Constant.Numeric, associativity: AssociativitySpec, name: Atom): Term =
    Struct(Atom("op"), precedence, associativity, name)

  def length(term: Term, len: Term): Term = Struct(Atom("length"), term, len)
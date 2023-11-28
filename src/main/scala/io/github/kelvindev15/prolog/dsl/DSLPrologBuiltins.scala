package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Goals.Conjunction
import io.github.kelvindev15.prolog.core.Struct.{Directive, Indicator}
import io.github.kelvindev15.prolog.core.{Constant, Prolog, Struct, Term}

import scala.annotation.targetName

protected enum AssociativitySpec extends Atom:
  case fx, fy, xf, xfx, xfy, yfx, yfy
  override val value: String = toString
  override val unquotedValue: String = value

protected trait DSLPrologBuiltins:
  dsl: PrologDSL =>
  export AssociativitySpec.*

  /** Returns a [[Directive]]
    *
    * @param terms
    *   the arguments of the directive.
    */
  @targetName("iff")
  def :-(terms: Term*): Directive = Directive(terms*)

  /** Builds a var(X) [[Struct]].
    *
    * @param term
    *   the argument of the structure
    */
  def `var`(term: Term): Struct = Struct(Atom("var"), term)

  /** Builds a nonvar(X) [[Struct]].
    *
    * @param term
    *   the argument of the structure
    */
  def nonvar(term: Term): Struct = Struct(Atom("nonvar"), term)

  /** Builds a atom(X) [[Struct]].
    *
    * @param term
    *   the argument of the structure
    */
  def atom(term: Term): Struct = Struct(Atom("atom"), term)

  /** Builds a number(X) [[Struct]].
    *
    * @param term
    *   the argument of the structure
    */
  def number(term: Term): Struct = Struct(Atom("number"), term)

  /** Builds an atomic(X) [[Struct]].
    *
    * @param term
    *   the argument of the structure
    */
  def atomic(term: Term): Struct = Struct(Atom("atomic"), term)

  /** Builds a ground(X) [[Struct]].
    *
    * @param term
    *   the argument of the structure
    */
  def ground(term: Term): Struct = Struct(Atom("ground"), term)

  /** Returns a member(t, l) [[Struct]].
    *
    * @param term
    *   a term
    * @param l
    *   a term that should unify to a list.
    */
  def member(term: Term, l: Term): Struct = Struct(Atom("member"), term, l)

  /** Returns an append(l1, l2) [[Struct]].
    *
    * @param l1
    *   a term that should unify to a list
    * @param l2
    *   a term that should unify to a list.
    */
  def append(l1: Term, l2: Term): Struct = Struct(Atom("append"), l1, l2)

  /** Returns a dynamic(t1, t2, ...) [[Struct]].
    *
    * @param indicators
    *   the indicators of the predicates.
    */
  def dynamic(indicators: Indicator*): Struct =
    Directive(Struct(Atom("dynamic"), Conjunction.wrapIfNecessary(indicators*)))

  def clause(head: Term, body: Term): Struct =
    Struct(Atom("clause"), head, body)

  /** Returns an asserta(X) [[Struct]].
    *
    * @param clause
    *   the clause to assert.
    */
  def asserta(clause: Term): Struct = Struct(Atom("asserta"), clause)

  /** Returns an assertz(X) [[Struct]].
    *
    * @param clause
    *   the clause to assert.
    */
  def assertz(clause: Term): Struct = Struct(Atom("assertz"), clause)

  /** Returns an retract(X) [[Struct]].
    *
    * @param clause
    *   the clause to retract.
    */

  def retract(clause: Term): Struct = Struct(Atom("retract"), clause)

  /** Returns a functor(T, F, N) [[Struct]].
    *
    * @param term
    *   a term.
    * @param functor
    *   a term that should unify with the of the [[term]] functor.
    * @param arity
    *   a term that should unify with the arity of the [[term]].
    */
  def functor(term: Term, functor: Term, arity: Term): Struct =
    Struct(Atom("functor"), term, functor, arity)

  /** Returns an arg(N, T, L) [[Struct]].
    *
    * @param number
    *   a term that should unify with the position of the [[arg]] in [[term]].
    * @param term
    *   a term
    * @param arg
    *   a term that should unify the with [[number]]-th argument in [[term]].
    */
  def arg(number: Term, term: Struct, arg: Term): Struct =
    Struct(Atom("arg"), number, term, arg)

  /** Returns an atom_chars(A, L) [[Struct]].
    *
    * @param atom
    *   a term that should unify to an atom.
    * @param list
    *   a term that should unify to a list containing the characters of
    *   [[atom]].
    */
  def atom_chars(atom: Term, list: Term): Struct =
    Struct(Atom("atom_chars"), atom, list)

  /** Returns an number_chars(A, L) [[Struct]].
    *
    * @param atom
    *   a term that should unify to an numeric constant
    * @param list
    *   a term that should unify with a list containing the characters composing
    *   the constant.
    */
  def number_chars(atom: Term, list: Term): Struct =
    Struct(Atom("number_chars"), atom, list)

  /** The cut predicate */
  @targetName("cut")
  val `!` : Atom = Atom("!")

  /** The repeat predicate */
  val repeat: Atom = Atom("repeat")

  /** Builds a goal(G) [[Struct]].
    *
    * @param goal
    *   the argument of the structure
    */
  def call(goal: Term): Struct = Struct(Atom("call"), goal)

  /** Builds a once(G) [[Struct]].
    *
    * @param goal
    *   the argument of the structure
    */
  def once(goal: Term): Struct = Struct(Atom("once"), goal)

  /** Builds a not(G) [[Struct]].
    *
    * @param goal
    *   the argument of the structure
    */
  def not(goal: Term): Struct = Struct(Atom("not"), goal)

  /** Returns a findall(T, G, L) [[Struct]].
    *
    * @param res
    * @param goal
    * @param list
    *   a term that should unify to a list containing ???
    */
  def findall(res: Term, goal: Term, list: Term): Struct =
    Struct(Atom("findall"), res, goal, list)

  /** Builds a \+(X) [[Struct]].
    *
    * @param goal
    *   the argument of the structure
    */
  @targetName("naf")
  def !(goal: Term): Struct = Struct(Atom("\\+"), goal)

  /** Returns an op(I, A, N) [[Struct]].
    *
    * @param precedence
    * @param associativity
    * @param name
    */
  def op(
      precedence: Constant.Numeric,
      associativity: AssociativitySpec,
      name: Atom
  ): Struct =
    Struct(Atom("op"), precedence, associativity, name)

  /** Returns a length(T, L) [[Struct]].
    *
    * @param term
    * @param len
    */
  def length(term: Term, len: Term): Struct = Struct(Atom("length"), term, len)

  /** An empty list functor */
  val `[]` : Atom = Prolog.Functors.EMPTY_LIST

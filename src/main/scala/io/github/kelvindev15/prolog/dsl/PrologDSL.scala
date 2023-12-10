package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.PrologList.{Cons, Nil}
import io.github.kelvindev15.prolog.core.Struct.{Clause, Directive, Fact, Rule}
import io.github.kelvindev15.prolog.core.theory.Theory
import io.github.kelvindev15.prolog.core.{Constant, PrologList, Struct, Term, Variable}

import scala.annotation.targetName

trait PrologDSL
    extends DSLPrologBuiltins
    with DSLExtensions
    with DSLVariables
    with DSLConversions:

  /** Returns a [[Theory]] of the provided clauses.
    *
    * @param clauses
    *   the clauses to include in the theory.
    */
  def theory(clauses: Clause*): Theory = Theory(clauses*)

  /** Returns a [[Struct]].
   * 
   * @param functor the functor of the struct.
   * @param arguments the arguments of the struct.
   */
  def structOf(functor: Atom, arguments: Term*): Struct = Struct(functor, arguments*)

  /** Returns a [[Fact]].
    *
    * @param fact
    *   the struct representing the fact.
    */
  def factOf(fact: Struct): Fact = Fact(fact)

  /** Returns a [[Rule]].
    *
    * @param head
    *   the head of the rule.
    * @param body1
    *   the first term of the rule's body.
    * @param others
    *   the other terms of the rule's body.
    */
  def ruleOf(head: Struct, body1: Term, others: Term*): Rule =
    Rule(head, others*)

  /** Returns a [[Directive]]
    *
    * @param terms
    *   the arguments of the directive.
    */
  def directiveOf(terms: Term*): Directive = Directive(terms*)

  /** Returns an [[Atom]].
    *
    * @param value
    *   the value of the atom.
    */
  def atomOf(value: String): Atom = Atom(value)

  /** Returns a [[Constant.Numeric]].
   * 
   * @param value the value of the numeric constant.
   */
  def numOf(value: (Int | Double)): Constant.Numeric = Constant.Numeric(value)

  /** Returns a [[Variable]].
    *
    * @param name
    *   the name of the variable.
    * @return
    */
  def varOf(name: String): Variable = Variable(name)

  private def wrap(terms: Term*)(f: (Term, Term) => Term): Term =
    terms.size match
      case 1          => terms.head
      case n if n > 1 => f(terms.head, wrap(terms.tail*)(f))

  /** Returns a term which is a [[Disjunction]] of goals if more than one term
    * is provided. otherwise it returns the provided term.
    *
    * @param terms
    *   the terms to put in disjunction.
    */
  @targetName("disjunction")
  def ||(terms: Term*): Term = wrap(terms*)(_ or _)

  /** Returns a term which is a [[Conjunction]] of goals if more than one term
    * is provided. otherwise it returns the provided term.
    *
    * @param terms
    *   the terms to put in conjunction.
    */
  @targetName("conjunction")
  def &&(terms: Term*): Term = wrap(terms*)(_ and _)

  /** Returns a [[PrologList]] holding the provided terms.
    *
    * @param terms
    *   the terms to put in the list.
    */
  def list(terms: Term*): PrologList = PrologList(terms*)

  /** Returns a [[PrologList]].
    *
    * @param term
    *   the head of the list.
    * @param tail
    *   the tail of the list.
    */
  def cons(term: Term, tail: (PrologList | Variable)): PrologList =
    Cons(term, tail)

  /** Returns a [[PrologList]], simulating the pipe notation ([a, b, c | X])
    *
    * @param terms
    *   the terms that would be before the pipe.
    * @param tail
    *   the tail of the list
    */
  def cons(terms: Term*)(tail: (PrologList | Variable)): PrologList =
    terms.size match
      case 0 =>
        throw IllegalArgumentException("There must be at least 1 term argument")
      case 1          => cons(terms.head, tail)
      case n if n > 0 => cons(terms.head, cons(terms.tail*)(tail))

  /** An empty [[PrologList]] */
  def nil: PrologList = Nil

  /** Returns a sequence of terms */
  def head(terms: Term*): Seq[Term] = terms

  extension (list: Seq[Term])
    /** Simulates the list pipe notation.
      */
    @targetName("pipe")
    def |(tail: (PrologList | Variable)): Term = cons(list*)(tail)

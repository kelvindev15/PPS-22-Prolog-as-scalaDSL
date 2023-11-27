package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.PrologList.{Cons, Nil}
import io.github.kelvindev15.prolog.core.Struct.Clause
import io.github.kelvindev15.prolog.core.theory.Theory
import io.github.kelvindev15.prolog.core.{PrologList, Term, Variable}

import scala.annotation.targetName

trait PrologDSL extends DSLPrologBuiltins with DSLExtensions with DSLVariables with DSLConversions:

  def theory(clauses: Clause*): Theory = Theory(clauses*)

  private def wrap(terms: Term*)(f: (Term, Term) => Term): Term = terms.size match
    case 1 => terms.head
    case n if n > 1 => f(terms.head, wrap(terms.tail*)(f))

  @targetName("disjunction")
  def ||(terms: Term*): Term = wrap(terms*)(_ or _)
  @targetName("conjunction")
  def &&(terms: Term*): Term = wrap(terms*)(_ and _)

  def list(terms: Term*): PrologList = PrologList(terms *)
  def cons(term: Term, tail: (PrologList | Variable)): PrologList = Cons(term, tail)
  def cons(terms: Term*)(tail: (PrologList | Variable)): PrologList = terms.size match
    case 0 => throw IllegalArgumentException("There must be at least 1 term argument")
    case 1 => cons(terms.head, tail)
    case n if n > 0 => cons(terms.head, cons(terms.tail*)(tail))
  def nil: PrologList = Nil
  def head(terms: Term*): Seq[Term] = terms
  extension (list: Seq[Term])
    @targetName("pipe")
    def |(tail: (PrologList | Variable)): Term = cons(list*)(tail)
  def varOf(name: String): Variable = Variable(name)  

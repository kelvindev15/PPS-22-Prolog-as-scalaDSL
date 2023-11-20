package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.PrologList.{Cons, Nil}
import io.github.kelvindev15.prolog.core.Struct.Clause
import io.github.kelvindev15.prolog.core.Theory.Theory
import io.github.kelvindev15.prolog.core.{PrologList, Term, Variable}

import scala.annotation.targetName

trait PrologDSL:
  export DSLFacilities.{*, given}
  export DSLVariables.*

  def theory(clauses: Clause*): Theory = Theory(clauses*)
  
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
    def |(tail: (PrologList | Variable)) = cons(list*)(tail)

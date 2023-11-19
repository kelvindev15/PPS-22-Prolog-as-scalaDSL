package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.PrologList.{Cons, Nil}
import io.github.kelvindev15.prolog.core.Struct.Clause
import io.github.kelvindev15.prolog.core.{PrologList, Term, Variable}
import io.github.kelvindev15.prolog.core.Theory.Theory

import scala.annotation.targetName

trait PrologDSL:
  export DSLFacilities.{*, given}
  export DSLVariables.*

  def theory(clauses: Clause*): Theory = Theory(clauses*)
  def list(terms: Term*): PrologList = PrologList(terms *)
  def cons(term: Term, tail: (PrologList | Variable)): PrologList = Cons(term, tail)
  def nil: PrologList = Nil



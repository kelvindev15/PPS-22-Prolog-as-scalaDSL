package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Struct.Clause
import io.github.kelvindev15.prolog.core.theory.Theory

private[dsl] trait DeclarativePrologUtils:
  self: DeclarativeProlog =>
  trait MutableTheoryWrapper:
    var theory: Theory = Theory()

    def add(clause: Clause): Theory = {
      theory = theory add clause; theory
    }

    def remove(clause: Clause): Theory = {
      theory = theory remove clause;
      theory
    }

  trait MutableDynamicTheoryWrapper extends MutableTheoryWrapper

  object MutableDynamicTheoryWrapper:
    def apply(t: Theory): MutableDynamicTheoryWrapper =
      new MutableDynamicTheoryWrapper:
        theory = t

    def apply(clauses: Clause*): MutableDynamicTheoryWrapper =
      new MutableDynamicTheoryWrapper:
        theory = Theory(clauses*)

package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Struct.Clause
import io.github.kelvindev15.prolog.core.Theory.Theory

import scala.annotation.targetName

trait PrologDSL:
  export DSLFacilities.{*, given}
  export DSLVariables.*

  def theory(clauses: Clause*): Theory = Theory(clauses*)
  


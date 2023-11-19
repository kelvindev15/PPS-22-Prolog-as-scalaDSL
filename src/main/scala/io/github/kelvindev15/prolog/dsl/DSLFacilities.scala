package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Rule
import io.github.kelvindev15.prolog.core.{Constant, Term}

import scala.annotation.targetName

object DSLFacilities:
  export DSLPrologBuiltins.*
  export DSLConversions.given
  export DSLExtensions.*
  
  

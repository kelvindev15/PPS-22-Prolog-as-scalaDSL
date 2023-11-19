package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Fact
import io.github.kelvindev15.prolog.core.{Constant, Struct}

object DSLConversions:
  given Conversion[String, Atom] = Atom(_)
  given Conversion[AnyVal, Constant.Numeric] = Constant.Numeric(_)
  given Conversion[Struct, Fact] = Fact(_)

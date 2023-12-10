package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Fact
import io.github.kelvindev15.prolog.core.{Constant, PrologList, Struct, Term}
import io.github.kelvindev15.prolog.utils.TermConvertible

protected[dsl] trait DSLConversions:
  dsl: PrologDSL =>
  given Conversion[String, Atom] = atomOf(_)
  given Conversion[AnyVal, Constant] = {
    case boolean: Boolean      => atomOf(if (boolean) "true" else "false")
    case other: (Int | Double) => numOf(other)
  }
  given Conversion[Struct, Fact] = factOf(_)
  given Conversion[Seq[Term], PrologList] = list(_*)
  given Conversion[TermConvertible, Term] = _.toTerm

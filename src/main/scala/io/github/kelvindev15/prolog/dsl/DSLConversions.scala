package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.Struct.Fact
import io.github.kelvindev15.prolog.core.{Constant, PrologList, Struct, Term}
import io.github.kelvindev15.prolog.utils.TermConvertible

protected[dsl] trait DSLConversions:
  dsl: PrologDSL =>
  given Conversion[String, Atom] = Atom(_)
  given Conversion[AnyVal, Constant] = {
    case boolean: Boolean => Atom(if (boolean) "true" else "false")
    case other            => Constant.Numeric(other)
  }
  given Conversion[Struct, Fact] = Fact(_)
  given Conversion[Seq[Term], PrologList] = PrologList(_*)
  given Conversion[TermConvertible, Term] = _.toTerm

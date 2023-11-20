package io.github.kelvindev15.prolog.utils

import io.github.kelvindev15.prolog.core.Term

trait TermConvertible:
  def toTerm: Term

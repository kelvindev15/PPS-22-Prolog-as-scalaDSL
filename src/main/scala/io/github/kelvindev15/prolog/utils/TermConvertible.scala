package io.github.kelvindev15.prolog.utils

import io.github.kelvindev15.prolog.core.Term

/** Provide objects of a method to convert themselves to a [[Term]] */
trait TermConvertible:
  def toTerm: Term

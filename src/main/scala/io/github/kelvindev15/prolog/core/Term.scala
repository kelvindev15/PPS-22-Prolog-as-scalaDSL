package io.github.kelvindev15.prolog.core

import io.github.kelvindev15.prolog.utils.TermVisitor

trait Visitable:
  self: Term =>
  def accept[T](visitor: TermVisitor[T]): T

trait Term extends Visitable:
  def isGround: Boolean
  def variables: Seq[Variable]

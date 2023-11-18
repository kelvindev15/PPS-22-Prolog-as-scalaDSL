package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Variable

object DSLVariables:
  def `__`: Variable = Variable.anonymous()
  def A: Variable = Variable("A")
  def B: Variable = Variable("B")
  def C: Variable = Variable("C")
  def H: Variable = Variable("H")
  def S: Variable = Variable("S")
  def T: Variable = Variable("T")
  def X: Variable = Variable("X")
  def Y: Variable = Variable("Y")
  def Z: Variable = Variable("Z")

package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Variable

trait DSLVariables:
  dsl: PrologDSL =>
  def `__`: Variable = Variable.anonymous()
  def A: Variable = Variable("A")
  def B: Variable = Variable("B")
  def C: Variable = Variable("C")
  def D: Variable = Variable("D")
  def E: Variable = Variable("E")
  def F: Variable = Variable("F")
  def H: Variable = Variable("H")
  def L: Variable = Variable("L")
  def N: Variable = Variable("N")
  def M: Variable = Variable("M")
  def S: Variable = Variable("S")
  def T: Variable = Variable("T")
  def X: Variable = Variable("X")
  def Y: Variable = Variable("Y")
  def Z: Variable = Variable("Z")

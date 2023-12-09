package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Variable

protected[dsl] trait DSLVariables:
  dsl: PrologDSL =>
  def `__` : Variable = Variable.anonymous()
  def A: Variable = Variable("A")
  def B: Variable = Variable("B")
  def C: Variable = Variable("C")
  def D: Variable = Variable("D")
  def E: Variable = Variable("E")
  def F: Variable = Variable("F")
  def G: Variable = Variable("G")
  def H: Variable = Variable("H")
  def I: Variable = Variable("I")
  def J: Variable = Variable("J")
  def K: Variable = Variable("K")
  def L: Variable = Variable("L")
  def N: Variable = Variable("N")
  def M: Variable = Variable("M")
  def O: Variable = Variable("O")
  def P: Variable = Variable("P")
  def Q: Variable = Variable("Q")
  def R: Variable = Variable("R")
  def S: Variable = Variable("S")
  def T: Variable = Variable("T")
  def U: Variable = Variable("U")
  def V: Variable = Variable("V")
  def W: Variable = Variable("W")
  def X: Variable = Variable("X")
  def Y: Variable = Variable("Y")
  def Z: Variable = Variable("Z")

package io.github.kelvindev15.prolog.dsl

import io.github.kelvindev15.prolog.core.Variable

protected[dsl] trait DSLVariables:
  dsl: PrologDSL =>
  def `__` : Variable = Variable.anonymous()
  def A: Variable = varOf("A")
  def B: Variable = varOf("B")
  def C: Variable = varOf("C")
  def D: Variable = varOf("D")
  def E: Variable = varOf("E")
  def F: Variable = varOf("F")
  def G: Variable = varOf("G")
  def H: Variable = varOf("H")
  def I: Variable = varOf("I")
  def J: Variable = varOf("J")
  def K: Variable = varOf("K")
  def L: Variable = varOf("L")
  def N: Variable = varOf("N")
  def M: Variable = varOf("M")
  def O: Variable = varOf("O")
  def P: Variable = varOf("P")
  def Q: Variable = varOf("Q")
  def R: Variable = varOf("R")
  def S: Variable = varOf("S")
  def T: Variable = varOf("T")
  def U: Variable = varOf("U")
  def V: Variable = varOf("V")
  def W: Variable = varOf("W")
  def X: Variable = varOf("X")
  def Y: Variable = varOf("Y")
  def Z: Variable = varOf("Z")

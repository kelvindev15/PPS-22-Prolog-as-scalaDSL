package io.github.kelvindev15

type Substitution
type Query

enum Solution:
  case Yes(substitution: Substitution)
  case No

class PrologProgram:
  def solve(query: Query): Solution = ???

package io.github.kelvindev15.prolog

import io.github.kelvindev15.prolog.Constant.Atom

import scala.util.matching.Regex

object Prolog:
  object Syntax:
    val AtomRegex: Regex = "^[a-z][a-zA-Z_0-9]*$".r
    val VariableRegex: Regex = "[A-Z_][a-zA-Z_0-9]*".r
    
  object Functors:
    val GOAL_CONJUNCTION: Atom = Atom(",")
    val GOAL_DISJUNCTION: Atom = Atom(";")
    val CLAUSE: Atom = Atom(":-")
    val EMPTY_LIST: Atom = Atom("[]")
    val CONS: Atom = Atom(".")
    val TRUE: Atom = Atom("true")
    val FAIL: Atom = Atom("fail")

package io.github.kelvindev15.prolog.core

import scala.annotation.targetName

/*object LangFeatures:
  extension (a: Atom)
    def apply(args: Term*): CompoundTerm = CompoundTerm(a, args*)

  extension (t: Term)
    @targetName("univ")
    def `=..`(o: Term): Term = Struct("=..", t, o)
  given Conversion[String, Atom] with
    override def apply(value: String): Atom = Atom(value)
*/
object Language:
  object Builtins

    /*val `true`: Atom = "true"
    val fail: Atom = "fail"
    def `var`(term: Term): Term = "var"(term)
    def nonvar(term: Term): Term = "nonvar"(term)
    def atom(term: Term): Term = "atom"(term)
    def number(term: Term): Term = "number"(term)
    def atomic(term: Term): Term = "atomic"(term)
    def clause(x: Term, y: Term): Term = "clause"(x, y)
    def asserta(x: Term): Term = "asserta"(x)
    def assertz(x: Term): Term = "assertz"(x)
    def retract(x: Term): Term = "retract"(x)
    def listing(x: Atom): Term = "listing"(x)
    def functor(t: Term, f: Term, n: Term): Term = "functor"(t, f, n)
    def arg(n: Term, t: Term, a: Term): Term = "functor"(n, t, a)
    @targetName("univ")
    def `=..`(x: Term, l: Term): Term = x.`=..`(l)
    def atom_chars(a: Term, l: Term): Term = "atom_chars"(a, l)
    def number_chars(a: Term, l: Term): Term = "number_chars"(a, l)
    @targetName("cut")
    val `!`: Term = "!"
*/

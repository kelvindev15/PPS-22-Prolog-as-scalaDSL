package io.github.kelvindev15.prolog.engine.visitors

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.{Struct, Term, Variable}
import it.unibo.tuprolog.core
import it.unibo.tuprolog.core.{TermVisitor, Atom as KAtom, Struct as KStruct, Term as KTerm, Var as KVariable}

import scala.jdk.CollectionConverters.*

class BackVisitor extends TermVisitor[Term]:
  override def defaultValue(term: KTerm): Term = term match
    case atom: KAtom => visitAtom(atom)
    case variable: KVariable => visitVar(variable)

  override def visitAtom(term: KAtom): Atom = Atom(term.getValue)
  override def visitStruct(term: KStruct): Struct =
    Struct(Atom(term.getFunctor), term.getArgs.asScala.map(visitTerm).toSeq*)
  override def visitVar(term: KVariable): Variable = Variable(term.getName)



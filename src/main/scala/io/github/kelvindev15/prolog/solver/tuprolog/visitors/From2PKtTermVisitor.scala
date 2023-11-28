package io.github.kelvindev15.prolog.solver.tuprolog.visitors

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.PrologList.Cons
import io.github.kelvindev15.prolog.core.*
import it.unibo.tuprolog.core
import it.unibo.tuprolog.core.{
  TermVisitor,
  Atom as KAtom,
  Cons as KCons,
  Constant as KConstant,
  EmptyList as KEmptyList,
  Integer as KInteger,
  Real as KReal,
  Struct as KStruct,
  Term as KTerm,
  Var as KVariable
}

import scala.jdk.CollectionConverters.*

/** Converts the [[Term]] hierarchy to a tuProlog [[KTerm]] hierarchy */
class From2PKtTermVisitor extends TermVisitor[Term]:

  override def defaultValue(term: KTerm): Term = term match
    case emptyList: KEmptyList => visitEmptyList(emptyList)
    case list: KCons           => visitCons(list)
    case atom: KAtom           => visitAtom(atom)
    case variable: KVariable   => visitVar(variable)
    case constant: KConstant   => visitConstant(constant)
    case struct: KStruct       => visitStruct(struct)

  override def visitAtom(term: KAtom): Atom = Atom(term.getValue)

  override def visitStruct(term: KStruct): Struct =
    Struct(Atom(term.getFunctor), term.getArgs.asScala.map(visitTerm).toSeq*)

  override def visitVar(term: KVariable): Variable = Variable(term.getName)

  override def visitEmptyList(term: KEmptyList): PrologList =
    io.github.kelvindev15.prolog.core.PrologList.Nil

  override def visitCons(term: KCons): PrologList = term.getTail match
    case t if t.isCons =>
      Cons(visitTerm(term.getHead), visitCons(term.getTail.asCons()))
    case t if t.isEmptyList =>
      Cons(visitTerm(term.getHead), visitEmptyList(t.asEmptyList()))
    case t if t.isVar =>
      Cons(visitTerm(term.getHead), visitVar(term.getTail.asVar()))

  override def visitConstant(term: KConstant): Term = term match
    case integer: KInteger => Constant(integer.getValue.toInt)
    case double: KReal     => Constant(double.getValue.toDouble)

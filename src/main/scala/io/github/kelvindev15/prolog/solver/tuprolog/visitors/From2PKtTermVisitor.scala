package io.github.kelvindev15.prolog.solver.tuprolog.visitors

import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.PrologList.Cons
import io.github.kelvindev15.prolog.core.*
import it.unibo.tuprolog.core
import it.unibo.tuprolog.core.{Block, Clause, Directive, Empty, EmptyBlock, Fact, Indicator, Recursive, Rule, TermVisitor, Truth, Atom as KAtom, Cons as KCons, Constant as KConstant, EmptyList as KEmptyList, Integer as KInteger, Real as KReal, Struct as KStruct, Term as KTerm, Var as KVariable}

import scala.jdk.CollectionConverters.*

/** Converts the [[KTerm]] hierarchy to a tuProlog [[Term]] hierarchy */
private[tuprolog] object From2PKtTermVisitor extends TermVisitor[Term]:

  override def defaultValue(term: KTerm): Term = term match
    case emptyList: KEmptyList => visitEmptyList(emptyList)
    case list: KCons           => visitCons(list)
    case atom: KAtom           => visitAtom(atom)
    case variable: KVariable   => visitVar(variable)
    case constant: KConstant   => visitConstant(constant)
    case struct: KStruct       => visitStruct(struct)
    case _ => throw NotImplementedError(s"The 2p-kt $term term cannot be currently converted to a term")

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
      Cons(visitTerm(term.getHead), visitEmptyList(t.castToEmptyList()))
    case t if t.isVar =>
      Cons(visitTerm(term.getHead), visitVar(term.getTail.asVar()))

  override def visitConstant(term: KConstant): Term = term match
    case integer: KInteger => Constant(integer.getValue.toInt)
    case double: KReal     => Constant(double.getValue.toDouble)

  override def visitBlock(block: Block): Term = defaultValue(block)

  override def visitClause(clause: Clause): Term = defaultValue(clause)

  override def visitCollection(recursive: Recursive): Term = defaultValue(recursive)

  override def visitDirective(directive: Directive): Term = defaultValue(directive)

  override def visitEmpty(empty: Empty): Term = defaultValue(empty)

  override def visitEmptyBlock(emptyBlock: EmptyBlock): Term = defaultValue(emptyBlock)

  override def visitFact(fact: Fact): Term = defaultValue(fact)

  override def visitIndicator(indicator: Indicator): Term = defaultValue(indicator)

  override def visitInteger(integer: KInteger): Term = defaultValue(integer)

  override def visitList(list: core.List): Term = defaultValue(list)

  override def visitNumeric(numeric: core.Numeric): Term = defaultValue(numeric)

  override def visitReal(real: KReal): Term = defaultValue(real)

  override def visitRule(rule: Rule): Term = defaultValue(rule)

  override def visitTerm(term: KTerm): Term = defaultValue(term)

  override def visitTruth(truth: Truth): Term = defaultValue(truth)

  override def visitTuple(tuple: core.Tuple): Term = defaultValue(tuple)

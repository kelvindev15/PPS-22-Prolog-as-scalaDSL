package io.github.kelvindev15.prolog.solver.tuprolog.visitors

import io.github.kelvindev15.prolog.core.*
import io.github.kelvindev15.prolog.core.Constant.Atom
import io.github.kelvindev15.prolog.core.PrologList.Cons
import io.github.kelvindev15.prolog.core.RecursiveStruct.BinaryRecursiveStruct
import io.github.kelvindev15.prolog.core.Struct.{Clause, Directive, Fact, Rule}
import io.github.kelvindev15.prolog.solver.tuprolog.TuPrologFactoryMethods.*
import io.github.kelvindev15.prolog.utils.TermVisitor
import it.unibo.tuprolog.core.{Scope as KScope, Term as KTerm}

/** Converts a tuProlog [[Term]] hierarchy to a [[Term]] hierarchy.
 * Creates a new scope per each [[KClause]].
 *
 * @constructor create a new instance of the visitor with a scope.
 * @param scope the [[KScope]] to use when creating a tuProlog [[KTerm]]. (Defaults to an empty scope)             
 */
class To2PKtTermVisitor(scope: KScope = ktEmptyScope) extends TermVisitor[KTerm]:

  override def visit(atom: Atom): KTerm = ktAtomOf(atom.unquotedValue)

  override def visit(numeric: Constant.Numeric): KTerm = numeric.value match
    case value: Double => ktNumOf(value)
    case value: Int => ktNumOf(value)

  override def visit(struct: Struct): KTerm = struct match
    case clause: Clause => super.visit(clause)
    case list: PrologList => visit(list)
    case _ => ktStructOf(struct.functor.unquotedValue, struct.arguments.map(this.visit)*)

  override def visit(fact: Fact): KTerm = fact.head.map(h => ktFactOf(h.accept(this).asStruct())).get

  override def visit(rule: Rule): KTerm =
    rule.head.map(h => ktRuleOf(h.accept(this).asStruct(), rule.body.accept(this))).get

  override def visit(directive: Directive): KTerm = ktDirectiveOf(directive.body.accept(this))

  override def visit(variable: Variable): KTerm = scope.varOf(variable.name)

  override def visit(binaryRecursiveStruct: BinaryRecursiveStruct): KTerm =
    visit(binaryRecursiveStruct.asInstanceOf[Struct])

  override def visit(list: PrologList): KTerm = list match
    case head: Cons => ktConsOf(visit(head.head), visit(head.tail))
    case PrologList.Nil => ktEmptyList

object To2PKtTermVisitor:
  /** Returns a new instance of the [[To2PKtTermVisitor]] with a new empty scope */
  def withNewScope: To2PKtTermVisitor = To2PKtTermVisitor(ktEmptyScope)

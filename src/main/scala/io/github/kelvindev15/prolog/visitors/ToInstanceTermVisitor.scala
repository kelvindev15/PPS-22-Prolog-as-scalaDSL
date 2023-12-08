package io.github.kelvindev15.prolog.visitors

import io.github.kelvindev15.prolog.core.{Constant, PrologList, Struct, Term, Variable}
import io.github.kelvindev15.prolog.solver.Solver.Substitution

class ToInstanceTermVisitor(substitution: Substitution) extends TermVisitor[Term]:
  override def visit(struct: Struct): Term = struct match
    case l: PrologList => visit(l)
    case _ => Struct(struct.functor, struct.arguments.map(visit)*)
  override def visit(list: PrologList): Term = PrologList(list.linearizedArguments.map(visit)*)
  override def visit(variable: Variable): Term = substitution.getOrElse(variable, variable)
  override def visit(atom: Constant.Atom): Term = atom
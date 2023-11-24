package io.github.kelvindev15.engine

import io.github.kelvindev15.prolog.dsl.{DeclarativeDSL, PrologDSL}
import io.github.kelvindev15.prolog.engine.PrologEngine.Solution
import io.github.kelvindev15.prolog.engine.Solver
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class TestPrologEngine extends AnyFlatSpec with Matchers with PrologDSL with DeclarativeDSL:

  "A prolog with no solution" should "return a single NO answer" in:
    val solution = Solver.solve {
      prolog {
        staticTheory {
          clause { "father"("mala", "paga") }
          clause { "father"("mala", "kel") }
        }
        solve { "father"("mala", X) }
      }
    }
    solution shouldBe a [Solution]

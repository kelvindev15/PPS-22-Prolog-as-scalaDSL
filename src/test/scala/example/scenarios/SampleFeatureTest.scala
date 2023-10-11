package example.scenarios

import example.IsItFriday
import io.cucumber.scala.{EN, ScalaDsl}
import org.scalatest.matchers.should.*

class SampleFeatureTest extends ScalaDsl with EN with Matchers:
  private var today: String = ""
  private var actualAnswer: String = ""

  Given("""today is {string}""") { (day: String) =>
    today = day
  }

  When("""I ask whether it's Friday yet""") { () =>
    actualAnswer = IsItFriday.isItFriday(today)
  }

  Then("""I should be told {string}""") { (expectedAnswer: String) =>
    expectedAnswer should be(actualAnswer)
  }

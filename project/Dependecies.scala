import sbt.*

object Dependecies {
  /*
   * Versions
   */
  lazy val scalaTestVersion = "3.2.17"
  lazy val cucumberVersion = "8.14.1"
  /*
   * Libraries
   */
  val cucumberCore = "io.cucumber" % "cucumber-core" % "6.10.3" % "test"
  val cucumberJunit =
    "io.cucumber" % "cucumber-junit" % cucumberVersion % "test"
  val cucumberJvm = "io.cucumber" % "cucumber-jvm" % cucumberVersion % "test"
  val cucumberScala = "io.cucumber" %% "cucumber-scala" % cucumberVersion % Test
  val scalaTest = "org.scalactic" %% "scalactic" % scalaTestVersion
  val scalactic = "org.scalatest" %% "scalatest" % scalaTestVersion % "test"
  val scalaTestJUnit5 =
    "org.scalatestplus" %% "junit-5-10" % "3.2.17.0" % "test"
  /*
   * Bundles
   */
  val scalaTestBundle = Seq(scalaTest, scalactic)
  val cucumberBundle = Seq(cucumberCore, cucumberScala)
}

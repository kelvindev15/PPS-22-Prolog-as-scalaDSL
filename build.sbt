import Dependecies.*

ThisBuild / scalaVersion := "3.7.0"
ThisBuild / organization := "io.github.kelvindev15"
ThisBuild / description := "A DSL written in scala to write Prolog programs"

ThisBuild / sonatypeCredentialHost := "s01.oss.sonatype.org"
sonatypeRepository := "https://s01.oss.sonatype.org/service/local"

scalafmtDetailedError := true
/*
 * Wartremover
 */
addCompilerPlugin(
  "org.wartremover" %% "wartremover" % "3.3.4" cross CrossVersion.full
)
// see: https://www.wartremover.org/doc/warts.html
scalacOptions ++= Seq("Null").map(wart =>
  s"-P:wartremover:traverser:org.wartremover.warts.$wart"
)

Compile / doc / target := baseDirectory.value / "api"

assembly / assemblyMergeStrategy := {
  case PathList("META-INF", _*) => MergeStrategy.discard
  case _                        => MergeStrategy.first
}

lazy val PaSDSL = (project in file("."))
  .settings(
    name := "Prolog-as-ScalaDSL",
    scalaVersion := "3.7.0",
    libraryDependencies ++= scalaTestBundle,
    libraryDependencies ++= cucumberBundle,
    libraryDependencies += scalaTestJUnit5,
    libraryDependencies += tuProlog,
    Compile / mainClass := Some("io.github.kelvindev15.prolog.Application"),
    homepage := Some(url("https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL")),
    licenses := List("Apache-2.0" -> url("http://www.apache.org/licenses/LICENSE-2.0")),
    developers := List(
      Developer(
        "kelvin-olaiya",
        "Kelvin Olaiya",
        "kelvinoluwada.olaiya@studio.unibo.it",
        url("https://kelvin-olaiya.github.io")
      )
    )
  )

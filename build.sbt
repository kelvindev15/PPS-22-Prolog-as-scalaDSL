import Dependecies.*

ThisBuild / scalaVersion := "3.3.1"
ThisBuild / organization := "io.github.kelvindev15"

// enablePlugins(CucumberPlugin)
// CucumberPlugin.glues := List("example.scenarios")

scalafmtDetailedError := true
/*
 * Wartremover
 */
addCompilerPlugin(
  "org.wartremover" %% "wartremover" % "3.1.4" cross CrossVersion.full
)
// see: https://www.wartremover.org/doc/warts.html
scalacOptions ++= Seq("Null").map(wart =>
  s"-P:wartremover:traverser:org.wartremover.warts.$wart"
)

Compile / doc / target := baseDirectory.value / "api"

lazy val hello = (project in file("."))
  .settings(
    name := "Prolog-as-ScalaDSL",
    scalaVersion := "3.3.1",
    libraryDependencies ++= scalaTestBundle,
    libraryDependencies ++= cucumberBundle,
    libraryDependencies += scalaTestJUnit5
  )
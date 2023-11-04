package io.github.kelvindev15.prolog

trait Variable extends Term:
  val name: String
  final def isAnonymous: Boolean = name == "_" 
  final override def isGround: Boolean = false
  final override def variables: Seq[Variable] = Seq(this)

object Variable:
  def apply(name: String): Variable =
    require(
      name == "_" || name.matches("""\p{Upper}[a-zA-Z0-9_]*"""),
      "A variable name should be an alphanumerical string beginning with an with an uppercase letter"
    )
    VariableImpl(name: String)

  private case class VariableImpl(name: String) extends Variable
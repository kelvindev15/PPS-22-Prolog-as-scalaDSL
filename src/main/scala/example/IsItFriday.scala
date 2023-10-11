package example

object IsItFriday:
  def isItFriday(today: String): String =
    if today == "Friday" then "TGIF" else "Nope"

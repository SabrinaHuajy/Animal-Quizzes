function translate_heading() {

  const head = document.getElementById("Translate");
  let h1 = head.innerHTML;
  let h2 = h1.match("trivia");

  if (h2 == "trivia") {
    head.innerHTML = "<a onmouseover='translate_heading()'>动物小知识</a>";
  } else {
    head.innerHTML = "<a onmouseout='translate_heading()'>Animal trivia</a>";
  }
}
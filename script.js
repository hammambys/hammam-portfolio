function handleActive(id, btnClasse) {
  var divs = document.querySelectorAll(".inside");
  var btns = document.querySelectorAll(".btn");

  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove("active");
  }
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active_input");
  }
  document.getElementById(id).classList.add("active");
  document.getElementsByClassName(btnClasse)[0].classList.add("active_input");
}

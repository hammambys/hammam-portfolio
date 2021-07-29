function handleActive(id) {
  var btns = document.querySelectorAll(".menuBtn");

  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active_input");
  }

  document.getElementById(id).classList.add("active_input");
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}
function ValidateForm() {
  var fname = document.getElementById("fname").value;

  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var errorMsg = "Please fill these fields : \n";
  var errors = "";

  if (fname == "") errors += "Full Name \n";

  if (message == "") errors += "Message \n";
  if (email == "") {
    errors += "Email \n";
  } else {
    if (!isEmail(email)) alert("invalide email adress");
  }
  if (errors != "") {
    alert(errorMsg + errors);
  } else {
    if (isEmail(email)) alert("email send successfully");
  }
}

// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal");

// When the user clicks the button, open the modal
btn[0].onclick = function () {
  modal[0].style.display = "block";
};

btn[1].onclick = function () {
  modal[1].style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span[0].onclick = function () {
  modal[0].style.display = "none";
};

span[1].onclick = function () {
  modal[1].style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
};

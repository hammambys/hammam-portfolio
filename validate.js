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

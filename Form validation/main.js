var nameError = document.getElementById("name_error");
var phoneError = document.getElementById("phone_error");
var emailError = document.getElementById("email_error");

var passError = document.getElementById("pass_error");
var submitError = document.getElementById("submit_error");

function validName() {
  var name = document.getElementById("user_name").value;

  if (name.length == 0) {
    nameError.innerText = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerText = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
//
function validPhone() {
  var phone = document.getElementById("user_phone").value;
  if (phone.length == 0) {
    phoneError.innerText = "Phone is required";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerText = "Should be 11 digit";
    return false;
  }

  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerText = "Only digit";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
//
function validEmail() {
  var email = document.getElementById("user_email").value;
  if (email.length == 0) {
    emailError.innerText = "Email is required";
    return false;
  }

  if (!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) {
    emailError.innerText = "Please give valid mail";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
//

function validPass() {
  var password = document.getElementById("user_pass").value;
  if (password.length == 0) {
    passError.innerText = "Password is required";
    return false;
  }

  if (password.length < 8) {
    passError.innerText = "Password must be 8 character or upper";
    return false;
  }

  if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    passError.innerText = "should be mix of letter,number,char";
    return false;
  }

  passError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
//
function validateForm() {
  if (!validName() || !validPhone() || !validEmail() || !validPass()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

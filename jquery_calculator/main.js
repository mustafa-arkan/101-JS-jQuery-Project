var displayfield = $("#display");

function insertNumber(num) {
  var currentNumber = displayfield.val();
  displayfield.val(currentNumber + num);
}
//now clear btn er kaj korbo
function clearNumber() {
  displayfield.val("");
}

//Delete Numbers
function deleteNumber() {
  var presentValue = displayfield.val();

  if (presentValue != "") {
    displayfield.val(presentValue.slice(0, -1));
  }
}

//calculation after click equal
function calculate() {
  var result = eval($("#display").val());
  displayfield.val(result);
}

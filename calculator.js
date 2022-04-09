const errorMessage = "ERRORE";

function checkError(string) {
  foundError = false;

  if (string == errorMessage) {
    foundError = true;
    return foundError;
  }
}

function display(buttonValue) {
  if (checkError(document.getElementById("result").value)) {
    return;
  }
  document.getElementById("result").value += buttonValue;
}

function cleanDisplay() {
  document.getElementById("result").value = "";
}

function cancel(string) {
  if (checkError(document.getElementById("result").value)) {
    return;
  }
  const stringBeforeCancellation = string;
  const stringAfterCancellation = stringBeforeCancellation.slice(0, -1);
  document.getElementById("result").value = "";
  document.getElementById("result").value += stringAfterCancellation;
  return stringAfterCancellation;
}

function checkDivisionByZero(string) {
  foundDivisionByZero = false;

  if (string.search("/0") !== -1) {
    foundDivisionByZero = true;
    document.getElementById("result").value = "";
    document.getElementById("result").value += errorMessage;
    throw new Error("Impossibile dividere per 0!");
  }
  return foundDivisionByZero;
}

function calculateResult() {
  let equation = document.getElementById("result").value;

  let checkedEquation = equation.replace(/[^-\d/*+.]/g, "");
  console.log(checkedEquation);

  if (checkDivisionByZero(checkedEquation) == false) {
    let result = eval(checkedEquation);
    document.getElementById("result").value = result;
  }
}

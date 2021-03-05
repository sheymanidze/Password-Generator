var generateBtn = document.querySelector("#generate");

var numbers = "0123456789".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*()={}[]|,.<>/?:;~".split("");


function generatePassword() {
  var functionsArray = [numbers, upperCase, lowerCase, symbols]
  var a = false;

  do {
    var length = prompt("How many characters would you like to include?");
    if (length < 8) {
      alert("Minimum length is 8");
    } else if (length > 128) {
      alert("Maximum length is 128");
    } else if (isNaN(length) === true) {
      alert("Must be a number");
    } else
      a = true;
  }
  while (a === false);

  var chooseUpperCase = confirm("Would you like to include upper case letters?");

  var chooseLowerCase = confirm("Would you like to include lower case letters?");

  var numbersOnly = confirm("Would you like to include numbers?");

  var includeSymbols = confirm("Would you like to include symbols?");

  while (chooseUpperCase === false &&
    chooseLowerCase === false &&
    includeSymbols === false &&
    numbersOnly === false) {
    alert("Must select atleast one type of character");
    chooseUpperCase = confirm("Would you like to include upper case letters?");
    chooseLowerCase = confirm("Would you like to include lower case letters?");
    includeSymbols = confirm("Would you like to include symbols?");
    numbersOnly = confirm("Would you like to include numbers?");
  }

  var chosenAnswers = {
    length: length,
    upper: chooseUpperCase,
    lower: chooseLowerCase,
    numeric: numbersOnly,
    symbol: includeSymbols
  }

  var randomPassword = [];

  if (chosenAnswers.length) {
    for (i = 0; i < length.length; i++) {
      randomPassword.push(length[i]);
    }
  }
  if (chosenAnswers.upper) {
    for (i = 0; i < upperCase.length; i++) {
      randomPassword.push(upperCase[i]);
    }
  }

  if (chosenAnswers.lower) {
    for (i = 0; i < lowerCase.length; i++) {
      randomPassword.push(lowerCase[i]);
    }
  }

  if (chosenAnswers.numeric) {
    for (i = 0; i < numbers.length; i++) {
      randomPassword.push(numbers[i]);
    }
  }

  if (chosenAnswers.symbol) {
    for (i = 0; i < symbols.length; i++) {
      randomPassword.push(symbols[i]);
    }
  }

  var newPassword = "";

  for (i = 0; i < chosenAnswers.length; i++) {
    var chosen = randomPassword[Math.floor(Math.random() * chosenAnswers.length)];
    newPassword += chosen;
  }
  return newPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
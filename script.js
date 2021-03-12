var generateBtn = document.querySelector("#generate");

var numbers = "0123456789".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*()={}[]|,.<>/?:;~`".split("");

function generatePassword() {
  //meet length criteria
  var correctAnswer = false;
  do {
    var length = prompt("How many characters would you like to include?");
    if (length < 8) {
      alert("Minimum length is 8");
    } else if (length > 128) {
      alert("Maximum length is 128");
    } else if (isNaN(length) === true) {
      alert("Must be a number");
    } else
      correctAnswer = true;
  }
  while (correctAnswer === false);


  var chooseUpperCase = confirm("Would you like to include upper case letters?");

  var chooseLowerCase = confirm("Would you like to include lower case letters?");

  var numbersOnly = confirm("Would you like to include numbers?");

  var includeSymbols = confirm("Would you like to include symbols?");
  //at lest one symbol condition
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
  //randomizing arrays for password
  var possibleCharacters = [];
  var randomPassword = [];

  function getRandom(arrayName) {
    var randomElement = arrayName[Math.floor(Math.random() * arrayName.length)];
    return randomElement;
  }
  //connecting chosen answers
  if (chosenAnswers.upper) {
    randomPassword.push(getRandom(upperCase))
    possibleCharacters = possibleCharacters.concat(upperCase)
  }

  if (chosenAnswers.lower) {
    randomPassword.push(getRandom(lowerCase))
    possibleCharacters = possibleCharacters.concat(lowerCase)
  }

  if (chosenAnswers.numeric) {
    randomPassword.push(getRandom(numbers))
    possibleCharacters = possibleCharacters.concat(numbers)
  }

  if (chosenAnswers.symbol) {
    randomPassword.push(getRandom(symbols))
    possibleCharacters = possibleCharacters.concat(symbols)
  }

  //creating new password
  var newPassword = "";

  for (var i = 0; i < chosenAnswers.length; i++) {
    var chosen = getRandom(possibleCharacters)
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
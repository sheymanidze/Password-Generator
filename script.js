var generateBtn = document.querySelector("#generate");

var numbers = "0123456789".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*()={}[]|,.<>/?:;~`".split("");
var functionsArra = [];

function generatePassword() {

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

  var possibleCharacters = [];
  var randomPassword = [];

  if (chosenAnswers.length) {
    for (i = 0; i < length.length; i++) {
      possibleCharacters += length;
      // randomPassword.push(length[i]);
    }
  }
  if (chosenAnswers.upper) {
    for (i = 0; i < upperCase.length; i++) {
      possibleCharacters += upperCase;
      // randomPassword.push(upperCase[i]);
    }
  }

  if (chosenAnswers.lower) {
    for (i = 0; i < lowerCase.length; i++) {
      possibleCharacters += lowerCase;
      // randomPassword.push(lowerCase[i]);
    }
  }

  if (chosenAnswers.numeric) {
    for (i = 0; i < numbers.length; i++) {
      possibleCharacters += numbers;
      // randomPassword.push(numbers[i]);
    }
  }

  if (chosenAnswers.symbol) {
    for (i = 0; i < symbols.length; i++) {
      possibleCharacters += symbols;
      // randomPassword.push(symbols[i]);
    }
  }

  // for each if statement I want to push in possible characters
  // for each if statement I want to guarantee one character of each type in 
  //      my password



  console.log("possibleCharacters", possibleCharacters);


  var newPassword = "";

  for (i = 0; i < chosenAnswers.length; i++) {
    var chosen = possibleCharacters[Math.floor(Math.random() * chosenAnswers.length)];
    newPassword += chosen;
    // console.log(i);
    console.log(chosen);
  }
  return newPassword;

}
var newPassword = [];
var finalPassword = newPassword.join('')





// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");
var arrayFromLowToHigh = (low, high) => {
  var array = [];
  for (i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
var numbers = arrayFromLowToHigh(48, 57);
var upperCase = arrayFromLowToHigh(65, 90);
var lowerCase = arrayFromLowToHigh(97, 122);
var symbols = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));


function generatePassword() {
  var functionsArray = [getRandomNumber(), getRandomUpper(), getRandomLower(), getRandomSymbol()]
  console.log(functionsArray)
  var a = false;
  // Get settings for generation
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

  var chosenCharacters;
  var randomPassword = [];

  // Check if chosen is upper
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
    newPassword += chosenAnswers[Math.floor(Math.random) * chosenAnswers.length];
  }
  return newPassword;

}

//generate random number, uppercase, lowercase, and symbol


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol() {
  var symbols = "!@#$%^&*()={}[]|,.<>/?:;~`"
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());

for (var i = 0; i <= length - 1; i++) {
  console.log(i);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");

var numbers = [48, 57];
var upperCase = [65, 90];
var lowerCase = [97, 122];
var symbols = [33, 47];

var functionsArray = [getRandomNumber(), getRandomUpper(), getRandomLower(), getRandomSymbol()]

console.log(functionsArray)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {


}


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

if (
  chooseUpperCase === false &&
  chooseLowerCase === false &&
  includeSymbols === false &&
  numbersOnly === false
)

  alert("Must select atleast one type of character")



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
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
console.log(getRandomSymbol());

for (var i = 0; i <= length - 1; i++) {
  console.log(i);
}

//message that tat least one type has to be selected

//prompts



//connecting trigger and numbers in a box 
// var lengthRange = document.getElementById('lengthRange');

// var lengthNumber = document.getElementById('lengthNumber');


// lengthRange.addEventListener('input', syncLength);
// lengthNumber.addEventListener('input', syncLength);

// function syncLength(e) {
//   var value = e.target.value;
//   lengthRange.value = value;
//   lengthNumber.value = value;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
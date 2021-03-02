var generateBtn = document.querySelector("#generate");

var numbers = [48, 57];
var upperCase = [65, 90];
var lowerCase = [97, 122];
var symbols = [33, 47];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
console.log(getRandomSymbol());

//connecting trigger and numbers in a box 
var lengthRange = document.getElementById('lengthRange');
console.log('range');
var lengthNumber = document.getElementById('lengthNumber');
console.log('number');

lengthRange.addEventListener('input', syncLength);
lengthNumber.addEventListener('input', syncLength);

function syncLength(e) {
  var value = e.target.value;
  lengthRange.value = value;
  lengthNumber.value = value;
}

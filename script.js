var generateBtn = document.querySelector("#generate");
var numbers = [48, 57];
var upperCase = [65, 90];
var lowerCase = [97, 122];
var symbols = [33, 47];

console.log(numbers, upperCase, lowerCase, symbols);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//connecting trigger and numbers in a box 
var lengthRange = document.getElementById('lengthRange');
console.log('range');
var lengthNumber = document.getElementById('lengthNumber');
console.log('number');

lengthRange.addEventListener('input', syncLength);
lengthNumber.addEventListener('input', syncLength);

function syncLength(event) {
  var value = event.target.value;
  lengthRange.value = value;
  lengthNumber.value = value;
}
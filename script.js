var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var selectedChars;
var passwordLength;
var usesNumbers;
var usesSpecialCharacters;
var usesUpperCase;
var usesLowerCase;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  passwordLength = prompt("Enter the desired length of your password:");
  if (!passwordLength) {
      alert("Please enter a value");
  } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a length between 8 and 128");
  } else { 
      usesNumbers = confirm("Include numbers?");
      usesSpecialCharacters = confirm("Include special characters?");
      usesUpperCase = confirm("Includes uppercase characters?"); 
      usesLowerCase = confirm("Includes lowercase characters?");
  }

  if (usesNumbers && usesSpecialCharacters && usesUpperCase && usesLowerCase) {
      selectedChars = uppercaseCharacters.concat(lowercaseCharacters, numbCharacters, specialCharacters);
  }

  for (var i = 0; i < passwordLength; i++) {
    passwordText += Math.floor(Math.random() * fullCharacterSet.length);
    passwordText[i]
  }
}

// Asks for user input on what types of characters to include
  
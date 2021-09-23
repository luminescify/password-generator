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
var password;
var passwordText;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Add event listener to generate button
generateBtn.addEventListener("click", function writePassword() {
      password = generatePassword();
      passwordText = document.querySelector("#password");

  passwordText.value = password;
});


function generatePassword() {
  passwordLength = parseInt(prompt("Enter the desired length of your password:"));
  if (!passwordLength) {
      alert("Please enter a value.");
  } else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = parseInt(alert("Please choose a length between 8 and 128"));
  } else { 
      usesNumbers = confirm("Include numbers?");
      usesSpecialCharacters = confirm("Include special characters?");
      usesUpperCase = confirm("Includes uppercase characters?"); 
      usesLowerCase = confirm("Includes lowercase characters?");
  }

  // If no options are chosen...
  if (!usesSpecialCharacters && !usesNumbers && !usesUpperCase && !usesLowerCase) {
    selectedChars = alert("You must choose at least one character type.");
  }

  // All selected options
  else if (usesSpecialCharacters && usesNumbers && usesUpperCase && usesLowerCase) {
    selectedChars = specialCharacters.concat(numbCharacters, lowercaseCharacters, uppercaseCharacters);
  }

  // Three selected options
  else if (usesSpecialCharacters && usesNumbers && usesUpperCase) {
    selectedChars = specialCharacters.concat(numbCharacters, uppercaseCharacters);
  }
  else if (usesSpecialCharacters && usesNumbers && usesLowerCase) {
    selectedChars = specialCharacters.concat(numbCharacters, lowercaseCharacters);
  }
  else if (usesSpecialCharacters && usesLowerCase && usesUpperCase) {
    selectedChars = specialCharacters.concat(lowercaseCharacters, uppercaseCharacters);
  }
  else if (usesNumbers && usesLowerCase && usesUpperCase) {
    selectedChars = numbCharacters.concat(lowercaseCharacters, uppercaseCharacters);
  }

  // Two selected options
  else if (usesSpecialCharacters && usesNumbers) {
    selectedChars = specialCharacters.concat(numbCharacters);
  } 
  else if (usesSpecialCharacters && usesLowerCase) {
    selectedChars = specialCharacters.concat(lowercaseCharacters);
  } 
  else if (usesSpecialCharacters && usesUpperCase) {
    selectedChars = specialCharacters.concat(uppercaseCharacters);
  }
  else if (usesLowerCase && usesNumbers) {
    selectedChars = lowercaseCharacters.concat(numbCharacters);
  } 
  else if (usesLowerCase && usesUpperCase) {
    selectedChars = lowercaseCharacters.concat(uppercaseCharacters);
  } 
  else if (usesNumbers && usesUpperCase) {
    selectedChars = numbCharacters.concat(uppercaseCharacters);
  }

  // One selected option
  else if (usesSpecialCharacters) {
    selectedChars = specialCharacters;
  }
  else if (usesNumbers) {
    selectedChars = numbCharacters;
  }
  else if (usesLowerCase) {
    selectedChars = usesLowerCase;
}
  else if (usesUpperCase) {
    selectedChars = uppercaseCharacters;
  }


  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var passwordText = selectedChars[Math.floor(Math.random() * selectedChars.length)];
    password.push(passwordText.value);
  }
} 
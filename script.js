// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  var passwordText = document.querySelector("#password");

  // I added this
  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialChar = "!@#$%^&*()_+{}";
  var passwordLength = "";
  var finalChar = "";
  var password = ""
  // 

function writePassword() {
// The code that I wrote

// choosing password length
  let userInput= prompt("How long do you want your password to be? Choose between 8 to 128 characters."); 
  passLength = parseInt(userInput);
  console.log(passLength);

  if(isNaN(passLength)) {
    alert("Please enter a number!")
    return;
  } else if (8 <= passLength && passLength <= 128) {
    passwordLength = passLength;
  } else {
    do {
      alert("Please enter a valid length")
      passLength= prompt("How long do you want your password to be? Choose between 8 to 128 characters.");
    } while (8 >= passLength || passLength >= 128);
    passwordLength = passLength;
  }

// deciding if they want numbers 
  let nums = confirm("Do you want to use numbers in your password?");
  if (nums == true) {
    finalChar += numbers;
    console.log(finalChar);
  }
// deciding if the want lower case
  let lower = confirm("Do you want to use lowercase in your password?");
  if (lower == true) {
    finalChar += lowerCase;
    console.log(finalChar);
  }
// deciding if they want upper case
  let upper = confirm("Do you want to use uppercase in your password?");
  if (upper == true) {
    finalChar += upperCase;
    console.log(finalChar);
  }
// deciding if they want special characters
  let special = confirm("Do you want to use special characters in your password?");
  if (special == true) {
    finalChar += specialChar;
    console.log(finalChar);
  }
// checking to see if at least one character type will be used
  if (finalChar === "") {
    alert("Please select at least one character type!");
    return;
  }

  // generate password with for loop using global and local vars
  for (var i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * finalChar.length);
    password += finalChar.substring(randomNumber, randomNumber + 1);
  }

  passwordText.value = password;
  console.log(password);
  console.log(password.length)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

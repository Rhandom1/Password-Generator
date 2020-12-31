// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable Arrays for character confirmation
var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Criteria options
var confirmLength;
var confirmSpecialChar;
var confirmNumber;
var confirmUpper;
var confirmLower;

// parseInt

function userOptions () {
  var confirmLength = parseInt(prompt("Your password must be between 8 and 128 characters. Please enter a whole number to set the length of your password."));
   
// break into separate
// Confirm number
// adding return ends the function

  
  // Once length is confirmed, user can add criteria
  // making a confirm as a var will hold the response
   
     confirmUpper = confirm("Do you wish to include Uppercase letters? Click OK to confirm.");
     confirmLower = confirm("Do you wish to include Lowercase letters? Click OK to confirm.");
     confirmNumber = confirm("Do you wish to include Numbers? Click OK to confirm.");
     confirmSpecialChar = confirm("Do you wish to include Special Characters such as '!' or '%'? Click OK to confirm.");
   

  //  Need more else/if for no choice? Can the confirm option be greyed out until a choice is made?
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecialChar) {
    alert("You must select at least one criteria option. For the highest security, select all four options.");
    return
    }
// Object for choice combination
    var userChoices = {
      confirmLength:confirmLength,
      confirmUpper:confirmUpper,
      confirmLower:confirmLower,
      confirmNumber:confirmNumber,
      confirmSpecialChar:confirmSpecialChar,
    }
    return userChoices
  }   

  // function is created to call randomly pull a character from the arrays


// 3 arrays 1- for password 2- for chosen char 3- characters to include


// use . to get to an objects properties
// make an if statement for each character option
 
// created the loop to check length. If greater than zero keep checking
 
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable Arrays for character confirmation
var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var confirmLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpper;
var confirmLower;

// A seperate variable to begin the user query?
var get = document.querySelector(#generate);

// Do we need a seperate event?

// It seems we need to write out the generatePassword function to be called below? 
// First prompt is to set the length. Recalling comfirm variable?
function generatePassword() {
  var confirmLength = (prompt("Your password must be between 8 and 128 characters. Please enter a whole number to set teh length of your password."));
   }

   If (confirmLength > 8 || confirmLength < 128) {
     alert("Please enter a number between 8 and 128.");
   }
   else {
     confirmUpper = confirm("Do you wish to include Uppercase letters?");
     confirmLower = confirm("Do you wish to include Lowercase letters?");
     confirmNumber = confirm("Do you wish to include Numbers?");
     confirmSpecialChar = confirm("Do you wish to include Special Characters such as '!' or '%'");
   };

  //  Need more else/if for no choice? Can the confirm option be greyed out until a choice is made?
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecialChar) {
    alert("You must select at least one criteria option. For the highest security, select all four options.")
  }

  // How do we combine the criteria options? 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

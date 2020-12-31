// line 25
 if (isNaN(confirmLength) === true) {
    alert("Please choose a valid number.");
    return 
  }
  if (confirmLength < 8) {
    alert("Please enter a number greater than 8.");
    return
  }
  if (confirmLength > 128) {
    alert("Please enter a number less than 128.");
    return
  }

// line 53
  function randomChar(array) {
    var index = Math.floor(Math.random() * array.length);
    var element = array[index];
  
    return element;
  }

//   line 56
  function generatePassword() {
    var userChoices = userOptions();
    console.log(userChoices)
  
    var password = [];
    var chosenChar = [];
    var charsInc = [];

// line 80
    for(var i=0; i < userChoices.confirmLength; i++) {
        var possibleChar = randomChar(charsInc);
        password.push(possibleChar);
      }
    
      for(var i=0; i < chosenChar.length; i++) {
        password[i] = chosenChar[i];
      }
    
      return password.join(" ");

      if (userChoices.confirmSpecialChar) {
        charsInc = charsInc.concat(specialChar);
        chosenChar.push(randomChar(specialChar));
      }
    
    //   line 60
      if (userChoices.confirmNumber) {
        charsInc = charsInc.concat(number);
        chosenChar.push(randomChar(number));
      }
    
      if (userChoices.confirmUpper) {
        charsInc = charsInc.concat(allUpper);
        chosenChar.push(randomChar(allUpper));
      }
    
      if (userChoices.confirmLower) {
        charsInc = charsInc.concat(allLower);
        chosenChar.push(randomChar(allLower));
      }
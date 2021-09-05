// Assignment code here

// Ask for character length
    var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));
   
// Ask for which character type 
    var inputType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

// Generate Password
    function generatepassword() {
// Look at the charType
      var inputSet = "";
      var inputTypelower = inputType.toLowerCase();
    if( inputTypelower === "lowercase" ) {
          inputSet = "abcdefghijklmnopqrstuvwxyz" }

        else if (inputTypelower === "uppercase" ) {
          inputSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }

        else if (inputTypelower === "numberic"){
          inputSet = "1234567890";}

        else if (inputTypelower === "special"){
          inputSet  = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
        }
        
     
  // Return the input
    var returnVal = "";
      for (var i = 0; i < length; i++) {
  // Picks a value then randomizes 
      returnVal += inputSet.charAt(Math.floor(Math.random() * inputSet.length));
      }
      return returnVal;
  }

    alert(generatepassword());
   
// Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
    var password = generatepassword();
    var passwordText = document.querySelector("#password");

      passwordText.value = password;

}

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
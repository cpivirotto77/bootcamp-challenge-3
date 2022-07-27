var arrChoice = [];
var characterLength = 8;

var specialCharacter = ["!","@","#","$","%","^","&","*","(",")",")","+","=","_","-","<",">"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0",];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var aPassword = generatePassword();
      passwordText.value = aPassword;
 
    } else {
      passwordText.value = "";
    }

  }

 

function generatePassword(){

    var password = "";
    for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * arrChoice.length)
     password = password + arrChoice[randomIndex];
}
return password;
}

function getPrompts() {
  
  arrChoice = [];
  
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 32 characters"));
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 32){
  alert("Character length has to be a number.");
  return false;
  
}if (confirm("Would you like lowercase letters?")) {
  arrChoice = arrChoice.concat(lowerCase);

}if (confirm("Would you like uppercase letters?")) {
  arrChoice = arrChoice.concat(upperCase);

}if (confirm("Would you like special characters?")) {
  arrChoice = arrChoice.concat(specialCharacter);

}if (confirm("Would you like numbers?")) {
  arrChoice = arrChoice.concat(number);}

return true;
}


  











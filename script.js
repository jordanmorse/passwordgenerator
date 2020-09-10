// defining variables and arrays

var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialChar = ["!", "#", "$", "%", "&", "'", ")", "(", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

var numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var empty = [];

var newPass = "";

//function to determine the specifics of the password as indicated by the user

function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to have?"));

  if (length < 8) {
    alert("Your password must be at least 8 characters.");
    return
  }

  if (length > 128) {
    alert("Your password must be less than 128 characters.");
    return
  }

  if (isNaN(length) === true) {
    alert("Your answer must be a number."); 
    return 
  }
  
  var characters = confirm("Do you want to include special characters?");

  var capital = confirm("Do you want to include uppercase letters?");

  var lower = confirm("Do you want to include lowercase letters?");

  var num = confirm("Do you want to include numbers?");

  if (!characters && !capital && !lower && !num) {
    alert("You have to pick at least one option.");
    return
  }

//object properties can be written this way because key=variable value (not always)
  var passwordOptions = {
    characters,
    capital,
    lower,
    num,
    length,
  }
  return passwordOptions;
}

function getRandom() {
  return Math.floor(Math.random() * Math.floor(empty.length));
}

function generatePassword() {

  newPass = ""

  var options = getPasswordOptions();
  console.log(options);
  
  if (options.capital) {
    empty = empty.concat(upperCase);
  }
  if (options.lower) {
    empty = empty.concat(lowerCase);
  }
  if (options.num) {
    empty = empty.concat(numOptions);
  }
  if (options.characters) {
    empty = empty.concat(specialChar);
  }
  for (let i = 0; i < options.length; i++) {
    var newChar = empty[getRandom()];
    newPass += newChar; 
  }
  return newPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



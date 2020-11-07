// Assignment Code

// Questions
var inputupper = confirm('Would you like uppercase letters?');
var inputlower = confirm('Would you like lowercase letters?');
var inputsymbols = confirm('Would you like symbols?');
var inputnumbers = confirm('Would you like numbers?');
var getlength = prompt('How long would you like password?');

// basically combining the gen functions below
const randomfunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  symbols: getRandomSymbols,
  numbers: getRandomNumbers,
  
};


// generating password function

function generatePassword(upper, lower, numbers, symbols, length) {
  
  let createdpassword ="";

  const typesCount = upper + lower + numbers + symbols + length;



  const typesArr = [{upper}, {lower}, {numbers}, {symbols}, {length}].filter
  (
    item => Object.values(item)[0]
  );

  // console.log('typesArr: ', typesArr);

  if(types ===0) {
    return "";
  }


  for (let i = 0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      createdpassword += randomfunc[funcName]();
    });
  }

  console.log(createdpassword);
  
}

// these functions current gens randoms
// used if/else to filter confirms
function getRandomUpper () {


  if (inputupper === true) {
    const inputupper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return inputupper[Math.floor(Math.random() * inputupper.length)];
  } else {
    return "";
  }
   
}
function getRandomLower () {
  if (inputlower === true) {
    const inputlower = 'abcdefghijklmnopqrstuvwxyz';
    return inputlower[Math.floor(Math.random() * inputlower.length)];
  } else {
    return "";
  }
}
function getRandomSymbols () {
  if (inputsymbols === true) {
    const inputsymbols = '!@#$%^&*()';
    return inputsymbols[Math.floor(Math.random() * inputsymbols.length)];
  } else {
    return "";
  }
}
function getRandomNumbers () {
  if (inputnumbers === true) {
  const inputnumbers = '1234567890';
  return inputnumbers[Math.floor(Math.random() * inputnumbers.length)];
  } else {
    return "";
  }
}

// checking to see if getRandom function worked correctly
// console.log(getRandomUpper());
// console.log(getRandomLower());
// console.log(getRandomSymbols());
// console.log(getRandomNumbers());



// the button
var generateBtn = document.querySelector("#generate");




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment Code

// Questions
var inputupper = confirm('Would you like uppercase letters?')
var inputlower = confirm('Would you like lowercase letters?')
var inputsymbols = confirm('Would you like symbols?')
var inputnumbers = confirm('Would you like numbers?')
var getlength = prompt(
  'How many characters would you like your password to have?'
)
function generatePassword(len, upper, lower, symbols, numbers) {
  var length = len
  let upperAlpha = upper ? 'abcdefghijklmnopqrstuvwxyz'.toUpperCase() : ''
  let lowerAlpha = lower ? 'abcdefghijklmnopqrstuvwxyz' : ''
  let finalSymbols = symbols ? '!@#$%^&*()' : ''
  let finalNumbers = numbers ? '0123456789' : ''
  charset = lowerAlpha + upperAlpha + finalSymbols + finalNumbers
  console.log('charset', charset)
  retVal = ''

  
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  console.log('swann done', retVal)
  return retVal
}
// // the button
var generateBtn = document.querySelector('#generate')
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
function writePassword() {
  var password = generatePassword(
    getlength,
    inputupper,
    inputlower,
    inputsymbols,
    inputnumbers
  )
  var passwordText = document.querySelector('#password')
  passwordText.value = password
}

// basically combining the gen functions below
// const randomfunc = {
//   upper: getRandomUpper,
//   lower: getRandomLower,
//   symbols: getRandomSymbols,
//   numbers: getRandomNumbers
// };
// // console.log(randomfunc)

// // generating password function

// function generatePassword(upper, lower, numbers, symbols, getlength) {
//   // dynamically creating password
//   let createdpassword ="";
//   const typesCount = upper + lower + numbers + symbols + getlength;
//   const typesArr = [{upper}, {lower}, {numbers}, {symbols}, {getlength}].filter
//   (
//     item => Object.values(item)[0]
//   );

//   // console.log('typesArr: ', typesArr);
//   // if(typesCount ===0) {
//   //   return "";
//   // }


//   // for (let i = 0; i < length; i+= typesCount) {
//   //   typesArr.forEach(type => {
//   //     const funcName = Object.keys(type)[0];

//   //     createdpassword += randomfunc[funcName]();
//   //   });
//   // }

//   // console.log(createdpassword);
  
// }

// // these functions current gens randoms
// // used if/else to filter confirms

// // for loop to create random upper case
// function getRandomUpper () {
//   if (inputupper === true) {
//     const inputupper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     return inputupper[Math.floor(Math.random() * inputupper.length)];
//   } else {
//     return "";
//   }

// }

// // for loop to create random lower case
// function getRandomLower () {
//   if (inputlower === true) {
//     const inputlower = 'abcdefghijklmnopqrstuvwxyz';
//     return inputlower[Math.floor(Math.random() * inputlower.length)];
//   } else {
//     return "";
//   }
  
// }

// // for loop to create random symbol
// function getRandomSymbols () {
//   if (inputsymbols === true) {
//     const inputsymbols = '!@#$%^&*()';
//     return inputsymbols[Math.floor(Math.random() * inputsymbols.length)];
//   } else {
//     return "";
//   }
// }
// // for loop to create random numerics
// function getRandomNumbers () {
//   if (inputnumbers === true) {
//   const inputnumbers = '1234567890';
//   return inputnumbers[Math.floor(Math.random() * inputnumbers.length)];
//   } else {
//     return "";
//   }
// }

// // checking to see if getRandom function worked correctly
// console.log(getRandomUpper());
// console.log(getRandomLower());
// console.log(getRandomSymbols());
// console.log(getRandomNumbers());



// // the button
// var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); 

// function writePassword(upper, lower, numbers, symbols, getlength) {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

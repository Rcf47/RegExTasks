//1. Write a JavaScript program to test whether the first character of a string is uppercase or not.



let { text1, text2, text3, textArray } = require('./dataText.cjs')
let regEx = /^[A-Z]/
let string = 'hello World'
function isUppercase(text) {
  return regEx.test(text)
}

if (isUppercase(text1)) {
  console.log(`result is true `, text1)
} else {
  console.log(`result is false`)
}

module.exports = isUppercase

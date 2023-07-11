// 2. Write a JavaScript program to check a credit card number.


let { creditCard } = require("./dataText.cjs")

console.log(creditCard)
let regEx = /\b\d{4}\b\s\d{4}\s\d{4}\s\b\d{4}\b/


let result = regEx.test(creditCard)

console.log(result)



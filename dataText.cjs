let dataJson = require("./examples.json")
let examples = Object.values(dataJson)
let [text1, text2, text3, textArray, creditCard] = examples

module.exports = { text1, text2, text3, textArray, creditCard }

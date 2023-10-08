function myAtoi(s) {
  const match = s.trim().match(/^(\-|\+)?\d+/)
  if (!match) {
    return 0
  }
  let result = Number(match[0])
  return result
}

const string1 = "word hello 324"
const string2 = "42"
const string3 = "2345 words here"
console.log(myAtoi(string1))
console.log(myAtoi(string2))
console.log(myAtoi(string3))

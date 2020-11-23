// block-scope
let value = 1

if(true) {
  value = 2
  console.log("Value", value)
}

console.log("Value", value)



// global
if(true) {
  var value2 = 1
  value2 = 2
  console.log("Inner Value2", value2)
}

console.log("Value2", value2)
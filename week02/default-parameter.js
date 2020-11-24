function sum(val1, val2 = 0, val3 = 0){
  console.log("passing value",val1, val2, val3);
  return val1 + val2 + val3;
}

console.log(sum(1,2,3))
console.log(sum(1));
console.log(sum(2,3));
console.log("undefined=>", sum(1, undefined))
console.log("Null=>", sum(1, "null"))
console.log("Null2=>", sum("1", null, null))
console.log("Null2=>", sum("1", undefined, undefined))
console.log("Null2=>", sum("1", null, undefined))
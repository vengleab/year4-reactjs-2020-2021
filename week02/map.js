const dict = new Map();

dict.set("Apple", "It is a fruit");
dict.set("Apple Inc.", "A company located at USA");

const dictObj = {
  "Apple": "It is a fruit",
  "Apple Inc.": "A company located at USA"
}
// console.log(dict)

console.log(dict.get("Apple"))
console.log(dict.size)
console.log(dict.values())
// get object property
console.log(dictObj["Apple"])
console.log(dictObj.Apple)
console.log(dictObj.length);
console.log(Object.keys(dictObj).length);

// array
const data = [];
data.push("data")
data.push("data")
data.push(1)
data.push(2)
data.push("data")
console.log()
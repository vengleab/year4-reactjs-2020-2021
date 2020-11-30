// function range(start, end, step = 1) {
//   let arr = [];
//   for(let i = start; i <= end; i+= step) {
//     arr.push(i);
//   }
//   return arr;
// }
function *range(start, end, step = 1){
  for(let i=start; i<=end; i+=step) {
    yield i;
  }
}

const generator = range(1, 100, 1);
const arr = [];
for(let result of generator) {
  arr.push(result);
}

// console.log("1. ", generator.next().value)
// console.log("2.", generator.next().value)
// console.log("3.",generator.next().value)
// console.log("4.",generator.next().value)
// console.log("5.",generator.next().value)
// console.log("6.",generator.next().value)
// console.log("7.",generator.next().value)
// console.log("8.",generator.next().value)
// console.log("9.",generator.next().value)
// console.log("10.",generator.next())
// console.log("No more value: ",generator.next())
// console.log("No more value: ",generator.next())

console.log(arr);

function *bulkProcess(records){
  let data = [];
  for(let i=0; i<records.length; i++){
    data.push(records[i]);
    if(i%10==9){
      // return n batch data
      yield data;
      data = []
    }
  }
  
}

const bulkProcessGenerator = bulkProcess(arr);

console.log("First bulk",bulkProcessGenerator.next().value);
console.log("Second bulk",bulkProcessGenerator.next().value);
console.log("Third bulk",bulkProcessGenerator.next().value);
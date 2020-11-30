let sum = 3;

function setSum(arg) {
  console.log("Setting sum value");
  sum = arg;
}
// synchronous: execute code line by line
// asynchronous:in js, it is an async
// support this method is created by react
function newSetSum(arg, callback = () => {}) {
  setTimeout(() => {
    setSum(arg);
    callback();
  }, 100);
}

function promiseNewSetSum(arg) {
  return new Promise((resolve, reject) => {
    newSetSum(arg, () => {
      resolve();
    });
  });
}

// async function asyncFunction (){
//   await promiseNewSetSum();
// }


setSum(4);
console.log("Call set sum", sum);

// newSetSum(100, () => {
//   console.log("Callback of set sum:", sum);
//   newSetSum(200, ()=> {
//     console.log("Callback of set sum:", sum);
//     newSetSum(300, ()=> {
//       console.log("Callback of set sum:", sum);
//       newSetSum(400, ()=>{
//         console.log("Callback of set sum:", sum);
//       })
//     })
//   })
// });
console.log("Call newSetSum:", sum);


async function executeCode(){
  console.log("=======  run with promise ========")
  await promiseNewSetSum(100).then(()=>{
    console.log("Callback of set sum:", sum);
    return promiseNewSetSum(200);
  }).then(()=>{
    console.log("Callback of set sum:", sum);
    return promiseNewSetSum(300);
  }).then(()=>{
    console.log("Callback of set sum:", sum);
    return promiseNewSetSum(400);
  }).then(()=>{
    console.log("Callback of set sum:", sum);
  })
  
  console.log("=======  run with async / await ========")
  await promiseNewSetSum(100).then(async ()=>{
    console.log("Callback of set sum:", sum);
    await promiseNewSetSum(200);
    console.log("Callback of set sum:", sum);
    await promiseNewSetSum(300);
    console.log("Callback of set sum:", sum);
    await promiseNewSetSum(400);
    console.log("Callback of set sum:", sum);
  })
}
executeCode();

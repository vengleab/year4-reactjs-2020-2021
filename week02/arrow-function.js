function print(msg) {
  console.log(msg)
}

// const print = (msg) => {
//   console.log(msg);
// }

const print = msg => {
  console.log(msg);
  console.log("testing");
}

const print = msg => console.log(msg)

// const print = console.log;

// function print2(msg, msg2) {
//   console.log(msg, msg2)
// }
const print2 = (msg, msg2) => console.log(msg, msg2);


print("Hello world");
print2("value1", "value1");

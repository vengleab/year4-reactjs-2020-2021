// const: cannot reassign value
const value = "Hello world";
//value = "new value"; cannot reassign value
console.log(value);

// let: can reassign value
let value2 = "Hello"
console.log("Value2:", value2);

value2 = "World"
console.log("Value2:", value2);

const student = {
  name: 'Student A',
  age: 1
};
console.log("Student A",student)

// student = {
//   name: "Student",
//   age: 2
// };
// student.age = 2
// student.name = "Student"
Object.assign(student, { name: "Student B", age: 2})

console.log("New Student A",student)


const student = {
  name: "Student 1",
  age: 28
}

// console.log("My name is " + student.name + ", " + student.age + " years old." )

// console.log(`My name is ${student.name}, ${student.age} years old.`)

printInfo(student);
console.log("testing")
function printInfo(stu) {
  console.log(`My name is ${stu.name}, ${stu.age} years old.`)
}

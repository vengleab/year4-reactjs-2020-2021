const student = {name: "Student 1", age: 20}
const student2 = {class: "Y4"}
const mergeStudent = { ...student, ...student2 };
const student3 = { ...student, class: "Y5", age: 11 }
console.log("merge:",mergeStudent);
console.log("student3:",student3);

const stus =  [student, student2];
const stus2 = [...stus, {name: 'Student2'}]
const stus3 = [...stus, ...stus2 ]

console.log("Stus2", stus2);
console.log("Stus3", stus3);


function print(...stus) {
  console.log("print stus",stus)
}

print(stus, stus, stus)
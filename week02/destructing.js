const fruit = ["Apple", "Banana", "Cat"];

let [abc,   ,def] = fruit;
console.log("Value a,b", abc,def);

const student = { name: "Student 1", age: 28};
let { name } = student;
//let name = student.name;
console.log("Name: ",name);

const students = [{ name: "Student 1", age: 28}, { name: "Student 2", age: 28}];
let [stu1, stu2 ={ name: "None"}, stu3 = { name: "None"}] = students;
let { name: stu1Name } = stu1;
//let stu1Name = students[0].name

console.log("student1",stu1Name);
console.log("stu2",stu2);
console.log("stu3",stu3);

function print({name, age}){
  console.log("Print student:",name, "age:", age);
}

print(stu1);
print(1);

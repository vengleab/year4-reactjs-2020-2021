const fruit = new Set();
const student = { name: "Student 1", age: 20};


fruit.add("Apple");
fruit.add("Banana");
fruit.add("Banana");
fruit.add("Banana");
fruit.add("BAnana");
fruit.add(1);
fruit.add(2);
fruit.add("2");
// fruit.add({ name: "Student 1", age: 20})
// fruit.add({ name: "Student 1", age: 20})
// fruit.add({ name: "Student 1", age: 20})
fruit.add(student)
fruit.add(student)
fruit.add(student)


console.log(fruit);
console.log("has apple",fruit.has("Apple"))
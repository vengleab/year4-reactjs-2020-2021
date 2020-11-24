class Person {
  leg = 2;
  arm = 2;

  constructor(name){
    this.name = name;
  }

  talk() {
    console.log(`${this.name} is talking`);
  }
}

const person1 = new Person("Veasna");
person1.talk()

const person2 = new Person("Sambath");
person2.talk()

class Sambo extends Person {
  talk() {
    console.log("Sambo is taking");
  }
}

const person3 = new Sambo()
person3.talk()


'use strict'; //node person

class Person{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  toString() {
    return `${this.firstName} ${this.lastName}`;
  }
  get fullName() {
    return this.toString();
  }
} //end of the class

class Agent extends Person {
  constructor(firstName, lastName, number){
    super(firstName, lastName);
    this.number = number;
  }
  toString() {
    return `I'm ${this.number}.` +
    `My name is ${this.lastName}, ${super.toString()}`;
    // return `I'm ${this.number}.\ My name is ${this.lastName}, ${super.toString()}`; //Same thing with \
  }
}

let agent001 = new Agent('Leia','Organa','001');
console.log(agent001.fullName);
console.log(agent001.toString());

let persons = [new Person('Admiral','Ackbar'), agent001];

for(let person of persons) {
  console.log(person.toString());
}

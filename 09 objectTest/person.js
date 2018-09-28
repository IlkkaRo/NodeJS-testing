'use strict'; //node person

class Person{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  toString() {
    return `${this.firstName} ${this.lastName}`;
  }
  getAgent() {
    // return `My name is ${this.lastName}, ${this.firstName} ${this.lastName}`;
    return `My name is ${this.lastName}, ${this.toString()}`;
  }
  get fullName() {
    return this.toString();
  }
  get keys() {
    return Object.keys(this);
  }
} //end of the class

let personA = new Person('Leia', 'Organa');
console.log(personA);
let personB = new Person('Luke', 'Skywalker');
console.log(personB);

console.log('firstName: ', personA.firstName);
console.log('firstName: ', personB['firstName']);

console.log(personA.toString());
console.log(personB.toString());

console.log(personA.fullName);

console.log(personA.getAgent());

console.log('#### Active agents: ####');
let personArray = [personA, personB, new Person('Darth','Vader')];
for(let person of personArray) {
  console.log(person.getAgent());
}

personB.hasAdog=true;
console.log(personB);
console.log(personB.keys);

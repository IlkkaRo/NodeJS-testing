let testobject = {}; //node index
console.log('--1--');
console.log(testobject);

testobject['name']='Leia';
console.log('--2--');
console.log(testobject);

testobject['age']=100;
console.log('--3--');
console.log(testobject);

for(let key in testobject) {
  console.log('--4--');
  console.log(key, testobject[key]);
}

console.log('--5--');
console.log(Object.keys(testobject));

console.log('--6--');
let keys = Object.keys(testobject);
for(let key of keys) {
  console.log(key);
}

console.log('--7--');
for(let i=0; i<keys.length; i++) {
  console.log(keys[i]);
}

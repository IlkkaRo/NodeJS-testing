const dudes = require('./dudes.json');

for(let dude of dudes) {
  console.log(dude.lastName);
}

console.log('########');
for(let i=0; i<dudes.length; i++;) {
  console.log(dudes[i].firstName)
}

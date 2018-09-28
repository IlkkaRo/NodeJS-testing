// function konsoli() {
//   return console.log;
// }
//
// konsoli()(testaus);

//or

function testi(value,ms,callback) {
  setTimeout(()=>callback(value),ms);
}

function testi2(a) {
  console.log(a);
}

function testi3(b) {
  console.log(`testi3: ${b}`);
}
testi('aaaaa',2000,testi2);
console.log('abababa');
testi('bbbbb',1000,testi3);

// node test

// console.log("this is a test".split(' '))
// console.log("this is a test".split('i'))
// console.log("this is a test".split('i').join('i'))
// console.log('/api/blueberry'.split('/'))

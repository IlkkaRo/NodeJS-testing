'use strict';
/* eslint-disable no-console */

const Card = require('./card');
const Suite = require('./suite');
const Deck = require('./deck');
const Hand = require('./hand');

let deck = Deck.createDeck();
console.log(deck.toString());
console.log('/n#############/n');
deck.shuffle();
console.log(deck.toString());
let myCards = new Hand();
// console.log(`MyHand: ${myCards}`);
// myCards.addCard(deck.takeCard());
// console.log(`MyHand: ${myCards}`);
// myCards.addCard(deck.takeCard());
console.log(`MyHand: ${myCards}`);
for(let i=0; i<5; i++) {
  myCards.addCard(deck.takeCard());
}
console.log(`MyHand: ${myCards} sum=${myCards.sum}`);

// console.log('&&&&&&&&&&& DOUBLE TROUBLE &&&&&&&&&&&');
// let doubleDeck = Deck.createDeck();
// doubleDeck.addDeck(Deck.createDeck());
// console.log(doubleDeck.toString());

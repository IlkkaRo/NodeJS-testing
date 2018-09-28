'use strict';
/* eslint-disable no-console */

const Card = require('./card');
const Suite = require('./suite');
const Deck = require('./deck');

let deck = Deck.createDeck();
console.log(deck.toString());
console.log('/n#############/n');
deck.shuffle();
console.log(deck.toString());

console.log('&&&&&&&&&&& DOUBLE TROUBLE &&&&&&&&&&&');
let doubleDeck = Deck.createDeck();
doubleDeck.addDeck(Deck.createDeck());
console.log(doubleDeck.toString());

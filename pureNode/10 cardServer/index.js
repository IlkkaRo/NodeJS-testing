'use strict';
/* eslint-disable no-console */

const Suite = require('./suite.js');
const Card = require('./card.js');
const Deck = require('./deck.js');

// These are moved inside the Suite class

// let spades = new Suite('spades', Suite.SYMBOL.SPADES_SYMBOL, Suite.COLOR.BLACK);
// console.log(spades.toString());
// let clubs = new Suite('clubs', Suite.SYMBOL.CLUBS_SYMBOL, Suite.COLOR.BLACK);
// console.log(clubs.toString());
// let hearts = new Suite('hearts', Suite.SYMBOL.HEARTS_SYMBOL, Suite.COLOR.RED);
// console.log(hearts.toString());
// let diamonds = new Suite('diamonds', Suite.SYMBOL.DIAMONDS_SYMBOL, Suite.COLOR.RED);
// console.log(diamonds.toString());

let cardA = new Card(Suite.SPADES,1);
let cardB = new Card(Suite.HEARTS,12);
console.log(cardA.toString());
console.log(cardB.toString());

let deck = new Deck();
deck.addCard(cardA);
deck.addCard(cardB);
console.log(`Deck: ${deck}`);
console.log('Deck:', deck.toString());

// Suite.SPADES.name = 'jotain muuta'; //freeze prevents this
// Suite.HEARTS.symbol = Suite.CLUBS.symbol //this too
console.log(Suite.SPADES===Suite.SPADES);
console.log(Suite.SPADES.name);

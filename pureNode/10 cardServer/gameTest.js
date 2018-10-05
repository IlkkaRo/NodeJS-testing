'use strict';

const Deck = require('./deck');
const Hand = require('./hand');

class Player{
  constructor(name, hand = new Hand()) {
    this.name = name;
    this.hand = hand;
  }
  toString() {
    return `Player ${this.name} had hand ${this.hand}. Sum=${this.hand.sum}`;
  }
} //end of Player class

const players = new Map();
players.set('Leia', new Player('Leia'));
players.set('Luke', new Player('Luke'));

let deck = Deck.createDeck();
deck.shuffle();

let leia = players.get('Leia');
leia.hand.addCard(deck.takeCard());

let luke = players.get('Luke');
luke.hand.addCard(deck.takeCard());

for(let player of players.values()) {
  console.log(`${player}`);
}

for(let i=0; i<6;i++)
  for(let player of players.values()) {
    player.hand.addCard(deck.takeCard());
  }

for(let player of players.values()) {
  console.log(`${player}`);
}

if(leia.hand.sum>luke.hand.sum){
  console.log('Leia won!');
} else if(luke.hand.sum>leia.hand.sum) {
  console.log('Luke won! Power is strong in this one.')
} else {
  console.log('Draw, whaaaat???')
}

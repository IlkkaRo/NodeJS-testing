'use strict';

const Card = require('./card');
const Suite = require('./suite');

module.exports = class Deck {
  constructor() {
    this.deck = [];
  }

  addCard(newCard){
    this.deck.push(newCard);
  }

  takeCard() {
    return this.deck.pop();
  }

  clear() {
    this.deck.length = 0;
  }

  shuffle() {
    if(this.deck.length < 2) {
      return;
    } else {
      for(let i=0; i<this.deck.length; i++){
        let indA = randomNumber(this.deck.length);
        let indB = randomNumber(this.deck.length);
        [this.deck[indA], this.deck[indB]] = [this.deck[indB], this.deck[indA]]; //destructuring assignment !!!
        //let tmp = this.deck[indA];
        //this.deck[indA]=this.deck[indB];
        //this.deck[indB]=tmp <===same thing, old way
      }
    }
  }

  static createDeck() {
    let tmpDeck = new Deck();
    for(let i = 1; i <= 13; i++) {
      tmpDeck.addCard(new Card(Suite.HEARTS, i));
      tmpDeck.addCard(new Card(Suite.DIAMONDS, i));
      tmpDeck.addCard(new Card(Suite.SPADES, i));
      tmpDeck.addCard(new Card(Suite.CLUBS, i));
    }
    return tmpDeck;
  }

  addDeck(newDeck) {
    this.deck = this.deck.concat(newDeck);
  }

  toString() {
    return this.deck.map(card=>card.toString()).join(', ');
  }
};

//return integer 0 <= random < upperLimit, can use Math.floor or .ceil
function randomNumber(upperLimit) {
  let rand = Math.random();
  return parseInt(upperLimit * rand ,10);
}

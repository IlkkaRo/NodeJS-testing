'use strict';

const Deck = require('./deck');

module.exports = class Hand extends Deck {
  constructor() { //not necessary
    super(); //will be called automatically
  }

  sorter(cardA, cardB) {
    return cardA.rank-cardB.rank;
  }
  sort(ascending=true) {
    this.deck.sort(Hand.sorter);
    if(!ascending) {
      this.deck.reverse();
    }
  }
}

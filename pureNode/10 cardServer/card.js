'use strict';

module.exports = class Card{
  constructor(suite, rank) {
    this.suite = suite;
    this.rank = rank;
    this.isAce = (rank === 1);
    this.isPicture = (rank > 10);
    let tmpRankSymbol;
    switch(rank) {
    case 1: tmpRankSymbol = 'A'; break;
    case 11: tmpRankSymbol = 'J'; break;
    case 12: tmpRankSymbol = 'Q'; break;
    case 13: tmpRankSymbol = 'K'; break;
    default: tmpRankSymbol = rank;
    }
    this.rankSymbol = tmpRankSymbol;
  }

  toString() {
    return `${this.suite.symbol} ${this.rankSymbol}`;
  }
};

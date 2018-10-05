'use strict';

module.exports = class Suite{
  constructor(name, symbol, color) {
    this.name = name;
    this.symbol = symbol;
    this.color = color;
  }

  toString() {
    return `${this.name} ${this.symbol} ${this.color}`;
  }

  static get SYMBOL() {
    return {
      SPADES_SYMBOL: '\u2660',
      CLUBS_SYMBOL: '\u2663',
      HEARTS_SYMBOL: '\u2665',
      DIAMONDS_SYMBOL: '\u2666'
    };
  }
  static get COLOR() {
    return {
      RED: 'red',
      BLACK: 'black'
    };
  }
  //this is actually not good!
  static get SPADES() {
    return new Suite('spades', Suite.SYMBOL.SPADES_SYMBOL, Suite.COLOR.BLACK);
  }
  static get CLUBS() {
    return new Suite('clubs', Suite.SYMBOL.CLUBS_SYMBOL, Suite.COLOR.BLACK);
  }
  static get HEARTS() {
    return new Suite('hearts', Suite.SYMBOL.HEARTS_SYMBOL, Suite.COLOR.RED);
  }
  static get DIAMONDS() {
    return new Suite('diamonds', Suite.SYMBOL.DIAMONDS_SYMBOL, Suite.COLOR.RED);
  }
};

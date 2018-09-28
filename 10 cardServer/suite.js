'use strict';

module.exports = {
  SPADES:Object.freeze({name:'spades', symbol:'\u2660', color:'black',
    // toString() {
    //   return `${this.name} ${this.symbol} ${this.color}`;
    // }    <===can do this if needed to string
  }),
  CLUBS:Object.freeze({name:'clubs', symbol:'\u2663', color:'black'}),
  HEARTS:Object.freeze({name:'hearts', symbol:'\u2665', color:'red'}),
  DIAMONDS:Object.freeze({name:'diamonds', symbol:'\u2666', color:'red'})
};

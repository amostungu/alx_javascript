#!/usr/bin/node
const SquareP = require('./5-square');

class Square extends SquareP {
  charPrint (c) {
    let j = 0;
    let k = 0;
    if (c === undefined) {
      c = 'X';
    }
    while (j < this.height) {
      let z = '';
      j++;
      while (k < this.width) {
        z += c;
        k++;
      }
      console.log(z);
    }
  }
}
module.exports = Square;

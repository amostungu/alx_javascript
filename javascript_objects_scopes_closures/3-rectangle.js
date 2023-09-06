#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
      }
    }
    print() {
      let j = 0;
      let k = 0;
      while(j < this.height) {
        let z = '';
        j++;
        while(k < this.width) {
          z += 'X';
          k++;
        }
      }
    }
}
module.exports = Rectangle;

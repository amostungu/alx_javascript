#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
  myObject.incr: function () {
    this.value++;
  }
};
console.log(myObject);
/*
YOUR CODE HERE
*/
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);

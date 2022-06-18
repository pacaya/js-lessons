'use strict';

function addTo(a) {
  return function (b) {
    return a + b;
  }
}

console.log(addTo(2)(3));

const increment = addTo(1);

console.log(increment(2));

const add5 = addTo(5);

console.log(add5(2));

console.log(increment(add5(2)))

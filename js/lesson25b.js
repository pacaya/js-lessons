'use strict';

function makeGreeter(name) {
  function greeter() {
    return `Hi ${name}`;
  }

  return greeter;
}

let c = makeGreeter();
console.log(c());
let a = makeGreeter("Peter");
let b = makeGreeter("John");
console.log(a);
console.log(a());
console.log(b());
console.log(makeGreeter("Jacob")());

'use strict';

let a = 1;
let b = "Hi";
let c = true;

console.log("Global scope");
console.log("a=", a);
console.log("b=", b);
console.log("c=", c);

{
  let d = b;
  console.log("first local scope");
  console.log("b=", b);
  console.log("c=", c);
  let a;
  console.log("a=",a);
  a = "By!";
  c = 2;
  console.log("a=", a);
  console.log("b=", b);
  console.log("c=", c);
  {
    console.log("second local scope");
    let a = false;
    let b = 15;
    console.log("a=", a);
    console.log("b=", b);
    console.log("c=", c);
  }
  console.log("first local scope");
  console.log("a=", a);
  console.log("b=", b);
  console.log("c=", c);
}

console.log("Global scope");
console.log("a=", a);
console.log("b=", b);
console.log("c=", c);

'use strict'

console.log("before exception");

function divideByNumber(num) {
  const errorChance = Math.random();
  if (errorChance > 0.7) {
    someVariable;
  }
  if (errorChance > 0.4) {
    JSON.parse("asdfa");
  }
  if (num === 0) {
    throw new RangeError("You cannot divide by 0");
  }

  console.log("inside error generating function");
  return errorChance / num;
}

function someWrapper() {
  try {
    divideByNumber(1);
  } catch(err) {
    console.log("catch inside someWrapper");
    if (err instanceof SyntaxError) {
      console.log("SyntaxError: error in parsing data");
    } else {
      throw err;
    }
  } finally {
    console.log("inside finally");
  }
  console.log("inside some wrapper");
}

function catchWrapper() {
  try {
    someWrapper();
    console.log("this code is inside try block");
  } catch (err) {
    console.log("Some error:", err);
  }
  console.log("inside catch wrapper");
}

catchWrapper();
// someWrapper();

console.log("hello, world");
function makeSequence(num) {
  let result = 1;
  let count = 0;
  return function() {
    count += 1;
    result = result * num / count;
    return result;
  }
}

let s1 = makeSequence(3); // (3^n)/n!
console.log(s1()); // 3
console.log(s1()); // 3^2/2 = 4.5
console.log(s1()); // 3^3/3! = 3 * 3 / (1 * 2) = 4.5
console.log(s1()); // 3^4/4! = 

for (let i = 0; i < 100; i += 1) {
  console.log(s1());
}
// (3 ^ n) / n! === ((3/1 * 3/2) * 3/3) ... * 3/n
function getFizzBuzz(n) {
  if (n % 5 == 0 && n % 3 == 0) {
    return "FizzBuzz";
  }

  if (n % 5 == 0) {
    return "Buzz";
  }

  if (n % 3 == 0) {
    return "Fizz";
  }

  return `${n}`;
}

for(let i = 1; i <= 30; i += 1) {
  console.log(`getFizzBuzz(${i}) = ${getFizzBuzz(i)}`);
}
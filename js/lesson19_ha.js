function calculateSum(str) {
  const indexOfOperation = getIndexOfSum(str);

  const firstTerm = getFirstTermSum(str);

  if (indexOfOperation == -1) {
    return firstTerm;
  }

  const secondTerm = calculateSum(str.substr(indexOfOperation + 1));

  return firstTerm + secondTerm;
}


// "2*3" => 1
// "(2+3)*4" => 5
function getIndexOfMul(str) {
}

// "23*5" => 23
// "(17+2*3)*5" => 23 -- calls calculateSum
function getFirstTermMul(str) {
}

// "3*5*2" => 30
// "(1+2)*(2+3)*2" => 30
function calculateMul(str) {
}

// "2*3+4" => 3
// "(2+3)*(4+5)+4" => 11
function getIndexOfSum(str) {

}

// "2+3" => 2
// "2*3+4" => 6
// "(2+3)*(4+5)+4" => 45
function getFirstTermSum(str) {
}


let s = "1+2*3+13*2";
// console.log(calculateSum(s)); // 33

s = "(1+2)*3+(2+6)*(3+8)"
    // console.log(calculateSum(s)); // 97
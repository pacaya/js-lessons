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
function getIndexOfMul(str) {
}

// "23*5" => 23
function getFirstTermMul(str) {
}

// "3*5*2" => 30
function calculateMul(str) {
}

// "2*3+4" => 3
function getIndexOfSum(str) {

}

// "2+3" => 2
// "2*3+4" => 6
function getFirstTermSum(str) {
}

function calculate(str) {

}

let s = "1+2*3+13*2";
    // console.log(calculateSum(s)); // 33

s = "(1+2)*3+(2+6)*(3+8)"
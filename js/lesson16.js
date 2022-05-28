let stack = [1];

stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
console.log(stack.pop())
console.log(stack)
stack.push(4);
console.log(stack)
let y = stack.pop();
console.log(y)
console.log(stack)
console.log(stack.pop())
console.log(stack)
console.log(stack.pop())
console.log(stack)


let queue = [1];

queue.push(2);
console.log(queue);
queue.push(3);
console.log(queue);
console.log(queue.shift());
console.log(queue);
let x = queue.shift();
console.log(x);
console.log(queue);
console.log(queue.shift());
console.log(queue);


function calculateWrong(str) {
  const indexOfOperation = getIndexOfOperation(str);

  const firstTerm = getFirstTermFrom(str);

  if (indexOfOperation == -1) {
    return firstTerm;
  }

  const operation = getOperation(str);
  const secondTerm = calculate(str.substr(indexOfOperation + 1));

  if (operation == "*") {
    return firstTerm * secondTerm;
  }

  if (operation == "+") {
    return getFirstTermFrom(str) + secondTerm;
  }

  return 0;
}


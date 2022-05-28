{

  function isOdd(num) {
    let result;
    if (num % 2 == 1) {
      result = true;
    } else {
      result = false;
    }
    return result;
  } // true if num is odd(нечетный), false otherwise

  function isEven(num) {
    let result;
    if (num % 2 == 0) {
      result = true;
    } else {
      result = false;
    }
    return result;
  } // true if num is even(четный), false otherwise


}
// ------------------
{

  function isOdd(num) {
    let result = (num % 2 == 1);

    return result;
  } // true if num is odd(нечетный), false otherwise
}


// ----------------
{

  function isOdd(num) {

    return num % 2 == 1;
  } // true if num is odd(нечетный), false otherwise

  function isEven(num) {

    return !isOdd(num);
    // return num % 2 == 0;
  } // true if num is even(четный), false otherwise
}

// ----------
{

  function fun(x) {
    console.log(x[0]);
  }

  fun(2);
  fun(true);
  fun([1, 2, 3]);
}

/// -------------
{

  let j = 0;
  while (j < 10) {
    console.log(j);

    j += 1; // j = j + 1;
    // j -= 1; // j = j - 1;
  }

  for (let i = 11; i < 20; i += 1) {
    console.log(i);
  }

  let i = 1;
  for (
    console.log("for: init");
    (console.log("check condition"), i >= 0);
    console.log("after each iteration")
  ) {
    console.log(i);
    i -= 1;
  }

}
// -----
{

  let age = prompt("What is your age");
  let name = prompt("What is your name");

  console.log("Hello, " + name + ". Your age is " + age);


  let greeting = `Hello, ${name}. Your age is ${age}`;

  console.log(greeting);
}


// ------- 
{

  let age = 17;
  let name = "Jacob";


  let greeting = `Hello, ${name}. Your age is ${age}`;

  console.log(greeting);

  console.log(greeting.length);
  for (let i = 0; i < greeting.length; i += 1) {
    let letter = greeting[i];
    console.log(letter);
  }
  let n = "My name is Sasha";
  console.log(n[2] == " ");
  console.log(n[2] == "y");
  console.log(n[1] == "y");
}

// Написать функции, которые:

// 1. считает сумму всех четных чисел в массиве

// 2. считает среднее всех нечетных чисел в массиве

// 3. считает количество слов в строке

// 4. считает количество слов в строке, которые длиннее, чем 3 символа

// Home assignment #6
// Написать функции, которые:

// 1. Посчитать сумму всех четных чисел в массиве
function isEven(num) {
  return num % 2 == 0;
} // true if num is even(четный), false otherwise

function isOdd(num) {

  return num % 2 == 1;
} // true if num is odd(нечетный), false otherwise


function sumAllEven(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (isEven(arr[i])) {
      s += arr[i]
    }
  }
  return s;
}
console.log(sumAllEven([2, 3, 4, 6]));

// 2. Посчитать среднее всех нечетных чисел в массиве
function averageAllOdd(a) {
  let sumOdd = 0;
  let countOdd = 0;

  for (let i = a.length - 1; i >= 0; i -= 1) {
    if (isOdd(a[i])) {
      sumOdd += a[i];
      countOdd += 1;
    }
  }

  if (countOdd > 0) {
    return sumOdd / countOdd;
  } else {
    return 0;
  }

}

// 3. Посчитать количество слов в строке
function countWords(str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] == " ") {
      count += 1;
    }
  }

  return count + 1;
}

    // 4. Посчитать количество слов в строке, которые длиннее, чем 3 символа

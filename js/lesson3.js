let name = prompt("What is your sex?");

if (name == "female") {
  alert("Hello, miss");
} else if (name == "male") {
  alert("Hello, mister");
} else if (name == "it") {
  alert("Hello, thing");
} else {
  alert("Unsupported value");
}


// ------

let a = Number(prompt("input first number"));
let b = prompt("input second number");
b = Number(b);

if (a > b) {
  alert("First is bigger");
} else if (a < b) {
  alert("Second is bigger");
} else {
  alert("They are equal");
}


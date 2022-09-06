'use strict';

let val;

// lesson 28: single element selectors
val = document.querySelector(".todo-item");

// multiple element selectors:
let items = document.getElementsByClassName("todo-item");

items = document.getElementById("task-list").getElementsByClassName("todo-item");
items = document.querySelector("ul").getElementsByTagName("li");
items = document.getElementsByTagName("div");

items = document.querySelectorAll("ul .todo-item");

val = items;
// val = Array.from(items);


// for(let i = 0; i < val.length; i += 1) {
//   console.log(val[i]);
// }
val.forEach(function (item) {
  console.log(item);
})


console.log(typeof val, val);
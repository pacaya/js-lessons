'use strict'

let val;

// Single element selectors

const todoTitle = document.getElementById("todo-title")

val = todoTitle;
val = todoTitle.id;
val = todoTitle.classList;
val = todoTitle.className;

val = todoTitle.style.color = "red";
val = todoTitle.style.backgroundColor = "brown";

val = todoTitle.style;

val = todoTitle.textContent;
// val = todoTitle.textContent = "sdfad";
val = todoTitle.innerText;
val = todoTitle.innerHTML;
const oldH1 = val;
val = todoTitle.innerHTML = "<b>This is bold and <i>italic</i><b> text";
val = todoTitle.innerHTML = "<ul><li>element</li><li>element</li></ul>";
todoTitle.innerHTML = oldH1;

val = document.querySelector("#todo-title");
val = document.querySelector(".todo-item");
val = document.querySelector("div");
val = document.querySelector("ul li:nth-child(3)");
val.innerText = "hello";


console.log(typeof val, val);
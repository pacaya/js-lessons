'use strict';


let val;


// CREATE + ADD

const p = document.createElement("p");
const txt = document.createTextNode("This is a test paragraph");
p.appendChild(txt);

const parent = document.querySelector(".add-todo");
parent.appendChild(p);
val = p;

const element = document.createElement("li");
const list = document.getElementById("task-list");
list.appendChild(element);
element.className = "todo-item";
element.id = "item5";

const inp = document.createElement("input");
inp.type = "checkbox";

element.appendChild(inp);
element.appendChild(document.createTextNode(" created task "));

// REPLACE

const newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("List of Tasks"));

const oldHeading = document.querySelector(".todo-list h2");
val = oldHeading;

// REMOVE

// const parentHeading = oldHeading.parentNode;
// parentHeading.replaceChild(newHeading, oldHeading);

oldHeading.parentNode.replaceChild(newHeading, oldHeading);

const elementToDelete = document.getElementById("item4");
elementToDelete.remove();

val = elementToDelete;

console.log(typeof val, val);


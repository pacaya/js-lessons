'use strict'

let val;

val = document;

val = document.forms[0][1];

val = document.links;

for (let i = 0; i < val.length; i += 1){
  const classes = val[i].classList;

  if (classes.contains("delete") 
    && classes.contains("new")) {
    val[i].classList.add("red");
    
    console.log(val[i].classList)
    console.log(val[i]);
  }
}

val = document.images;
val = document;



console.log(typeof val, val);

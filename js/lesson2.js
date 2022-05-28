{
  let something;
  something = "Some string";
  let otherName = 'He said "hello"';
  something = "Other thing";
  alert(something);
}
// -----
{
  let name = prompt("What is your name?");
  alert("Hello, " + name + "! Nice to meet you!");
}

// ---
{

  // let expression = 2 > 3;
  // let expression = 2 < 3;
  // let expression = 2 == 3;
  let expression = "masha" == "masha";
  alert("Before first if");
  if (expression) {
    alert(expression);
  } 
  alert("After first if");
  
  if (expression) { 
    alert(expression); 
  } else {
    alert("It was false");
  }
  alert("After second if");
}

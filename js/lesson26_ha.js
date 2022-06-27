'use strict';
{
  function makeArmy() {
    let i = 0;

    const shooters = [];

    do {
      const num = i;
      const shooter = function () {
        const randNum = Math.random();
        console.log(`I'm a shooter #${num}, my random number is: ${randNum}`);
      }

      shooters.push(shooter);
      i += 1;
    } while (i < 10);

    return shooters;
  }

  const shooters = makeArmy();

  shooters[0]();
  shooters[4]();

}
{
  function makeArmy() {
    let i = 0;

    const shooters = [];

    function makeShooter(i) {
      return function () {
        const randNum = Math.random();
        console.log(`I'm a shooter #${i}, my random number is: ${randNum}`);
      }
    }
    do {
      const shooter = makeShooter(i);

      shooters.push(shooter);
      i += 1;
    } while (i < 10);

    return shooters;
  }

  const shooters = makeArmy();

  shooters[0]();
  shooters[4]();

}
{
  function makeArmy() {
    const shooters = [];

    for(let i =0; i < 10; i += 1) {
      const shooter = function () {
        const randNum = Math.random();
        console.log(`I'm a shooter #${i}, my random number is: ${randNum}`);
      }

      shooters.push(shooter);
    } 

    return shooters;
  }

  const shooters = makeArmy();

  shooters[0]();
  shooters[4]();
}

function sayHelloTo(name = "John Doe") { // let name = "John Doe"; name = "Peter";
  console.log(`Hello ${name}`);
}

sayHelloTo("Peter");
sayHelloTo();
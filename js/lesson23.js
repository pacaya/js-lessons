const person = {
  firstName: "Peter",
  lastName: "Johnson",
  birthYear: 1976,
  // getFullName: function() {
  //   let fullName = this.firstName + " " + this.lastName;
  //   return fullName;
  // },
  // getAge: function() {
  //   return (new Date()).getFullYear() - this.birthYear;
  // },
  get age() {
    return (new Date()).getFullYear() - this.birthYear;
  },
  get fullName () {
    return `${this.firstName} ${this.lastName}`;
  },
  set age(years) {
    this.birthYear = (new Date()).getFullYear() - years;
  }
}

console.log(person);
console.log(person.firstName)
person.firstName = "Jacob";
console.log(person.firstName)
console.log(person.fullName)
// console.log(person.getFullName());
// console.log(person.getAge());
console.log(person.birthYear);
person.birthYear = 1988;
console.log(person.birthYear);
console.log(person.age); // person.age()
person.age = 28; // person.age(28)
console.log(person.age);
console.log(person.birthYear);
person.fullName = "John Jackson";
console.log(person.fullName) // "John Jackson";
console.log(person.firstName) // "John";
console.log(person.lastName) // "Jackson";

let t = {
  // celsius: ...,
  // fahrenheit: ...,

}

t.celsius = 0;
console.log(t.celsius); // 0
console.log(t.fahrenheit) // 32

t.fahrenheit = 100;
console.log(t.fahrenheit) // 100
console.log(t.celsius) // 37.7778
 
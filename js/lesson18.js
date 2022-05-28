let s = "21,4,7,*,+,9,-";
function getNextCommaIndex(str, i) {
  for (i = i + 1; i < str.length; i += 1) {
    if (str[i] == ',') {
      return i;
    }
  }

  return str.length;
}

console.log(getNextCommaIndex(s, 0)); // 2
console.log(getNextCommaIndex(s, 2)); // 4
console.log(getNextCommaIndex(s, 4)); // 6
console.log(getNextCommaIndex(s, 12)); // 14


console.log(s.substr(2 + 1, 4 - (2 + 1))); //4
console.log(s.substr(3, 1)); //4

let firstIndex = 0; let nextIndex = 2;
console.log(s.substr(firstIndex, nextIndex - firstIndex));
firstIndex = nextIndex + 1; nextIndex = 4;
console.log(s.substr(firstIndex, nextIndex - firstIndex));
firstIndex = nextIndex + 1; nextIndex = 6;
console.log(s.substr(firstIndex, nextIndex - firstIndex));

console.log("hello world".substr(6, 3));

function calculate2(str) {
  let stack = [];

}


console.log(calculate2("2,3,+")); // 5
console.log(calculate2(s)); // 40

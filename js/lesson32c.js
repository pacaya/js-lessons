'use strict'

let m = new Map();

m.set("1", "hello");
m.set(1, "world");
m.set(true, 42);
m.set(false, [1,2,3]);

console.log(m.get("1"));
console.log(m.get(1));
console.log(m.get(true));
console.log(m.get(false));

for (const entry of m) {
  console.log(entry);
  console.log(entry[0]); // key
  console.log(entry[1]); // value
}

for (const k of m.keys()) {
  console.log(k);
}

for (const v of m.values()) {
  console.log(v);
}

console.log(m.has("1"));
console.log(m);

let a = [1, 2, 3, 2, 1];
console.log(a);

let s = new Set(a);
s.add("hi");
s.add("hi");
s.delete(2);
console.log(s);

let emptySet = new Set();
console.log(emptySet);

for(const element of s) {
  console.log(element);
}
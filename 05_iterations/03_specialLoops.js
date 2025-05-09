// for of
//It gives you the values directly
// array specific loops

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //“For every value (num) in the array arr, run this code.”
  // console.log(num);
}

const greeting = "Hello World";

for (const element of greeting) {
  // console.log(`each char is ${element} `);
}

// Maps

//A Map is a built-in object in JavaScript that allows you to store key-value pairs — just like objects — but with more powerful features.

const map = new Map();

map.set("IN", "INDIA");
map.set("USA", "UNITED STATES");
map.set("FR", "FRANCE");
// map.set('IN',"INDIA")

// console.log(map)

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "spiderman",
};

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

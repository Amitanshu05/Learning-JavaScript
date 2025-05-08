const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);

// const allheroes = marvel_heroes.concat(dc_heroes);
// console.log(allheroes);

const allheroes = [...marvel_heroes,...dc_heroes];
//The spread operator ... expands (spreads out) the elements of an array (or object) into individual elements.
// console.log(allheroes);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const usable_array =another_array.flat(Infinity);
//flattens the nested array , arguement => level.
// console.log(another_array);
// console.log(usable_array);

console.log(Array.isArray("Amitanshu"));
//The .isArray() method checks if a value is an array.

console.log(Array.from("Amitanshu"));//creates an array from an iterable object.
console.log(Array.from({name: "Amitanshu"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
// The .of() method creates a new array with a variable number of elements passed to it as arguments.
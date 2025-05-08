const score =400;
// console.log(score); 

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); 
// console.log(balance.toFixed(2));

const anothernumber=23.35443
// console.log(anothernumber.toPrecision(3)); 

const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-US', {style:'currency', currency:'USD'}));

//*****************************MATHEMATICS******************/

// console.log(Math); // maths library in JS

// console.log(Math.abs(-10)); // absolute value

// console.log(Math.round(23.4)); // round to nearest integer

// console.log(Math.ceil(23.4)); // round up

// console.log(Math.floor(23.4)); // round down

// console.log(Math.min(23, 45, 67, 89)); // minimum value

// console.log(Math.max(23, 45, 67, 89)); // maximum value

console.log(Math.random()); // random number between 0 and 1

console.log((Math.random()*10) +1 ); 
console.log(Math.floor(Math.random()*10) +1 ); // random number between 1 and 10

const min =10;
const max = 20;

console.log(Math.floor(Math.random()* (max - min + 1) + min)); 
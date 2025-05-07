// primitive 

// 7 types :

// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (to make a value unique)
// 7. bigint (to make a number bigger than 2^53 - 1)

const score = 100; 
const scoreValue = 100.5; 

const isLoggedIn = true; 
const outsideTemp = null;

let userMood; // undefined

const uniqueId = Symbol('id'); // unique value
const uniqueId2 = Symbol('id'); // unique value

// console.log(uniqueId === uniqueId2); 

const bigNumber = 1234567890123456789012345678901234567890n; // bigint


// reference types / non-primitive types

// array
// object
// function

const heros=['spiderman', 'batman', 'superman']; // array

let myObj ={
    name:"amitanshu",
    age:20,
} 
//object is nothing but a key value pair 

const myFunction = function(){
    console.log("hello world")
} // function

console.log(typeof heros); // object 
// array are special type of object

//

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
} // function declaration

// to call the function : myFunction();


// console.log(typeof heros); // object 
// array are special type of object

//*********************MEMORY ALLOCATION*********************

// primitive types are stored in stack memory , copies of the values are stored in stack memory

let myYoutubename="amitanshu";

let anothername=myYoutubename;
anothername="sachin"; 

// console.log(myYoutubename);
// console.log(anothername);

// in the above example, myYoutubename is stored in stack memory and anothername is also stored in stack memory but it is a copy of myYoutubename.


let userOne={
    email: "user@gmail.com",
    upi: "user@upi",
}
let userTwo=userOne; 

userTwo.email="user2@gmail.com" //access to userOne.email;

// . ke through access karte hein apane object ka property ko.

// userTwo is a reference to userOne, so when we change userTwo, it also changes userOne.

// console.log(userOne.email); 
// console.log(userTwo.email);


// non primitive types are stored in heap memory , reference milta hai bas.

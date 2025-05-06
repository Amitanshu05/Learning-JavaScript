let score = true;

// console.log(typeof score);
// console.log(typeof (score)); //both are same

let valueInNumber = Number(score); //datatypes are written in capital letter & typecasting

// console.log(valueInNumber); //NaN => Not a Number
// console.log(typeof valueInNumber);

// 33 => 33
// "33abc" => NaN
// true => 1

let isLoggedIn = undefined; 
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); 

// 1 => true
// 0 => false 
// "" => false
// "abc" => true

let someNumber = 33; 
let stringNumber = String(someNumber); 
console.log(stringNumber);
console.log(typeof stringNumber);
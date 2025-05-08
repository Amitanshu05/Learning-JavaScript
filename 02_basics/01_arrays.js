// array 

// const myArr =[ 1, 2, 3, 4, 5, true , "aayush"];
const myHeroes=["shaktiman","naagraj"];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[0]);

//array method

// myArr.push(6)
// myArr.push(7)  // adds value at end .
// console.log(myArr);

// myArr.pop();

// myArr.shift(); // 	Removes from the start

// myArr.unshift(9); //add one or more elements to the beginning of an array.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join(); //combine all elements of an array into a single string

// console.log(myArr);
// console.log(typeof newArr);

// slice , splice 
const myArr=[0,1,2,3,4,5];
console.log("A", myArr);

const myn1 = myArr.slice(1,3);
//Does NOT modify the original array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
// Modifies the original array
// array.splice(start, deleteCount, item1, item2, ...)

console.log("C", myArr);
console.log(myn2);


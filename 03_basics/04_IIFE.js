// immediately invoked function expressions (IIFE)

// An IIFE is a function that runs immediately after it's defined.


(function chai(){//named iife
    console.log(`DB CONNECTED`);
})();

//  function chai(){
//     console.log(`DB CONNECTED`);
//  }
//  chai()
// 1st ()-> defines function. 
// 2nd ()-> invoking function.






 ( (name)=> {//unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
 })('hitesh')

//  const connectDB =(name) =>{
//     console.log(`DB CONNECTED TWO ${name}`);
//  }
//  connectDB('hitesh');


//why iife?
// 1)If you define variables inside this IIFE, they stay inside the function only.
// 2)since its called immediately ots perfect for tasks which are to be one once.
// 3)It’s a simple way to create a private scope in JavaScript.
// JavaScript Execution Context - 3 types:

//Global Execution Context (GEC) – the default one.

// Function Execution Context (FEC) – created each time a function runs.

// Eval Execution Context – rarely used (from eval() function; we usually ignore this for now).

// two phases of context are there

// Memory Creation Phase (also called Creation Phase)
// Execution Phase

// The call stack keeps track of which function is running.

let val1 = 10
let val2 = 5
function addNum(num1,num2){
   let total = num1+num2
   return total
}
let result1=addNum(val1,val2)
let result2=addNum(2,3)

//****************summary*********************** */

// GEC	Runs all your code globally
// FEC	Created every time addNum() runs
// Memory Phase	Reserves memory and sets variables to undefined
// Execution Phase	Actually runs the code and assigns values
// Call Stack	Tracks which function is currently running

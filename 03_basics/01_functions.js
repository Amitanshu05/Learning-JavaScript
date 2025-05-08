// code ka package hai simply

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
} //function definition

// sayMyName // function refered
// sayMyName() //function executed

// function addTwoNum(num1, num2) { //parameters{num1 , num2}
//   console.log(num1 + num2);
// }

function addTwoNum(num1, num2) { //parameters{num1 , num2}
//   let result = num1+num2
//   return result
// }
    return num1+num2
}

const result = addTwoNum(3, 5); // arguements {3,null}
// console.log(result)

function loginUserMessage(username = "sam"){
    if(username ===undefined){ //if(!username)
        console.log("please enter a username");
        return
    }
    return ` ${username} logged in `
}
console.log(loginUserMessage("hitesh"))
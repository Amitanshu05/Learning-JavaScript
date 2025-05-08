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

function addTwoNum(num1, num2) {
  //parameters{num1 , num2}
  //   let result = num1+num2
  //   return result
  // }
  return num1 + num2;
}

const result = addTwoNum(3, 5); // arguements {3,null}
// console.log(result)

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    //if(!username)
    // console.log("please enter a username");
    return;
  }
  return ` ${username} logged in `;
}
// console.log(loginUserMessage("hitesh"))

//passing multiple values as parameter
function calculateCartPrice(val1, val2, ...num1) {
  //used to collect multiple elements
  return num1;
}
// console.log(calculateCartPrice(200,300,400,4000));

const user = {
  username: "hitesh",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and  price is ${anyObject.price}`
  );
}
// handleObject(user)
// handleObject( //reference me ek new object pass kar diya.
//     {
//   username: "harry",
//   price: 23,
// }
// );

const mynewArray = [100, 200, 300, 400];

function printSecondVal(Arr) {
  return console.log(Arr[1]);
}
// printSecondVal(mynewArray);

printSecondVal([200,300,400,500]);

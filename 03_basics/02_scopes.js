var c = 300; 
let a = 100;
if (true) {
  //local scope
  let a = 10;
  const b = 20;
//   console.log("inner :", a);
}

// console.log(a);
// console.log(b)
// console.log(c)


function one(){ //nested function.
    const username ="hitesh";

    function two(){
        const website = "youtube";
        // console.log(username);

    }
    // console.log(website);

    //two()
}

//one()

if (true){
    const username ="hitesh";
    if(username==="hitesh"){
        const website ="youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//*****************************INTERESTING**************/

console.log(addone(5));//hoisting & execution context.
function addone(num){
    return num+1
}

console.log(addTwo(5)) //cant use without declaration
const addTwo = function(num){
    return num + 2
}

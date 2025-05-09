//truthy value means assumed true value 
const userEmail = []

if(userEmail){
    // console.log("got user email");
}
else{
    // console.log("dont have user email");
} 

//falsy values

// false, 0 , -0 ,BigInt 0n , null , undefined , NaN ,"".

//truthy values

//true , "0","false"," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("array is empty");
// }

const emptyObject ={}

if(Object.keys(emptyObject).length===0){
    //  console.log("empty object");
}

//Nullish Coalescing Operator (??): null & undefined
// basically null ke hisab se safety dekhta hai , like if any value is there then print that else print null
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 =null ?? 10 ?? 20 //first value assigned after ??


// console.log(val1);

//terniary operator

// condition ? true :false

const teaPrice =100
teaPrice>=80 ? console.log("more than 80") : console.log("less than 80")


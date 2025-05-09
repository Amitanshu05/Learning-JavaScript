// if
const isUserLoggedIn = true;
const temperature = 78;
// <,>,<=,>=,==,!=,===  operators
if (temperature === 50) {
//   console.log("less than 50");
} else {
//   console.log("greater than 50");
}

// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000
// if(balance>500) console.log("test"); implicit way

// if(balance<500){
//     console.log("less than");
// } else if(balance<750){
//     console.log("less than 750");
// } else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const UserLoggedIn = true
const debitcard = true
const loggedInfromGoogle =false
const loggedInfromEmail = true

if(UserLoggedIn && debitcard && 2==2){
    console.log(" ALLOW to buy");
}
if(loggedInfromGoogle || loggedInfromEmail){
    console.log(" user logged in ");
}
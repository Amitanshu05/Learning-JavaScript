//this is a special keyword in JavaScript that refers to the object that is currently calling the function.

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to the website`);
    // console.log(this);
  },
};

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username ="hitesh"
//     console.log(this); //used inside objects only
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this)
// }
// chai()

const chai = ()=>{
    let username = "hitesh"
    // console.log(this);
}
chai()
//*************important baat****************

//jab curly brackets me likha tha function then return use karna pada tha , but small brackets me nhi likha padega.

// const addTwo = (num1,num2)=>{
//     return num1+num2 (explicit)
// } 

// const addTwo = (num1,num2)=> (num1+num2) (implicit)

const addTwo =(num1,num2)=>({username:"hitesh"})
console.log(addTwo(2,3));

const myArray =[2,4,5,6,7]
// myArray.forEach()
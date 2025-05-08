// singleton

// Object.create

// object literals
const mySym =Symbol("key1");

const user={
    name : "amitanshu",
    "full name" :"amitanshu varshney",
    [mySym] : "mykey1", // incorporating a symbol inside an object.
    age : 20 ,
    location : "Agra",
    email : "ayush.com",
    isloggedin : true,
    lastlogindays : ["monday","tuesday"],
}
// console.log(user);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

// console.log(typeof user.mySym); // string datatype returned rather than symbol.

user.email="amitanshu.com";
// Object.freeze(user);
user.email="ayush.chatgpt.com"
// console.log(user);

user.greeting = function(){
    console.log("hello user");
}
user.greetingtwo = function(){
    console.log(`hello user,${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingtwo());

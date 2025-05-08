// const tinderUser =new Object() //singleton object created via constructor
const tinderUser = {}; // non singleton object

tinderUser.id = "123name";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "ayush.com",
  fullname: {
    userfullname: {
      firstname: "amitanshu",
      lastname: "varshney",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 ={obj1,obj2}

//Object.assign(target, ...sources)
//target: The object to which properties will be added.
//source: One or more source objects whose properties will be copied.

//in the below code {empty object is the target}

// const obj3 = Object.assign({}, obj1, obj2); //copies values to target object.
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
//majorly used spread function in production grade codes.
// console.log(obj3);

const users =[
    {
        id:1,
        email:"ayush.com"
    },
    {
        id:2,
        email:"ayush2.com"
    },
    {
        id:3,
        email:"ayush3.com"
    },
   
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
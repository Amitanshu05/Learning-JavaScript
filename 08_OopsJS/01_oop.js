const user = {
  username: "ayush",
  loginCount: 9,
  signedIn: true, //properties

  getUserDetails: function(){
    //console.log("got user details from database");
    // console.log(`Username: ${this.username}`)
    console.log(this)
  }
};

// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this)

const date = new Date() //new is constructor function


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    return this

}

const userOne = new  User("hitesh",12,true)
const userTwo = new User("chaiCode",12,true)
console.log(userOne);
console.log(userTwo);
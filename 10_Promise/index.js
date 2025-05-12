


// let firstPromise = new Promise((resolve,reject)=>{
//     console.log("amitanshu");
//     reject(new Error("internal server error"));
// })

//asynchronus code
// function saymyname(){
//     console.log("my name is amitanshu");
// }

// setTimeout(saymyname,10000);


// let firstPromise = new Promise((resolve,reject)=>{
//     function saymyname(){
//     console.log("my name is amitanshu");
// }

// setTimeout(saymyname,10000);
// resolve (1) ;
// });


// let promise1 = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("promise fulfilled");
//     }else{
//         reject("promise rejected");
//     }
// })
//promise chaining using multiple then block
// promise1.then((message)=>{
//     console.log("first message " + message);
//     return 20;
// }).then((message)=>{
//      console.log("second message"+ message);
//      return 30 ;
// }).then((message)=>{
//     console.log("third message "+ message);
//     return 40;
// }).catch((error)=>{
//     console.log(error);
// }).finally((message)=>{
//     console.log(" mein to chalke hi rhunga")
// })

// promise1.then((message)=>{
//     console.log("then ka message is " + message);
// }).catch((error)=>{
//     console.log("error: " + error);
// })


let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve , 1000 , "first");
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve , 1000 , "second");
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve , 1000 , "third");
})

Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log( "error: " + error );
})
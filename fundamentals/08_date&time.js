// Dates

let myDate = new Date(); // Current date and time
// console.log(myDate.toString()); // Convert to string

// console.log(myDate.toDateString()); 
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString()); 
// console.log(myDate.toJSON());
// console.log(myDate.getTime()); 

// console.log(typeof myDate); // object

let mycreatedDate = new Date("07-05-2025"); 
// console.log(mycreatedDate.toLocaleString()); 

let myTimeStamp = Date.now(); 

// console.log(myTimeStamp); 
// console.log(mycreatedDate.getTime()); 

// console.log(new Date(myTimeStamp).toString());

let newdate = new Date();
// console.log(newdate);
// console.log(newdate.getMonth());

newdate.toLocaleString('default',{
    weekday: "long",
})
console.log(newdate);
console.log(newdate.toLocaleString('default',{
    weekday: "long",
}));
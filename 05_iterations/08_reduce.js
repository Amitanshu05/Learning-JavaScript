//reduce() is a method used to reduce an array to a single value (like a total sum, product, or string).
const myNums = [1,2,3]

//  const myTotal = myNums.reduce(function (acc ,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
//  },0)

//  console.log(myTotal);

 const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
//  console.log(myTotal);


 const shoppingCart = [
    {
       itemname: "js.course",
       price: 222
 },
    {
       itemname: "python ",
       price: 102
 },
    {
       itemname: " ruby ",
       price: 222
 },
    {
       itemname: " cpp ",
       price: 192
 },

]

const price = shoppingCart.reduce((acc ,item) => acc + item.price,0)
console.log(price);

//acc -> running total
//item -> object inside array 

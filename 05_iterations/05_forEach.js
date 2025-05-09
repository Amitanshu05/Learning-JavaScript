const coding = ["js", "cpp", "ruby", "python", "java"];

// coding.forEach(function(val){ //callback function for each element in array
//     console.log(val);
// }
// )

// coding.forEach((item) => {
//  console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item , index , arr)=>{
//     console.log(item , index ,arr);
// })

const MyCoding = [
    {
       langaugeName: "javascript",
       languagefilename: "js"
    },
    {
       langaugeName: "python",
       languagefilename: "py"
    },
    {
       langaugeName: "java",
       languagefilename: "jv"
    },
]

MyCoding.forEach((item)=>{
    console.log(item.langaugeName);
}
)
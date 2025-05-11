// let fpara = document.getElementById("fpara");
// function changeText() {
//   let fpara = document.getElementById("fpara");
//   fpara.textContent = "hello amitanshu";
// }

// // // added event listener
//  fpara.addEventListener("click", changeText);

// // //removed event listener 

// // fpara.removeEventListener("click",changeText);

// // const para = document.getElementById('fpara')

// // function changeColor(){
// // const para = document.getElementById('fpara')
// // para.style.backgroundColor = "green";
// // }

// // para.addEventListener("click",changeColor);

// //The event object is a special object that gets automatically passed to your event handler function whenever an event occurs.

// const anchorElement = document.getElementById('fanchor');




// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "click done "
// })


// stopping default functionality

// const fanchor = document.getElementById('fanchor')

// function restrict(event){
//     event.preventDefault();  // ← this only works if you received the 'event' object
//     fanchor.textContent = "clicked Bhai !!"
// }

// fanchor.addEventListener('click',restrict);


// let paras = document.querySelectorAll('p'); // returns node list

// for (let i = 0; i < paras.length; i++) {
//     const element = paras[i];
//     element.addEventListener('click', function(){
//         alert("you clicked on para:" + i)
//     })
// }


// const paras = document.querySelectorAll('p')


// for (let i = 0; i < paras.length; i++) {
//     const element = paras[i+1];
//     element.addEventListener('click',function(){
//     alert(" you clicked on para:" + i);
// })
// }


// ideal way :

// let paras = document.querySelectorAll('p')


// function alertPara(event){
//     alert(" you clicked on " + event.target.textContent);
// }


// for (let i = 0; i < paras.length; i++) {
//     const element = paras[i];
//     element.addEventListener('click',alertPara);
// }

// let Div = document.querySelector('.wrapper')
// Div.addEventListener('click',function(event){
//     alert("you clicked on me!!")
// })


function alertPara(event){
    if(event.target.nodeName==="span")//nodename **
    alert("you have clicled on:"+ event.target.textContent);
}

let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertPara)


//   let myInterval = setTimeout( () =>{  
// console.log(Math.floor(Math.random()+1))
// }, 1000)

// setTimeout( () =>{  
//   console.log(Math.floor(Math.random()+2))
//   }, 1000)

//   setTimeout( () =>{  
//     console.log(Math.floor(Math.random()+3))
//     }, 1000)

//     setTimeout( () =>{  
//       console.log(Math.floor(Math.random()+4))
//       }, 1000)

//       setTimeout( () =>{  
//         console.log(Math.floor(Math.random()+5))
//         }, 1000)

//         setTimeout( () =>{  
//           console.log(Math.floor(Math.random()+6))
//           }, 1000)

//           setTimeout( () =>{  
//             console.log(Math.floor(Math.random()+7))
//             }, 1000)

//             setTimeout( () =>{  
//               console.log(Math.floor(Math.random()+8))
//               }, 1000)

// let myInterval = setInterval( () =>{  
//  let Mane = (Math.floor(Math.random()+1)*2)
 
//     console.log(Mane)
//   }, 1000)

// let monk = setTimeout( () =>{ 
//   clearInterval(myInterval) 
//     console.log(Math.floor(Math.random()*1))
//     }, 10000)


let total = 0;
const interval = setInterval( () => {
  let randomNumber = Math.floor(Math.random() *10);
  console.log(randomNumber);
  total = total + randomNumber
}, 1000)

let letAnswer = setTimeout( () => {
  let mean = total/10
  console.log(
    `The sum of the 10 numbers displayed is: ${total}\nwhile the mean score is ${mean}`
  );
  clearInterval(interval)
}, 10000)

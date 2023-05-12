// const date = new Date
// const today= date.getDate()

// const myPromise = new Promise((resolve, reject)=>{

// if(today==10){
//     resolve("success")
// }
// else if(today !=10){
//     reject("")
// }

// })

// myPromise.then(()=>{
//     console.log("today's date is correct")
// })

// myPromise.catch(()=>{
//     console.log("failure")
// })

const myschool = ["Unilag", "Lasu", "FCE", "The Curve"]

const myPromise = new Promise((resolve, reject)=>{

if(myschool.includes("Unilag")){
    resolve("success")
}
else{
    reject("failure")
}
})

myPromise.then(
    function(value){
        console.log("available")
    },

function(error){
    console.log("unvailable")
}
)

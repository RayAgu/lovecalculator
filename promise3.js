// const fs = require("fs");
//  function theReadFunction(){
//  return new Promise((resolve ,reject)=>{


    
//     fs.readFile("./testFil.txt","utf8",(err,data)=>{
//  if (data) {
//     resolve(data)
//  } else{
//     reject(err)
//  }

 
// })

// })
//  }
// theReadFunction()
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

function doSomething() {
    return new Promise((resolve) => {
        const man = Math.floor(Math.random()*100)
        resolve(man)
    });
}

const doSomethingElse=(a)=>{
    return new Promise((resolve) => {
        const man = a;
        const woman = Math.floor(Math.random()*100)
        const average = (man + woman)/2;
        const result = {man: a, woman: woman, average: average}
        resolve(result)
    });
}
const doThirdThing=(a)=>{
    switch(true){
        case (a.average >= 70):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average}, so compatible`);
            case (a.average >= 60):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average}, slightly compatible`);
            case (a.average >= 50):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average}, manageable`);
            case (a.average >= 40):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average}, don't marry`);
            case (a.average >= 30):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average}, run for your life`)
    }
}
function failureCallback(error) {
    console.error(`this error happened: ${error}`);
}

const theRunner= async()=>{
    try{
        let man = await doSomething();
        let resultObj = await doSomethingElse(man);
        let theResult = doThirdThing(resultObj);
        console.log(theResult);
    }catch(error){
        failureCallback(error)
    }
}

theRunner()
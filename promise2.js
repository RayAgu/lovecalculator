const doSomething = new Promise((resolve, reject)=> {
resolve(2)
});

const doSomethingElse = (a)=>{
    return a + 5
}

const doThirdThing=(a)=>{
    return a + 5
}
function failureCallback(error){
    console.error(`This error happened: ${error}`);
}

doSomething.then((result)=> doSomethingElse(result))
.then((newResult)=> doThirdThing(newResult))
 .catch(failureCallback)
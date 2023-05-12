function doSomething() {
    return new Promise((resolve) => {
        const Mark = Math.floor(Math.random()*100)
        resolve(Mark)
    });
}

const doSomethingElse=(a)=>{
    return new Promise((resolve) => {
        const Mark = a;
        const Joyce = Math.floor(Math.random()*100)
        const Average = (Mark + Joyce)/2;
        const result = {Mark: a, Joyce: Joyce, Average: Average,}
        resolve(result)
    });
}
const doThirdThing=(a)=>{
    switch(true){
        case (a.Average >= 70):
            return (`Mark score is: ${a.Mark}, Joyce score is: ${a.Joyce}, Average score is: ${a.Average}, Verdict: so compatible`);
            case (a.Average >= 60):
                return (`Mark score is: ${a.Mark}, Joyce score is: ${a.Joyce}, Average score is: ${a.Average}, Verdict: slightly compatible`);
            case (a.Average >= 50):
            return (`Mark score is: ${a.Mark}, Joyce score is: ${a.Joyce}, Average score is: ${a.Average}, Verdict: manageable`);
            case (a.Average >= 40):
            return (`Mark score is: ${a.Mark}, Joyce score is: ${a.Joyce}, Average score is: ${a.Average}, Verdict: don't marry`);
            case (a.Average >= 30):
            return (`Mark score is: ${a.Mark}, Joyce score is: ${a.Joyce}, Average score is: ${a.Average}, Verdict: run for your life`)
    }
}
function failureCallback(error) {
    console.error(`this error happened: ${error}`);
}

const theRunner= async()=>{
    try{
        let Mark = await doSomething();
        let resultObj = await doSomethingElse(Mark);
        let theResult = doThirdThing(resultObj);
        console.log(theResult);
    }catch(error){
        failureCallback(error)
    }
}

theRunner()




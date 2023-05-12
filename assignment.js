let Class1 = (Math.floor(Math.random()*99))
let Joseph = function(){ setTimeout( () => {
    switch(true){
        case(Class1 >70):
        console.log("Joseph, you have:"+ Class1 + "% affection for Josphine");
        break;
    default:
        console.log("Joseph, you have:"+ Class1 + "% affection for Josphine")
    }
}, 2000)
} 

let Class2 = (Math.floor(Math.random()*99))
let Josphine = function(){ setTimeout( () => {
    switch(true){
        case(Class1 >70):
        console.log("Josphine, you have:"+ Class2 + "% affection for Joseph");
        break;
    default:
        console.log("Josphine, you have:"+ Class2 + "% affection for Joseph")
    }
}, 3000)
}
let Mat = Class1 + Class2
let Matic2 = Mat/2  
     let Matic = function(){setTimeout( () => {
    switch(true){
        case(Matic2 >= 50):
        console.log("Joseph and Josphine, your average love score is:"+ Matic2 + "% You both are perfect match; good to go");
        break;
        case(Matic2 >= 30 && Matic2 >=49):
        console.log("Joseph and Josphine, your average love score is:"+ Matic2 + "% Manageable");
         break;
     default:
         console.log("Joseph and Josphine, your average love score are:"+ Matic2 + "% I advice you don't just go there")
    }
}, 4000)
     }

Joseph()
Josphine()
Matic()
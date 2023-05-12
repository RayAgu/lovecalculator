let funcion1 = function(){ setTimeout( () =>{
    console.log("i am function1")
    }, 7000)
}

let funcion2 = function(){ setTimeout( () =>{
    console.log("i am function2")
    }, 6000)
}

let funcion3 = function(){ setTimeout( () =>{
    console.log("i am function3")
    }, 5000)
}

let funcion4 = function(){ setTimeout( () =>{
    console.log("i am function4")
    }, 4000)
}
funcion4()
funcion3()
funcion2()
funcion1()

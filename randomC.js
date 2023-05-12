// setInterval( () =>{
// let Class = (Math.floor(Math.random()*99)) 

// if(Class >=70){
//  console.log("Your love score is:"+ Class + "% compatible");
// }else if(Class >= 60){
//     console.log("Your love score is:"+ Class + "% you slightly compatible");
// }else if(Class >= 50){
//     console.log("Your love score is:"+ Class + "% manageable");
// }else if (Class >= 40){
//     console.log("Your love score is:"+ Class + "% Japa");
// }else{
//     console.log("Your love score is:"+ Class + "% Run for your Life");
// }
// }, 5000)


setInterval( () =>{
    let Class = (Math.floor(Math.random()*99))

switch(true){
    case(Class >=70):
    console.log("Your love score is:"+ Class + "% compatible");
    break;
    case(Class >= 60):
    console.log("Your love score is:"+ Class + "% you slightly compatible");
    break;
    case(Class >= 50):
    console.log("Your love score is:"+ Class + "% manageable");
    break;
    case(Class >= 40):
    console.log("Your love score is:"+ Class + "% Japa");
default:
    console.log("Your love score is:"+ Class + "% Run for your Life")
}
}, 5000)

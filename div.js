let power = 45 ;
let suiteConnected = true ;

if(power >=50 && suiteConnected ===true){

    console.log("jarvis got activated");
}else{

    console.log("Jarvis is not activated")
}

let powerbackup = 90;

if(powerbackup>=90){
    console.log("Jarvis at full power");
}else if (powerbackup >=50){
    console.log("jarvis ready");
}else {
    console.log("Jarvis at low power");
}


let emergencyMode = false;

let mode = !emergencyMode ? 'NORMAL MODE' : 'EMERGENCY';
console.log("System mode is " , mode);
for (let i = 1; i <= 10; i ++){
    console.log("Numeros:" + i);
}
let sum = 0;
for(let i = 1; i <= 100; i ++ ){
    sum = sum + i
    console.log("Suma" + sum)
}
let multi1 = 2;
for (let i = 1; i <=10; i ++){
    multi2 = multi1 * i
    console.log(multi1 + "*" + i + "=" + multi2)
}
let contador = 10;
while(contador >= 1) {
    console.log("Contador: " + contador);
    contador--;
}
let savedUsername = "YoSoyAdmin";
let savedPassword = "contraseña";

function iniciarSesion(){
    let passwordCorrect = "Especial";
    let intentos = 0;
    let maxIntentos = 3;
    let acceso = false;

    while(intentos < maxIntentos && !acceso){
        intentos++;
        let passwordInt = prompt("ingresa password:")
    

    if(passwordInt === passwordCorrect){
        acceso = true;
        console.log("Access granted")
        alert("Access granted")
    } else{
        console.log("Access denied")
        alert("Access denied")
    }
}
if(!acceso){
    console.log("BLOQUEO")
}}
iniciarSesion()
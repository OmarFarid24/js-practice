let edad = 23;

if(edad >= 18){
    console.log("Mayor de edad")
} else{
    console.log("Menor de edad")
}
//---------------------------------------------------------------------------------------------------------------------------------
let num = 2;

if(num % 2 === 0){
    console.log("Numero Par")
} else{
    console.log("Numero Impar")
}
//---------------------------------------------------------------------------------------------------------------------------------
const userEdad = prompt("Ingresa tu edad:")

if(userEdad < 13){
    console.log("Child")
    alert("child")
}
else if( userEdad > 12 && userEdad < 18){
    console.log("teenager")
    alert("teenganer")
} else{
    console.log("adult")
    alert("adult")
}
//---------------------------------------------------------------------------------------------------------------------------------
let savedUsername = "YoSoyAdmin";
let savedPassword = "contraseña";

function iniciarSesion(){
    let user = prompt("ingresa nombre:")
    let password = prompt("ingresa password:")

    if(user === savedUsername && password === savedPassword){
        console.log("Access granted")
        alert("Access granted")
    } else{
        console.log("Access denied")
        alert("Access denied")
    }
}
iniciarSesion()
//---------------------------------------------------------------------------------------------------------------------------------
const note = 95;

if(note <= 100 && note > 90){
    console.log("A")
} else if (note <= 90 && note > 80){
    console.log("B")
} else if(note <= 80 && note > 70){
    console.log("C")
} else{
    console.log("D")
}

const nameVerification = prompt("Ingresa tu nombre: ");
const edadVerification = prompt("Ingresa tu edad: ");
let day = "fin de semana";

console.log(`Hola ${firstName} ${lastName}, encantado de conocerte`);
alert(`Hola ${firstName} ${lastName}, encantado de conocerte`);
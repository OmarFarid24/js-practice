let name = "Blue";
let age = 23;
let student = true;

console.log("My name is", name, "I’m", age, "years old", " and it’s", student, "that I’m a student.");
//------------------------------------------------------------------------------------------------------------
let num1 = 1;
let num2 = 2;

let sum = num2 + num1;
let difference = num2 - num1;
let product = num2 * num1;
let division = num2 / num1;

console.log(sum, difference, product, division);
//------------------------------------------------------------------------------------------------------------
const firstName = prompt("Ingresa tu nombre: ");
const lastName = prompt("Ingresa tu apellido: ");

console.log(`Hola ${firstName} ${lastName}, encantado de conocerte`);
alert(`Hola ${firstName} ${lastName}, encantado de conocerte`);
//------------------------------------------------------------------------------------------------------------
let celcius = 35;

let fahrenheit = (celcius * 9/5) + 32

console.log(celcius, fahrenheit)
//------------------------------------------------------------------------------------------------------------
const userName = prompt("Ingresa tu nombre, por favor");
const userAge = prompt("Ingresa tu edad, por favor");
const country = prompt("Ingresa tu pais");
const lenguageProgram = prompt("Ingresa tu lenguaje de programacion")

console.log(`Eres: ${userName}
Tienes: ${userAge}
Eres de: ${country}
Tu lenguaje de programacion favorito es: ${lenguageProgram}`);
alert(`Eres: ${userName}
Tienes: ${userAge}
Eres de: ${country}
Tu lenguaje de programacion favorito es: ${lenguageProgram}`);
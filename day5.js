const favoriteNumber = prompt("Your favorite number is: ");

if (favoriteNumber > 10){
    console.log("That's a big number!")
} else{
    console.log("Small number")
}
//-----------------------------------------------------------------------------------------------

const list = ["meat", "milk", "soda", "bread","eggs"];
 const complete = list.length;
 console.log("total: "+ complete);

 //-----------------------------------------------------------------------------------------------

 for ( let i = 1; i <= 20; i++){
    if(i % 2 ===0){
        console.log(i)
    }
 }
 //-----------------------------------------------------------------------------------------------

 const positiveOrNegative = prompt("Introduce el numero: ");

 if (positiveOrNegative >= 0 ){
    console.log("Is positive")
 }else if (positiveOrNegative <= 0){
    console.log("Is negative")
 } else{
    console.log("ZERO")
 }
 //-----------------------------------------------------------------------------------------------
 const names = ["Lisa", "Broncoli", "Vel", "William"];
 let shortName = names[0];
 
 for(let i = 0; i < names.length; i++) {
     if(names[i].length < shortName.length) {
         shortName = names[i];
     }
 }
 console.log(shortName);
 //-----------------------------------------------------------------------------------------------

 const temp = [5,10,15,20,25,30,35,40];

 for(let i = 0; i< temp.length; i++){
    if(temp[i] <= 15){
        console.log("Cold: " + temp[i] + "C°")
     } else if(temp[i] > 15 && temp[i] < 25){
        console.log("Warm: " + temp[i] + "C°")
     } else {
        console.log("Hot: " + temp[i] + "C°")
     }
 }
//-----------------------------------------------------------------------------------------------
 const products = [25,12,85,25,50,100,2,5];
 let expensive = 0;

for (let i = 0; i < products.length; i++){
    if(products[i]>= 50){
        expensive++;
    }
}
console.log("productos caros son: " + expensive)
//-----------------------------------------------------------------------------------------------

const notes = [70, 85, 90, 60, 100];
let totalSum = 0;

for (let i = 0; i < notes.length; i++) {
    totalSum += notes[i];
}
const averageScore = totalSum / notes.length;

let status = "";
if (averageScore >= 80) {
    status = "above";
} else {
    status = "below";
}
// por que status se subraya?
console.log("Student Scores:" +  notes);
console.log("Total Sum:" + totalSum);
console.log("Average Score:"+ averageScore);

//-----------------------------------------------------------------------------------------------

const word = prompt("Introduce una palabra");
let invertWord = "";

for (let i = word.length -1;i >= 0; i--){
    invertWord += word[i];
}
if (word === invertWord){
    console.log(invertWord + " " + "Es Palindrome")
}else{
    console.log(invertWord+ " " + "Not palindrome")
}

//-----------------------------------------------------------------------------------------------

const shopping = [105,5,3,2,6,90,21,24,75,100,125];
let totalItems = shopping.length;
let totalPrices = 0;
let mostExpensive= shopping[0];
let cheapest = shopping[0];

for(let i = 0; i < shopping.length; i++){

    totalPrices += shopping[i];
    if(shopping[i] > mostExpensive ){
        mostExpensive = shopping[i]
    } else if(shopping[i]< cheapest){
        cheapest = shopping[i]
    }
}
console.log("Items: "+ totalItems)
console.log("Total: $" + totalPrices)
console.log("Most expensive: $" + mostExpensive)
console.log("Cheapest: $" + cheapest)

//-----------------------------------------------------------------------------------------------

let listTask = [];

for(let i = 0 ;i < 3; i++){
    let newTask = prompt("introduce la palabra " + (i+1) +":");
    if(newTask) {
       listTask.push(newTask);
       console.log("Task N° " + (i+1)+ ": " + listTask[i])
    } else {
        i--;
    }
}
const favoriteFruit = ["sandia", "mango", "fresa", "manzana", "durazno"];

for(let i = 0; i < favoriteFruit.length;i++){
    console.log("posicion N°" + i +":" + favoriteFruit[i])
}
console.log("La primera fruta es: " + favoriteFruit[0]);
console.log("La ultima fruta es: " + favoriteFruit[favoriteFruit.length -1]);

//---------------------------------------------------------------------------------------------------------------------------------

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((sum, number)=> sum + number, 0);
console.log("EL total es: " + total);

//---------------------------------------------------------------------------------------------------------------------------------

const fourProblem = [4,7,1,9,2];
maxNumber = fourProblem[0];

for (let i = 0; i < fourProblem.length; i++){
    if(fourProblem[i]> maxNumber){
        maxNumber = fourProblem[i]
    }
}
console.log("El mayor numero es: " + maxNumber)
//---------------------------------------------------------------------------------------------------------------------------------
const product = [19.99, 5.49, 12.75, 3.50];
const totalPrice = product.reduce((suma, price) => suma + price, 0);
const totalProduct = product.length;
const promPrice = totalPrice / totalProduct;
console.log("Tienes " + totalProduct + " articulos en el carrito");
console.log("Total: $" + totalPrice);
console.log("Promedio: $" + promPrice + " por articulo")
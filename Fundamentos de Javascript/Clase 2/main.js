/*
Control de flujos y ciclos

Condicionales: Estructura if --> if..else --> if..else if

and(&&) or(||) not(!)

Si <condicion> entonces <operacion>
*/

// if (true) {
//     console.log("Vamos a ver este mensaje")
// }

// const num = 56;

// if (num == 56) {
//     console.log("Vas a ver este mensaje")
// }

// if..else

// const string = "red"

// if (string == "red") {
//     console.log("Se cumple");
// }else{
//     console.log("No se cumple la condicion");
// }

// const user = prompt("Ingresa tu nombre")

// if (user == "") {
//     console.log("No ingresaste un dato de dato string");
// }else{
//     console.log(`Hola, como estas ${user}`);

// }

// let price = 50

// if (price < 50) {
//     console.log("El precio de menor a $50");
// }else if (price > 120) {
//     console.log("No se cumple la condicion");
// }else{
//     console.log("sdfsadfadsfg");

// }

// let number = 90;
// let esMayor = (number > 5);

// if (esMayor) {
//     console.log("La condicion se cumple");
// }else{
//     console.log("El valor no se cumple");
// }

// let nombre = prompt("Ingresa tu nombre"); //Input
// let lastName = prompt("Ingresa tu apellido");   //Input

// if ((nombre != "") && (lastName != "")) {
//     console.log(`Nombre: ${nombre} \nApellido: ${lastName}` );
// }else{
//     console.error("Ingrese porfavor su nombre y apellido!");
// }

// let entrada = prompt("Ingresa tu nombre");

// if ((entrada == "ALEX") || (entrada == "alex")) {
//     console.log("El nombre ingresado es Alex");
// }else{
//     console.log("El nombre ingresado no es alex");
// };

// let edad = 18

// if (edad >= 18) {
//     console.log("Sos apto para entrar");
// }else{
//     console.log("No sos mayor de edad");
// }

/* 
Ciclos / Bucles

for --> while --> do..while --> break , continue

switch

El desde --> Hasta --> Actualizacion
for(desde; hasta; actualizacion){
    este seria el cuerpo
}
*/

// for(let i = 0; i <= 5; i++){
//     console.log(i);
// }

// let x = parseInt(prompt("Ingresa un number"))

// for(let i = 1; i <= 10; i++){
//     let result = x * i
//     console.log(`${x} "x" ${i} = ${result}`);
// }

// for(let i = 1; i <= 5; i++){
//     let nombre = prompt("Ingresa tu nombre:")
//     console.log(`Tu turno es ${i} nombre: ${nombre}`);
// }

// let suma = 0;

// for(let i = 0; i <= 3; i++){
//     let num = parseInt(prompt("Ingresa un number"))
//     suma += num
// }
// console.log(`La suma de los numeros ingresados es ${suma}`);

// for(let i = 1; i <= 5; i++){
//     if (i == 2) {
//         break
//     }
//     console.log(i);

// }

// Ejercicios usando estructura IF -----------------------

// Ejercicio 1

// let nombre = "alex";

// if (nombre == "alex") {
//     console.log("Fui yo");
// }else{
//     console.log("Yo no fui");
// };

//  Ejercicio 2

// let number = prompt("Ingrese un numero entre 1 - 4");

// if (number == 1) {
//   console.log("Elegiste a Homero");
// }
// if (number == 2) {
//   console.log("Elegiste a Marge");
// }
// if (number == 3) {
//   console.log("Elegiste a Bart");
// }
// if (number == 4) {
//   console.log("Elegiste a Lisa");
// }

// Ejercicio 3

// let p1 = prompt("Ingrese el primer producto");
// let p2 = prompt("Ingrese el segundo producto");
// let p3 = prompt("Ingrese el tercer producto");
// let p4 = prompt("Ingrese el cuarto producto");

// if (p1 && p2 && p3 && p4) {
//   let listaDeProductos = `${p1} ${p2} ${p3} ${p4}`;
//   alert(`Lista de productos: ${listaDeProductos}`);
// } else {
//   alert("Debes ingresar todos los productos");
// }

// Ejercicios usando Ciclos ------------------------

// Ejercicio 1

// let alumno = prompt("Ingrese un numero de 1-10");

// for (i = 1; i <= 10; i++) {
//   alert(i);
// }

// Ejercicio 2

// let numero = parseInt(prompt("Ingresa un número entre 1 y 15:"));

// if (numero >= 1 && numero <= 15) {
//     if (numero % 2 === 0) {
//         console.log(`${numero} es par`);
//     } else {
//         console.log(`${numero} es impar`);
//     }
// }

for (let i = 0; i < 1; i++) {
    let numero = parseInt(prompt("Ingresa un número entre 1 y 15:"));
if (numero >= 1 && numero <= 15) {
        if (numero % 2 === 0) {
            console.log(`${numero} es par`);
        } else {
            console.log(`${numero} es impar`);
        }
    }
}

// Ejercicio 3

// Ejercicio 4

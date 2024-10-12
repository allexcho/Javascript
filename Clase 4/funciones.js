/* 
Functions: Propiedades basicas
-Definiciones -Ventajas -Declaracion

-Parametros-

-Scope- --> Destingir variables GLOBALES y LOCALES

-Funciones anonimas evolucionados a las flechas
*/

/* Funciones simples: */

// function saludo () {
//     console.log("Hola soy una funcion simple")
// }

/* Luego hay que declararlo, llamarlo: */

// saludo()

// function solicitarNombre() {
//     let name = prompt("Ingresa tu nombre:")
//     console.log(`El nombre ingresado es ${name}`)
// }

// solicitarNombre()

/* 
Con parametros: Lo que hacen es tomar uno o mas valores, que seran ejecutados en sus operaciones, (Los parametros son y no dejan de ser variables(var/let)).

function conParametros(parametro1,parametro2) {
    console.log(`Llamando a mis parametros ${parametro1}, ${parametro2}`)
}

*/

/* Ejemplo */

// let resultado = 0; // Es una variable GLOBAL

// Function que sume dos numeros

// function suma(x, y) {
//     resultado = x + y
// }

// function mostrar(mensaje) {
//     console.log(mensaje)
// }

// Llamamos primero a sumar y despues a mostrar:

// suma(42351, 2345)
// mostrar(`La suma es de: ${resultado}`)

/* Function para calcular el total de horas trabajadas en la semana */

// function horasTotales(horasDiaras) {
//     let totalHoras = 0;

//     // For Loop para que recorra el array de horas diarias

//     for(let i = 0; i < horasDiaras.length; i++) {
//         totalHoras += horasDiaras[i]
//     }
//     return totalHoras
// }

/* Ejemplo de uso */

// const horaSemanales = [9, 9, 9, 9, 9, 6];   // Horas trabajos diarios
// console.log(`El total de horas laburadas en la semana es de: ${horasTotales(horaSemanales)}`);

/* 
Functions anonimas y functions flechas:
Anonimas: Las funciones anónimas en JavaScript son aquellas que no han sido declaradas con un nombre.
Flecha: Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
*/

// const suma = function (a, b) {
//     return a + b
// }

// const resta = function (a, b) {
//     return a - b
// }

// console.log(suma(452234, 1223542))
// console.log(resta(42363456345, 42235345112))

/* Function anonima para verificar si el numero es positivo */

// let positivo = function (numeroPositivo) {
//     return numeroPositivo > 0
// }
// console.log(positivo(-5));  // False

/* Function Flecha */

// const suma = (a, b) => {return a + b}
// console.log(suma(234,123));

/* Function en una sola linea de codigo */

// const resta = (a, b) => a - b
// console.log(resta(100, 50));

/* Comparar numeros */

// const menor = (a, b = 67) => a < b
// console.log(menor(50))

/* Calcular el cuadrado de un numero */

// const cuadrado = (n) => n * n
// console.log(cuadrado(10));

/* Concatenar Strings */

// const string = (string1, string2) => `${string1} ${string2}`
// console.log(string("Hola,", "Alex"));

/* ---------- Ejercicios con functions! ---------- */

// Ejercicio 1:

let notas = [];
let notaFinal = 0;
let porcentaje = (0.6, 0.3, 0.1);

let notas1 = notas(prompt("Ingresa tu nota del examen 1-10:"));
let notas2 = notas(prompt("Ingresa tu nota de los trabajos practicos 1-10:"));
let notas3 = notas(prompt("Ingresa tu nota de participacion 1-10:"));

for (let i = 0; i < notas.length; i++) {
  notaFinal += notas[i] * porcentaje[i];
}

console.log(`La nota final del estudiante es ${notaFinal}`);

// Ejercicio 2:

// function calcularDescuento(precio, xDescuento) {
//   let descuento = (precio * xDescuento) / 100;
//   let total = precio - descuento;
//   return total;
// }

// let precio = parseFloat(prompt("Ingresa el precio del producto:"));
// let xDescuento = parseFloat(prompt("Ingresa el descuento:"));
// let precioDescontado = calcularDescuento(precio, xDescuento);

// console.log(precioDescontado);

// Ejercicio 3:

// function determinarCategoria(edad) {
//   if (edad < 12) {
//     console.log(`Edad: ${edad}, Categoria: Infantil`);
//   } else if (edad >= 12 && edad < 17) {
//     console.log(`Edad: ${edad}, Categoria: Juvenil`);
//   } else if (edad >= 18) {
//     console.log(`Edad: ${edad}, Categoria: Adulto`);
//   } else {
//     return "Edad no valida";
//   }
// }
// let corredor = parseFloat(prompt("Ingresa tu edad:"));
// let categoria = determinarCategoria(corredor);

// Ejercicio 4:

// function determinarNumero(number) {
//   if (number > 0) {
//     console.log(`El numero ${number} es: Positivo`);
//   } else if (number < 0) {
//     console.log(`El numero ${number} es: Negativo`);
//   } else if (number === 0) {
//     console.log(`El numero ${number} es: 0`);
//   } else {
//     console.log("Invalido");
//   }
// }

// let numeroIngresado = parseFloat(prompt("Ingresa un numero:"));
// let final = determinarNumero(numeroIngresado);

// Ejercicio 5:

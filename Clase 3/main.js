/* 
Arrays: Una coleccion de datos. Pueden ser string, numeros, booleanos etc

Arrays = Matris


----- Como declarar un Array [] -----

const arr = [];


----- Como declarar un array de numeros: -----

const arraysNum = [1, 2, 3, 4, 5, -7, 0, 7.5]; 


----- Como declarar un array de strings: -----

const arraysStrings = ["hola", "hello", "Soy una cadena de caracteres"];


----- Como declarar un array de booleans: -----

const arraysBooleans = [true, false, true];


----- Como declarar un array con distintos tipos de datos: -----

const arrays = [1, "fruta", true, arraysStrings, {nombre: 'Yenice', edad: 30}]  // {Objetos Literales}


----- Como accedo a un array? -----

console.log(arrays[0]);

let result = arraysNum[3] + arraysNum[5]
console.log(result)

*/
/*

----- Recorrido del array -----

const num = [1, 2, 3, 4, 5];

for(let i = 0; i < 5; i++){
    console.log(num[i])
}

*/

/*

----- Metodos y propiedades: -----

const arraysMix = ['Marcos', 2, 35, 56, 'Palabras'];
for(let i = 0; i < arraysMix.length; i++){
    console.log(arraysMix[i])
}

----- Como agregar elementos: -----

const arraysMix = ['Marcos', 2, 35, 56, 'Palabras'];
arraysMix.push('Soy un nuevo elemento');    // Agregar alfinal del array
arraysMix.length

arraysMix.unshift('Soy un nuevo elemento'); // Agrega al principio del array
arraysMix.length


----- Como quitar elementos -----

arraysMix.shift()   // Elimina el primer elemento del array
arraysMix.pop()     // Elimina el ultimo elemento del array

console.log(arraysMix.join('*'))    // Genera un string y separandolo con el simbolo que elegis

*/

/* 

----- Como combinar dos arrays en un array:

const perros = ["Dog", "Doggy"];
const gatos = ["Cat", "Kitty"];
coonst pets = perros.concat(gatos)
console.log(pets)


----- Como hacer una copia de un array a un nuevo array: -----

const nombres = ["Alex", "Yeni", "Naiara", "Martin", "Maria"];
const men = nombres.slice(0,3);     // Separa en un nuevo array los indices que elegis
console.log(men);

*/

/* 

----- Como encontrar un indice de un array -----

Si encotro el indice figura el indice pero sino te devuelve -1 EN CASO DE NO ENCONTRAR EL INDICE.

const nombres = ["Alex", "Yeni", "Naiara", "Martin", "Maria"];
console.log(nombres.indexOf("Alex"))    // Te devuelve 0
console.log(nombres.indexOf("alex"))     // Te devuelve -1

----- Como encontrar un indice de un array (TRUE O FALSE) -----

const nombres = ["Alex", "Yeni", "Naiara", "Martin", "Maria"];
console.log(nombres.includes("Alex"))   // Te devuelve "TRUE"
console.log(nombres.includes("alex"))   // Te devuelve "FALSE"

*/

/* 

----- Como arruinarle la vida a la empresa -----

----- Esto es un metodo DESTRUCTIVO -----

const nombres = ["Alex", "Yeni", "Naiara", "Martin", "Maria"];
nombres.reverse()   // Te da vuelta el array el orden

*/

// let frutas = [];
// frutas[5] = "Frutillas";
// console.log(frutas[5]);
// console.log(Object.keys(frutas));   // Te devuelve el indice

// Ejercicios para hacer con Yeni

// let arr = [];

// arr[0] = "Alex";

// arr[1] = 26;

// console.log(arr)

// let arr = [
//     [1, "Alex"],
//     ["Yeni", 30, true]  // Sub arrays
// ];

// arr.push(["Martin", "Naiara"]);

// console.log(arr.length);

// let arr = [];

// let result = 5;

// for(let i = 0; i < result; i++){
//     let entrada = prompt("Nombres");
//     arr.push(entrada)
//     console.log(arr.length);
// }

// let nuevoArr = arr.concat(["alex", "yeni"]);

// console.log(nuevoArr.join("\n"));

// Ejercicio 1:

// const palabras = ['CASA', 'PERRO', 'ELEFANTE', 'OSO'];
// let vocales = ["A", "E", "I", "O", "U"];
// let i = 0;    // Inicio principal para recorrer las palabras

// while(i < palabras.length) {    // Va recorrer infinitamente el array
//     let palabra = palabras[i]   // Va recorrer CADA DATO (CASA, PERRO, ELEFANTE, OSO)
//     let contadorVocal = 0;      // Almacena cuantos vocales hay en cada letra
//     let v = 0;              // Se reutiliza vocal para contar cada letra de la palabra

//     while(v < palabra.length) {     // Tuvimos que introducir un nuevo indice (v) para poder recorrer el array sin interferir con (i)
//         let letra = palabra[v];
//         if (vocales.includes(letra)) {
//             contadorVocal++;
//         }
//         v++
//     }
//     console.log(`La palabra ${palabra} tiene ${contadorVocal} vocales`)
//     i++
// }

// Ejercicio 2:

// const numeros = [23, 54, 12, 87, 5, 36];

// for (const number of numeros) {
//   if (number % 2 === 0) {
//     console.log(`${number} es par`);
//   } else {
//     console.log(`${number} es impar`);
//   }
// }

// Ejercicio 3:

// let colors = ["Red", "Green", "White", "Black"];

// console.log(colors.join(","));

// console.log(colors.join("+"));

// Ejercicio 4:

// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let frecuencia = [];
// let repeticion = 0; // Almacenar los datos
// let elementoFrecuente

// for(const element of arr1) {
//     if (frecuencia[element]) {
//         frecuencia[element]++
//     } else {
//         frecuencia[element] = 1
//     }
//     if (frecuencia[element] > repeticion) {
//         repeticion = frecuencia[element]
//         elementoFrecuente = element
//     }
// }
// console.log(`El elemento frecuente: ${elementoFrecuente} ( ${repeticion} veces )`)

// Ejercicio 5:

// const color = ["Azul", "Verde", "Rojo", "Naranja", "Violeta", "Índigo", "Amarillo"];
// const o = ["th", "st", "nd", "rd"]

// for(let i = 0; i < color.length; i++) {
//     let posicion = i + 1;   // Para que arranque en 1 y no en 0
//     let sudfijo
//     if (posicion === 1) {
//         sudfijo = o[1]  // Va tomar el st del array o
//     }else if(posicion === 2) {
//         sudfijo = o[2]  // Va tomar el nd del array o
//     }else if(posicion === 3) {
//         sudfijo = o[3]  // Va tomar el rd del array o
//     }else {
//         sudfijo = o[0]  // Va toamr el th del array o
//     }
//     console.log(`La ${posicion} ${sudfijo} es opcion ${color[i]}`)
// }

// Nuevos ejercicios para hacer! ------------------------------------

// Ejercicio nuevo 1:

// let row = 5; // Cantidad de filas

// for (let i = 1; i < row; i++) {
//   // Itera sobre row
//   let rows = ""; // Declaro una nueva variable con * espacio
//   for (let j = 1; j <= i; j++) {
//     // Creo otro bucle para iterar sobre cada una de los row
//     rows += "* ";
//     // Para agregar un * espacio
//   }
//   console.log(rows);
// }

// Ejercicio nuevo 2:

// Ejercicio nuevo 3:

let peso = 74;
let altura = 1.77;

let bmi = peso / (altura * altura);

if (bmi <= 17) {
  console.log("Bajo de peso");
} else if (bmi >= 18 && bmi <= 25) {
  console.log("Peso Normal");
} else if (bmi >= 26 && bmi <= 30) {
  console.log("Subio de peso");
} else {
  console.log("Obeso");
}

// Ejercicio nuevo 4:

// let array = ["Manzana", "Banana,", "Frutilla", "Melon", "Naranja"];

// array.push("Durazno");
// console.log(array);

// array.shift();
// console.log(array);

// Ejercicio neuvo 5:

// let palabras = ["Hermosa", "manana", "verdad"];

// palabras.sort();
// palabras.join(",");
// console.log(palabras);

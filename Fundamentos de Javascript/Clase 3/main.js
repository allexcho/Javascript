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
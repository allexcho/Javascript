/*
Higher order function | Orden superior
- Retornar functions 
- Recibir functions por parametros
- Metodos de busquedas y transformacion(forEach, find, filter, map, reduce, sort)

- El objeto Math
- Class Date
*/

// Retornar functions:

function mayorQue(number) {
    return (mayor) => mayor > number;
} 

const mayorQueDiez = mayorQue(10);
const mayorQueOnce = (m) => m > 11;
console.log(mayorQueDiez(12)); // true
console.log(mayorQueOnce(5)); // false

// Retornar functions con la estructura IF:

function Operacion(operacion) {
    if (operacion == "suma") {
        return (n1, n2) => n1 + n2; 
    }else if (operacion == "resta") {
        return (n1, n2) => n1 - n2; 
    }
}

const suma = Operacion("suma");
const resta = Operacion("resta");

console.log(suma(26, 12)); // 38
console.log(resta(26, 12)); // 14

// Recibir functions por parametros:

function porCadaUno(array, funcion) {
    for (const elemento of array) {
        funcion(elemento);
    }
}

const numeros = [1, 2, 3, 4, 5];

porCadaUno(numeros, console.log)

// 

let total = 0;

function acumular(numero) {
    total += numero;
}

function cadaUno(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

let numbers = [1, 2, 3, 4, 5];
cadaUno(numbers, acumular);

console.log(total) // 15


const numDuplicado = [];

function duplicado(a, c) {
    for (let i = 0; i < a.length; i++) {
        c(a[i], i);
    }
}

let numbersDuplicados = [1, 2, 2, 3, 4, 4, 5];
duplicado(numbersDuplicados, (elemento) => {

    numDuplicado.push(elemento * 2);
})
console.log(numDuplicado)
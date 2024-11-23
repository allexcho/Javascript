/*
Higher order function | Orden superior
- Retornar functions 
- Recibir functions por parametros
- Metodos de busquedas y transformacion(forEach, find, filter, map, reduce, sort)

- El objeto Math
- Class Date
*/

// Retornar functions:

// function mayorQue(number) {
//     return (mayor) => mayor > number;
// }

// const mayorQueDiez = mayorQue(10);
// const mayorQueOnce = (m) => m > 11;
// console.log(mayorQueDiez(12)); // true
// console.log(mayorQueOnce(5)); // false

// // Retornar functions con la estructura IF:

// function Operacion(operacion) {
//     if (operacion == "suma") {
//         return (n1, n2) => n1 + n2;
//     }else if (operacion == "resta") {
//         return (n1, n2) => n1 - n2;
//     }
// }

// const suma = Operacion("suma");
// const resta = Operacion("resta");

// console.log(suma(26, 12)); // 38
// console.log(resta(26, 12)); // 14

// Recibir functions por parametros:

// function porCadaUno(array, funcion) {
//     for (const elemento of array) {
//         funcion(elemento);
//     }
// }

// const numeros = [1, 2, 3, 4, 5];

// porCadaUno(numeros, console.log)

// let total = 0;

// function acumular(numero) {
//     total += numero;
// }

// function cadaUno(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

// let numbers = [1, 2, 3, 4, 5];
// cadaUno(numbers, acumular);

// console.log(total) // 15

// const numDuplicado = [];

// function duplicado(a, c) {
//     for (let i = 0; i < a.length; i++) {
//         c(a[i], i);
//     }
// }

// let numbersDuplicados = [1, 2, 2, 3, 4, 4, 5];
// duplicado(numbersDuplicados, (elemento) => {

//     numDuplicado.push(elemento * 2);
// })
// console.log(numDuplicado)

/* 
Ejemplo que simula el llamado a una API para obtener datos de usuarios, aplicando una función de orden superior para procesar cada "respuesta" de la API:
*/

// Creo una function para almacenar los usuarios
// let usuarios = [];

// function simularLlamadaAPI(array, funcion) {
//     for (let i = 0; i < array.length; i++) {
//     // Simulo un llamado a una API que devuelve un objeto con los datos del usuario
//     console.log(`Llamado a la API: ${array[i]}`)
//     funcion(array[i]);
//     };
// }

// let nombres = ["Juan", "Pedro", "Maria", "Ana"];

// simularLlamadaAPI(nombres, (nombre) => {
//     usuarios.push({name: nombre, id: usuarios.length + 1});
// })

// console.log(usuarios);

/* 
Metodos de busqueda y transformacion:
forEach(), find(), filter(), some(), map(), reduce(), sort() 
*/

/* Metodo forEach(): 

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => {
    console.log(numero);
});

// const arrayMixto = [1, "Hola", true, { nombre: "Juan" }, [1, 2, 3]];

// arrayMixto.forEach(elemento => {
//     if (typeof elemento === "number") {
//         console.log(`El elemento ${elemento} es un número.`);
//     } else if (typeof elemento === "string") {
//         console.log(`El elemento ${elemento} es un string.`);
//     } else if (typeof elemento === "boolean") {
//         console.log(`El elemento ${elemento} es un boolean.`);
//     } else if (typeof elemento === "object") {
//         console.log(`El elemento ${elemento} es un objeto.`);
//     }
// })

*/

/* Find: Compara por parametros */

// const cursos = [
//     { id: 1, nombre: "JavaScript", price: 11600, duration: 2 },
//     { id: 2, nombre: "Python", price: 5800, duration: 1 }
// ]

// const resultado = cursos.find((curso) => curso.nombre === "JavaScript");
// const resultado2 = cursos.find((curso) => curso.nombre === "C++");

// console.log(resultado);
// console.log(resultado2);

/* Filter: Compara por parametro, devuelve lo que busque en un array */

// const cursos = [
//     { id: 1, nombre: "C+", price: 11600, duration: 2 },
//     { id: 2, nombre: "C++", price: 5800, duration: 1 },
//     { id: 3, nombre: "React", price: 11600, duration: 2 },
//     { id: 4, nombre: "Vite", price: 5800, duration: 1 }
// ]

// const resultado = cursos.filter((curso) => {
//     curso.nombre.includes("C++");
// });

// console.log(resultado);

// const resultado2 = cursos.filter((curso) => curso.price > 10000);

// console.log(resultado2);

/* Some: Returns true o false (BOOLEAN) */

// const cursos = [
//     { id: 1, nombre: "C+", price: 11600, duration: 2 },
//     { id: 2, nombre: "C++", price: 5800, duration: 1 },
//     { id: 3, nombre: "React", price: 11600, duration: 2 },
//     { id: 4, nombre: "Vite", price: 5800, duration: 1 }
// ]

// console.log(cursos.some((curso) => curso.id === 0)); // false
// console.log(cursos.some((curso) => curso.id === 1)); // true
// console.log(cursos.some(curso => curso.price > 10000)); // true

/* Map: */

// const cursos = [
//     { id: 1, nombre: "C+", price: 11600, duration: "1 ano" },
//     { id: 2, nombre: "C++", price: 5800, duration: "1.6 anos" },
//     { id: 3, nombre: "React", price: 11600, duration: "2 anos" },
//     { id: 4, nombre: "Vite", price: 5800, duration: "1 ano" }
// ]

// const nombres = cursos.map((curso) => curso.duration);
// // console.log(nombres);
// const actualizacion = cursos.map((curso) => {
//     return {
//         nombres: curso.nombre,
//         priceConIVA: curso.price * 1.21
//     }
// })

// console.log(actualizacion);
// console.log(cursos);

/* Reduce: Obtener un unico valor (Recibe 2 parametros) */

// const number = [1, 2, 3, 4, 5];

// const total = number.reduce((acumulador, elemento) => acumulador + elemento, 0);    // El 0 es el valor inicial del acumulador

// console.log(total);

// const product = [
//     {id: 0, nombre: "Blusa", precio: 14900},
//     {id: 1, nombre: "Pantalón", precio: 19900},
//     {id: 2, nombre: "Remera", precio: 11900},
//     {id: 3, nombre: "Camisa", precio: 22900}
// ]

// // FIND: Metodo para buscar un producto segun su id:

// const itemFound = product.find(item => item.id === 0);

// // SOME: Metodo para verificar si hay algun producto que cumpla con una condicion:

// const hasProduct = product.some(item => item.nombre === "Remeron"); // Devuelve False

// // FILTER: Metodo para filtrar los productos segun una condicion:

// const productsFiltered = product.filter(item => item.precio > 15000);

// // MAP: Metodo para transformar cada elemento del array:

// const productsNames = product.map(item => item.nombre);

// // REDUCE: Metodo para reducir el array a un solo valor:

// const totalPrice = product.reduce((total, item) => total + item.precio, 0);

// console.log(itemFound);
// console.log(hasProduct);
// console.log(productsFiltered)
// console.log(productsNames);
// console.log(productsFiltered);

/* Ejercicios TAREA: 1 */

let productos = [
  {
    Prenda: "T-Shirt",
    Categoría: "Casual",
    Talla: "M",
    Color: "Red",
    Código: "A001",
    Precio: 15.99,
  },
  {
    Prenda: "Jeans",
    Categoría: "Bottomwear",
    Talla: "L",
    Color: "Blue",
    Código: "A002",
    Precio: 39.99,
  },
  {
    Prenda: "Jacket",
    Categoría: "Outerwear",
    Talla: "XL",
    Color: "Black",
    Código: "A003",
    Precio: 79.99,
  },
  {
    Prenda: "Dress",
    Categoría: "Formal",
    Talla: "S",
    Color: "Green",
    Código: "A004",
    Precio: 59.99,
  },
  {
    Prenda: "Shorts",
    Categoría: "Bottomwear",
    Talla: "M",
    Color: "Yellow",
    Código: "A005",
    Precio: 25.99,
  },
  {
    Prenda: "Sweater",
    Categoría: "Outerwear",
    Talla: "L",
    Color: "White",
    Código: "A006",
    Precio: 45.99,
  },
  {
    Prenda: "Hoodie",
    Categoría: "Casual",
    Talla: "XL",
    Color: "Grey",
    Código: "A007",
    Precio: 49.99,
  },
  {
    Prenda: "Skirt",
    Categoría: "Bottomwear",
    Talla: "S",
    Color: "Pink",
    Código: "A008",
    Precio: 34.99,
  },
  {
    Prenda: "Blazer",
    Categoría: "Formal",
    Talla: "M",
    Color: "Navy",
    Código: "A009",
    Precio: 99.99,
  },
  {
    Prenda: "Polo Shirt",
    Categoría: "Casual",
    Talla: "L",
    Color: "Blue",
    Código: "A010",
    Precio: 29.99,
  },
];

/* Ejercicios TAREA: 2 */

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
    prenda: "T-Shirt",
    categoria: "Casual",
    talle: "M",
    color: "Red",
    codigo: "A001",
    precio: 15.99,
  },
  {
    prenda: "Jeans",
    categoria: "Bottomwear",
    talle: "L",
    color: "Blue",
    codigo: "A002",
    precio: 39.99,
  },
  {
    prenda: "Jacket",
    categoria: "Outerwear",
    talle: "XL",
    color: "Black",
    codigo: "A003",
    precio: 79.99,
  },
  {
    prenda: "Dress",
    categoria: "Formal",
    talle: "S",
    color: "Green",
    codigo: "A004",
    precio: 59.99,
  },
  {
    prenda: "Shorts",
    categoria: "Bottomwear",
    talle: "M",
    color: "Yellow",
    codigo: "A005",
    precio: 25.99,
  },
  {
    prenda: "Sweater",
    categoria: "Outerwear",
    talle: "L",
    color: "White",
    codigo: "A006",
    precio: 45.99,
  },
  {
    prenda: "Hoodie",
    categoria: "Casual",
    talle: "XL",
    color: "Grey",
    codigo: "A007",
    precio: 49.99,
  },
  {
    prenda: "Skirt",
    categoria: "Bottomwear",
    talle: "S",
    color: "Pink",
    codigo: "A008",
    precio: 34.99,
  },
  {
    prenda: "Blazer",
    categoria: "Formal",
    talle: "M",
    color: "Navy",
    codigo: "A009",
    precio: 99.99,
  },
  {
    prenda: "Polo Shirt",
    categoria: "Casual",
    talle: "L",
    color: "Blue",
    codigo: "A010",
    precio: 29.99,
  },
];

// Filtrando el objeto por talle:
function filtradoTalle(arr, talle) {
  return arr.filter(function (item) {
    return item.talle === talle;
  });
}

// Probando si funciona la function:
const filtradoXTalle = filtradoTalle(productos, "M");
console.log(`Items encontrados con el talle:`, filtradoXTalle);

// Filtrando el objeto por color:
function filtradoColor(arr, color) {
  return arr.filter(function (item) {
    return item.color === color;
  });
}

// Probando si funciona la function:
const filtradoXColor = filtradoColor(productos, "Yellow");
console.log(`Items encontrados con el color:`, filtradoXColor);

// La suma de todos los productos:
function total(arr) {
  return arr.reduce(function (suma, productos) {
    return suma + productos.precio;
  }, 0);
}

// Probando si funciona la function:
const sumatotal = total(productos);
console.log(`El total de todos los productos:`, sumatotal);

// Function para ver los precios mas altos:
function mayorPrecio(arr) {
  return arr.reduce(function (max, productos) {
    if (productos.precio > max.precio) {
      return productos;
    } else {
      return max;
    }
  });
}

// Probando si funciona la function:
const masCaro = mayorPrecio(productos);
console.log(`El producto mas caro es:`, masCaro);

// Function para ver los precios mas bajos:
function menorPrecio(arr) {
  return arr.reduce(function (min, productos) {
    if (productos.precio < min.precio) {
      return productos;
    } else {
      return min;
    }
  });
}

// Probando si funciona la function:
const menosCaro = menorPrecio(productos);
console.log(`El producto mas barato es:`, menosCaro);

/* Ejercicios TAREA: 2 */

class CuentaBancaria {
  constructor(titular, saldo, numeroCuenta) {
    this.titular = titular;
    this.saldo = saldo;
    this.numeroCuenta = numeroCuenta;
  }

  Depositar(monto) {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`El monto del deposito es: ${monto}`);
    } else {
      console.log("El monto a depositar debe ser positivo.");
    }
  }

  Retirar(monto) {
    if (monto > 0 && this.saldo >= monto) {
      this.saldo -= monto;
      console.log(`El monto a retirar es: ${monto}`);
    } else if (monto > this.saldo) {
      console.log("Fondos insuficientes");
    } else {
      console.log("El monto a retirar debe ser positivo");
    }
  }
}

const cuentas = [
  { titular: "Juan Perez", saldo: 1500, numeroCuenta: 101 },
  { titular: "Ana Lopez", saldo: 2500, numeroCuenta: 102 },
  { titular: "Luis Martinez", saldo: 3000, numeroCuenta: 103 },
  { titular: "Maria Gonzalez", saldo: 1200, numeroCuenta: 104 },
  { titular: "Carlos Rivera", saldo: 500, numeroCuenta: 105 },
  { titular: "Sofia Ramirez", saldo: 2000, numeroCuenta: 106 },
  { titular: "Miguel Torres", saldo: 750, numeroCuenta: 107 },
  { titular: "Laura Sanchez", saldo: 4000, numeroCuenta: 108 },
  { titular: "Pedro Vargas", saldo: 100, numeroCuenta: 109 },
  { titular: "Lucia Fernandez", saldo: 1800, numeroCuenta: 110 },
];

// Function para devolver todos los nombres de los usuarios:
function obtenerListaTitulares(cuentas) {
  const titulares = cuentas.map((cuentas) => cuentas.titular);
  return titulares;
}
//Probando si funciona correctamente
const clientes = obtenerListaTitulares(cuentas);
console.log(clientes);

// Function para que nos devuelva true o false:
function verificarSiHayCuentaConSaldoMayor(cuentas, monto) {
  return cuentas.some((cuenta) => cuenta.saldo > monto);
}
//Probando si funciona correctamente
console.log(verificarSiHayCuentaConSaldoMayor(cuentas, 1000));

// Function para encontrar el usuario con el numero de cuenta:

function encontrarCuentaPorNumero(cuentas, numeroCuenta) {
  const usuario = cuentas.find(
    (cuenta) => cuenta.numeroCuenta === numeroCuenta
  );
  if (usuario) {
    return usuario;
  } else {
    return "Cuenta no encontrada";
  }
}

console.log(encontrarCuentaPorNumero(cuentas, 107));

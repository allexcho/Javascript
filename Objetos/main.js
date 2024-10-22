/*
Objetos en JavaScript
- Definicion y utilidad  - Propiedades y valores -  Function constructora(Constructor, instruccion new, uso del, This) - Metodos

Un objeto es una colección de propiedades y valores que se agrupan en una entidad. Se componene de un listado de pares clave-valor
Es decir, contienen propiedades y valores agrupados.

Sintaxis: {clave: valor, clave: valor,...}
*/

// Objeto Simple:

// const simple = {}

// // Objeto literal:

// const persona = {
//     nombre: 'Alex',
//     apellido: 'Cho',
//     edad: 26,
//     calle: 'Calle Falsa 123'
// }

// // Como obtenemos valores de un objeto: (Para obtener el valor de una propiedad, utilizamos la notacion de punto(.))

// console.log(persona.nombre) // Alex
// console.log(persona.apellido) // Cho
// console.log(persona['edad']) // 26
// console.log(persona['calle']) // Calle Falsa 123

// persona['nombre'] = 'Alexander' // Modificamos el valor de una propiedad
// console.log(persona.nombre) // Alexander

// persona.edad = 27 // Modificamos el valor de una propiedad
// console.log(persona.edad) // 27

// // Contructor de objetos: una funcion que se utiliza para crear nuevos objetos cada vez que sea necesario(new)

// function Persona(nombre, apellido, edad) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
// }

// const persona1 = new Persona('Alexander', 'Cho', 27)
// const persona2 = new Persona('Juan', 'Perez', 30)

// // Metodos en los objetos: Tambien son tecnicamente funciones que se pueden agregar a un objeto. Solo se limitan a tener acceso a las propiedades del objeto.

// // Function:

// function  f1 () {
//     return this
// }

// function usuario(nombre, apellido) {
//     this.nombre = nombre,
//     this.apellido = apellido
// }

// // Metodos en el objeto:

// let cadena = 'Hola Mundo'

// //  Propiedad de objeto string:

// console.log(cadena.length) // 13
// console.log(cadena.toUpperCase()) // HOLA MUNDO
// console.log(cadena.toLowerCase()) // hola mundo

// function Persona(nombre, apellido, edad) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad

//     // Metodo del objeto personalizado

//     this.saludar = function() {
//         console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
//     }
// }

// const persona3 = new Persona('Alex', 'Cho', 26)
// const persona4 = new Persona('Yeni', 'Perez', 29)
// persona3.saludar() // Hola, mi nombre es Alex Cho
// persona4.saludar() // Hola, mi nombre es Yeni Perez

// // Operadores en los objetos: (in, for...in)

// const usuario = {
//     nombre: 'Alex',
//     apellido: 'Cho',
//     edad: 26
// }

// console.log('nombre' in usuario) // true Porque la clave o propiedad 'nombre' existe en el objeto
// console.log('origen' in usuario) // false Porque la clave o propiedad 'origen' no existe en el objeto

// // Recorre cada propiedad del objeto y la imprime en consola

// for (const propiedad in usuario) {
//     console.log(propiedad, usuario[propiedad]) // nombre Alex, apellido Cho, edad 26
// }

// // Clases sirven para definir objetos besados en un patron, y imprime reutilizar codigo. proveen una sintaxis mas concisa y legible.

// // ES6: class es una forma mas limpia de crear objetos

// class Persona {
//     constructor(nombre, apellido, edad) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }
//     // Metodo del objeto personalizado
//     saludar() {
//         console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
//     }
// }

// const persona5 = new Persona('Alex', 'Cho', 26)
// persona5.saludar() // Hola, mi nombre es Alex Cho

// // Ejemplo producto:

// class producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre.toUpperCase() // Convierte el nombre a mayusculas
//         this.precio = parseFloat(precio) // Convierte el precio a numero
//         this.vendido = false
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21; // Calcula el precio con IVA
//     }
//     vender() {
//         this.vendido = true; // Marca el producto como vendido
//     }
// }

// const producto1 = new Producto('Remera', 150)
// const producto2 = new Producto('Pantalon', 250)

// producto1.sumaIva() // Suma IVA al producto1
// producto2.sumaIva() // Suma IVA al producto2
// producto1.vender() // Marca el producto1 como vendido
// producto2.vender() // Marca el producto2 como vendido

// /*
// Escriba un programa en JavaScript para crear una clase llamada 'Rectángulo' con propiedades de ancho y alto. Incluya dos métodos para calcular el área y el perímetro del rectángulo. Cree una instancia de la clase 'Rectángulo' y calcule su área y perímetro
// */

// class Rectangulo {
//     constructor(ancho, alto) {
//         this.ancho = ancho
//         this.alto = alto
//     }
//     calcularArea () {
//         return this.ancho * this.alto
//     }
//     calcularPerimetro () {
//         return 2 * (this.ancho + this.alto)
//     }
// }

// const rectangulo = new Rectangulo(5.3, 7.4)
// console.log(`Area del rectangulo es: ${rectangulo.calcularArea()}`)
// console.log(`Perimetro del rectangulo es: ${rectangulo.calcularPerimetro()}`)

/*
Escriba un programa en JavaScript que cree una clase llamada "BankAccount" con propiedades para el número de cuenta y el saldo. Incluya métodos para depositar y retirar dinero de la cuenta. Cree algunas instancias de la clase "BankAccount", deposite algo de dinero y retire una parte.
*/

// class BankAccount {
//     constructor(accountNumber, balance = 0) {
//         this.accountNumber = accountNumber
//         this.balance = balance
//     }
//     // Metodo para depositar plata:
//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount
//             console.log(`El monto del deposito es: $${amount}. Nuevo saldo: $${this.balance}`)
//         } else {
//             console.log("El monto a depositar debe ser positivo.")
//         }
//     }
//     // Metodo para retirar plata:
//     withdraw(amount) {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             console.log(`El monto retirado es: $${amount}. Nuevo saldo: $${this.balance}`)
//         } else {
//             console.log("Fondos insuficientes o monto invalido.")
//         }
//     }
// }

// const account1 = new BankAccount('94870479', 50000);
// // const account2 = new BankAccount(50000, 20000)

// // Simular depositar y retirar plata de la cuenta:

// account1.deposit(1400000);
// account1.withdraw(40000);

// // account2.deposit(10000);
// // account2.withdraw(5000);

// // for...in itera sobre las propiedades de las cuentas:

// console.log(`\nPropiedades de la cuenta 1: `)

// for (let key in account1) {
//     if (account1(key)) {
//         console.log(`${key}: ${account1[key]}`)
//     }
// }

/* Ejercicios Nuevos usando function CLASS */

class Product {
  constructor(sku, description, price) {
    this.sku = sku;
    this.description = description;
    this.price = price;
  }
  articulo() {
    if (this.sku) {
      console.log(
        `Articulo: ${this.sku}. \nDescription: ${this.description}. \nPrecio: ${this.price}`
      );
    } else {
      console.log(`No se encontro ningun articulo: ${this.sku}.`);
    }
  }
}

const producto = new Product("CA1", "Camisa rayada", 19900);
producto.articulo();

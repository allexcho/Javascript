/* Ejercicio 1: */

// let ingredientesDisponibles = [
//   "pasta",
//   "carne",
//   "salsa",
//   "queso",
//   "bechamel",
//   "especias",
//   "cebolla",
//   "ajo",
//   "zanahoria",
//   "vino",
// ];

// function prepararLasagna(ingredientesNecesarios, numeroDeCapa) {
//   /* Instruccion para preparar lasagna */
//   let resultado = {
//     sePuedePreparar: true,
//     tiempoTotal: 0,
//     ingredientesFaltantes: [],
//     mensaje: "",
//   };
//   /* Logica para verificar ingredientes disponibles */
//   for (let ingrediente of ingredientesNecesarios) {
//     if (!ingredientesDisponibles.includes(ingrediente)) {
//       resultado.ingredientesFaltantes.push(ingrediente);
//       resultado.sePuedePreparar = false;
//       /* Ve si falta algun ingrediente. */
//     }
//   }
//   /* Logica para calular tiempo base X capa */
//   let tiempoPorCapas = numeroDeCapa * 2;

//   /* Calcular tiempo adicional X ingrediente: */
//   let timepoAdicional = 0;
//   for (let ingrediente of ingredientesNecesarios) {
//     if (ingrediente === "bechamel") timepoAdicional += 10;
//     if (ingrediente === "carne") timepoAdicional += 8;
//     if (ingrediente === "vino") timepoAdicional += 5;
//   }
//   /* Tiempo total de preparacion */
//   resultado.tiempoTotal = tiempoPorCapas + timepoAdicional;

//   /* Determinar mensaje dependiendo del tiempo de preparacion */
//   if (resultado.sePuedePreparar) {
//     if (resultado.tiempoTotal < 30) {
//       resultado.mensaje = "¡Preparación rápida!";
//     } else if (resultado.tiempoTotal < 60) {
//       resultado.mensaje = "Preparación tiempo medio";
//     } else {
//       resultado.mensaje = "Preparación elaborada";
//     }
//   } else {
//     resultado.mensaje = `Faltan ingredientes: ${resultado.ingredientesFaltantes.join(
//       ","
//     )}`;
//   }
//   return resultado;
// }

// /* Ejemplos de uso (Llamarlos) */
// let recetaBasica = ["pasta", "salsa", "queso"]; // 3 capaz
// let recetaEspecial = ["pasta", "carne", "salsa", "queso", "bechamel", "vino"]; // 4 capas
// let recetaImposible = ["pasta", "salmon", "caviar"]; // 2 capas

// console.log("-------Receta basica(3 capas)-------");
// console.log(prepararLasagna(recetaBasica, 3));

// console.log("\n-------Receta basica(4 capas)-------");
// console.log(prepararLasagna(recetaEspecial, 4));

// console.log("\n-------Receta imposible(2 capas)-------");
// console.log(prepararLasagna(recetaImposible, 2));

/* Ejercicio 2: */

// class BibliotecaJuegos {
//   constructor() {
//     this.juegos = [];
//     this.prestamos = [];
//   }
//   agregarJuego(titulo, genero, consola) {
//     const games = {
//       id: this.juegos.length + 1,
//       titulo,
//       genero,
//       consola,
//       disponible: true,
//     };
//     this.juegos.push(games);
//   }
//   prestarJuego(id, usuario) {
//     for (let i = 0; i < this.juegos.length; i++) {
//       if (this.juegos[i].id === id) {
//         if (this.juegos[i].disponible === true) {
//           this.juegos[i].disponible = false;
//           const loan = {
//             idJuegos: id,
//             nombreUsuario: usuario,
//           };
//           this.prestamos.push(loan);
//         }
//         break;
//       }
//     }
//   }
//   mostrarJuegos() {
//     for (let i = 0; i < this.juegos.length; i++) {
//       let disponibilidad = "";
//       if (this.juegos[i].disponible === true) {
//         disponibilidad = "Si";
//       } else {
//         disponibilidad = "No";
//       }
//       console.log(
//         `ID: ${this.juegos[i].id}, Título: ${this.juegos[i].titulo}, Género: ${this.juegos[i].genero}, Consola: ${this.juegos[i].consola}, Disponible: ${disponibilidad}`
//       );
//     }
//   }
//   contarJuegos() {
//     let disponibles = 0;
//     let prestados = 0;
//     for (let i = 0; i < this.juegos.length; i++) {
//       if (this.juegos[i].disponible === true) {
//         disponibles++;
//       } else {
//         prestados++;
//       }
//     }
//     console.log(`Disponibles: ${disponibles} \nPrestados: ${prestados}`);
//   }
// }

// /* Probando agregarJuego */
// const biblioteca = new BibliotecaJuegos();
// biblioteca.agregarJuego("LOL", "Multiplayer online battle arena", "PC");
// biblioteca.agregarJuego("Valorant", "Shooter", "PC / Console");
// biblioteca.agregarJuego("Minecraft", "Survival Game", "PC / Console");
// console.log(biblioteca.juegos);

// /* Probando prestarJuego */

// biblioteca.prestarJuego(1, "Alex");
// console.log("Games in library:", biblioteca.juegos);
// console.log("loans:", biblioteca.prestamos);

// /* Probando mostrarJuego */

// biblioteca.mostrarJuegos();

// /* Probando contarJuegos */

// biblioteca.contarJuegos();

/* Ejercicio 3 */

// let addExpense = {
//   inical: 0,
//   gastos: []
// }

// function agregarGastos (auto, casa, comida, impuestos) {
//   let num = {
//     auto, 
//     casa,
//     comida, 
//     impuestos
//   }
//   let suma = (num.auto + num.casa + num.comida + num.impuestos)
//   addExpense.gastos.push(num)
//   addExpense.inical -= suma
// }

// function seeHistory() {
//   for (let i = 0; i < addExpense.gastos.length; i++) {
//     if (addExpense.gastos[i]) {
//       console.log(`Gasto General: \nAuto: ${addExpense.gastos[i].auto} \nCasa: ${addExpense.gastos[i].casa} \nComida: ${addExpense.gastos[i].comida} \nImpuestos: ${addExpense.gastos[i].impuestos}`)
//     }
//   }
// }

// function seeBalance() {
//   console.log(`Saldo restante: ${addExpense.inical}`)
// }

// addExpense.inical = 1600000
// agregarGastos(100000, 250000, 100000, 300000)
// seeHistory()
// seeBalance()

/* Ejercicio 4 */

let organizador = {
  tareas: [{
    descripcion: "Limpiar",
    asignado: "Alex",
    fecha: new Date,
    estado: false
  }]
}
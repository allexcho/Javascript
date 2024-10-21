/* ---------- Ejercicios nuevos ---------- */

// Ejercicio 1:

function calcularDescuento(precios, descuento) {
  let total = 0; // Iniciar algo.
  for (let i = 0; i < precios.length; i++) {
    total += precios[i];
  }
  return total - (total * descuento) / 100; // Formula para el descuento.
}
let precios = [56, 324, 54, 123, 762]; // Definir un arreglo con los precios de los productos
let descuento = 15;
let totalCompra = calcularDescuento(precios, descuento); // Llama a la funcion con los precios y descuentos
console.log(`El total de la compra con el descuento es: ${totalCompra}`);

// Ejercicio 2:

function calificaciones(calificacion) {
  let suma = 0;

  for (let i = 0; i < calificacion.length; i++) {
    suma += calificacion[i];
  }

  let promedio = suma / calificacion.length; // Calcula la suma dividiendo la calificaciones.

  if (promedio >= 6) {
    console.log(`Tu promedio es: Aprobada`);
  } else {
    console.log("Desaprobado");
  }
  // Cuerpo es la logica.
}

// El usuario mete los datos para que use la logica de calificaciones.
let notas = [7, 8, 4, 5, 7];
calificaciones(notas);

// Ejercicio 3:

function contadorPalabras(frase) {
  let palabras = frase.split(" ");

  let cantidadpalabras = palabras.length;

  return cantidadpalabras;
}
console.log(
  contadorPalabras(
    "Hola esto es una prueba para ver si funciona este bloque de codigo!"
  )
);

// Ejercicio 4:

function ConvertirTemperatura(temperaturas) {
  let fahrenheit = [];
  for (let i = 0; i < temperaturas.length; i++) {
    let F = (temperaturas[i] * 9) / 5 + 32; // Convertidor
    fahrenheit.push(F); // Agrega la temperatura covertida al array.
  }
  return fahrenheit;
}
let celsius = [20, 16, 5, 2, 4, 19, 37];
console.log(ConvertirTemperatura(celsius));

// Ejercicio 5:

function calcularPropina(total, servicio) {
  let porcentajePropina;

  if (servicio === "Bueno") {
    porcentajePropina = 0.15;
  } else if (servicio === "Regular") {
    porcentajePropina = 0.1;
  } else if (servicio === "Malo") {
    porcentajePropina = 0.05;
  } else {
    return "Por favor ingresa como te fue el servicio! Bueno, Regular o Malo.";
  }
  let totalPorcentaje = total * porcentajePropina;
  return totalPorcentaje;
}
console.log(calcularPropina(120000, "Bueno"));
console.log(calcularPropina(120000, "Regular"));
console.log(calcularPropina(120000, "Malo"));
console.log(calcularPropina(120000, "Divino"));

// Ejercicio 6:

function tablaMultiplicacion(numero) {
  for (let i = 1; i < 10; i++) {
    let number = numero * i;
    console.log(`${numero} x ${i} = ${number}`);
  }
}
tablaMultiplicacion(5);

// Ejercicio 7:

function filtrarNumeros(numeros) {
  let numerosPares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }
  console.log(`Los numeros pares son: ${numerosPares}`);
}
filtrarNumeros([123, 42, 34, 125, 764, 352, 923, 52]);

// Ejercicio 8:

function contadorVocales(palabra) {
  let v = 0;
  let vocales = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i].toLowerCase())) {
      v++;
    }
  }
  console.log(`La palabra tiene: ${v} vocales`);
}
contadorVocales("La clase de hoy es rompe cabezas!");

// Ejercicio 9:

function calcularPuntosFidelidad(totalGastado) {}

// Ejercicio 10:

let biblioteca = [];

function organizadorLibros(titulo, autor, genero) {
  let libro = [titulo, autor, genero];
  biblioteca.push(libro);
  console.log(`Libro agregado: ${titulo}`);
}

function listaLibros() {
  if (biblioteca.length === 0) {
    console.log("La biblioteca está vacía!");
  } else {
    console.log("\nLista de libros\n"); // Salto de línea
    for (let i = 0; i < biblioteca.length; i++) {
      console.log(
        i +
          1 +
          ". " +
          biblioteca[i][0] +
          " por " +
          biblioteca[i][1] +
          " (" +
          biblioteca[i][2] +
          ")"
      );
    }
  }
}

function buscarGenero(genero) {
  let librosEncontrados = [];
  for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i][2] === genero) {
      librosEncontrados.push(biblioteca[i]);
    }
  }
  if (librosEncontrados.length === 0) {
    console.log(`\nNo se encontraron libros del género ${genero}\n`); // Salto de línea
  } else {
    console.log(`\nLibros del género: ${genero}\n`); // Salto de línea
    for (let i = 0; i < librosEncontrados.length; i++) {
      console.log(
        `Libros encontrados: ${librosEncontrados[i][0]} por ${librosEncontrados[i][1]}`
      );
    }
  }
}

function gestionarBiblioteca() {
  organizadorLibros("El Quijote", "Miguel de Cervantes", "Novela");
  organizadorLibros(
    "Cien años de soledad",
    "Gabriel García Márquez",
    "Realismo mágico"
  );
  organizadorLibros("1984", "George Orwell", "Ciencia ficción");
  organizadorLibros("Dune", "Frank Herbert", "Ciencia ficción");
  listaLibros();
  buscarGenero("Ciencia ficción");
}

gestionarBiblioteca();

// Ejercicio Anterior 1:

// Ejercicio Anterior 5:

function convert(words) {
  let indice = words.split(" ");
  for (let i = 0; i < indice.length; i++) {
    indice[i] = indice[i][0].toUpperCase() + indice[i].substring(1);
  }
  return indice.join(" ");
}
let convertedWords = "el veloz zorro marron";
console.log(convert(convertedWords));

--------------EJERCICIOS SOLUCIONADOS----------

Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de un equipo. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

respuesta:

const equipo = ['HOMERO', 'APU', 'MOE', 'MR. BURNS'];
for (let index = 0; index < equipo.length; index++) {
    console.log(`Posicion ${index} y jugador ${equipo[index]}`);
}

-------------------------------------
Lista de tareas pendientes usando un ciclo for:

const tareasPendientes = ['Comprar víveres', 'Lavar ropa', 'Pagar facturas', 'Llamar al médico'];


for (let i = 0; i < tareasPendientes.length; i++) {
    if (i < 2) {
        console.log(`Tarea urgente: ${tareasPendientes[i]}`);
    } else {
        console.log(`Tarea para después: ${tareasPendientes[i]}`);
    }
}

----------------------------------
1.Crea un programa donde hagas un conteo de vocales en palabras usando while.
trabaja con este array
const palabras = ['CASA', 'PERRO', 'ELEFANTE', 'OSO'];

--------------------------------------------
El for...of es una estructura de control en JavaScript que se utiliza para iterar sobre elementos iterables como arrays, strings, mapas, sets, y otros objetos que implementan el protocolo de iteración. Es una forma más moderna y conveniente de iterar sobre estos elementos en comparación con el for tradicional o el forEach.
ejemplo basico:
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}


2.Crea un programa para clasificar numeros impares de los pares usando el for...of y dentro del bucle usar una estructura if para generar las condiciones
const numeros = [23, 54, 12, 87, 5, 36];

3.Escriba un programa JavaScript simple para unir todos los elementos de la siguiente matriz en una cadena.
Matriz de ejemplo : myColor = ["Red", "Green", "White", "Black"];
Resultado esperado :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

4.Escribe un programa en JavaScript para encontrar el elemento más frecuente en una matriz.
Matriz de ejemplo : const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Salida de ejemplo : a ( 5 veces )

5.Tenemos las siguientes matrices:
Para este ejercicio usa ciclo for y estructura if
const color = ["Azul", "Verde", "Rojo", "Naranja", "Violeta", "Índigo", "Amarillo"];
const o = ["th", "st", "nd", "rd"]
Escribe un programa en JavaScript para mostrar los colores de la siguiente manera:
"La primera opción es Azul".
"La segunda opción es Verde".
"La tercera opción es Rojo".
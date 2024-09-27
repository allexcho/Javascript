   CICLO WHILE
permite crear bucles que se ejecutan cero o más veces, dependiendo de la condición indicada.
El funcionamiento del bucle while se resume en: mientras se cumpla la condición indicada, repite las instrucciones incluidas dentro del bucle.

let repetir = true;
while(repetir){
    console.log("Al infinito y...¡Más allá!");
}

Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

CICLO Switch
está especialmente diseñada para manejar de forma sencilla múltiples condiciones sobre la misma variable (técnicamente se podría resolver con un if, pero el uso de switch es más ordenado).
Cada condición se evalúa y, si se cumple, se ejecuta lo que esté indicado dentro de cada case.
switch(numero) {
 case 5:
   ...
   break;
 case 8:
   ...
   break;
 case 20:
   ...
   break;
 default:
   ...
   break;
}

Ejemplo aplicado: WHILE y SWITCH


Algoritmo que hace la operación según la entrada, pero ignora la ejecución de bloque si la entrada es en “ESC”.

let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ana");
            break;
        case "JUAN":
            alert("HOLA juan");
            break;
       default:
           alert("¿quien sos?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}

otro ejemplo:
// Solicitamos al usuario ingresar un número mediante prompt
let numero = parseInt(prompt("Ingrese un número:"));

// Definimos un ciclo for para repetir 5 veces
for (let i = 1; i <= 5; i++) {
    // Sumamos un número (en este caso, el número de iteración) al número ingresado por el usuario
    let resultado = numero + i;
    // Mostramos el resultado por cada repetición
    console.log("Resultado en la repetición " + i + ": " + resultado);
}

-------------------------EJERCICIOS PARA QUE HAGAS(usando la estructura IF)------------------------------
1.Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.
Solicitar al usuario un (1) número.

2.Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.

3.Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

---------------------------------------------------------------------------------------

--------------------EJERCICIOS USANDO CICLOS----------------------------------
1.Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.

2.Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.

3.Escriba un bucle for de JavaScript que itere de 0 a 15. En cada iteración, verifica si el número actual es par o impar y muestra un mensaje en la pantalla.
Ejemplo de salida:
"0 es par"
"1 es impar"
"2 es par"

4.Escribe un programa en JavaScript que itere números enteros del 1 al 100. Pero para los múltiplos de tres escribe "Fizz" en lugar del número y para los múltiplos de cinco escribe "Buzz". Para los números múltiplos de tres y cinco escribe "FizzBuzz".

--------------------------------------------------------------------------

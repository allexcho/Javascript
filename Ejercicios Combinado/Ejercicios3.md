1. Instrucciones - Preparación de Lasaña Avanzada
   Lucian quiere preparar una lasaña especial para su novia, pero necesita un sistema más sofisticado que le ayude a:

Verificar si tiene todos los ingredientes necesarios
Calcular tiempos de preparación según las capas y tipos de ingredientes
Obtener mensajes sobre la complejidad de la receta

Debes implementar lo siguiente:
Crear un array ingredientesDisponibles que contenga los siguientes ingredientes:
pasta, carne, salsa, queso, bechamel, especias, cebolla, ajo, zanahoria, vino

Crear una función llamada prepararLasagna que reciba dos parámetros:
ingredientesNecesarios: lista de ingredientes que necesita la receta
numeroDeCapa: cantidad de capas que tendrá la lasaña

La función debe devolver un objeto con las siguientes propiedades:
sePuedePreparar: verdadero o falso según si están disponibles todos los ingredientes
tiempoTotal: tiempo total de preparación en minutos
ingredientesFaltantes: lista de ingredientes que no están disponibles
mensaje: mensaje sobre el tipo de preparación

Implementar la lógica de cálculo de tiempo donde:

Cada capa toma 2 minutos en prepararse
Ingredientes especiales añaden tiempo extra:

bechamel: +10 minutos
carne: +8 minutos
vino: +5 minutos
Implementar mensajes según el tiempo total:

Menos de 30 minutos: "¡Preparación rápida!"
Entre 30 y 60 minutos: "Preparación tiempo medio"
Más de 60 minutos: "Preparación elaborada"

Si faltan ingredientes, el mensaje debe indicar cuáles faltan

Pruebas a realizar:
Crear una receta básica con: ["pasta", "salsa", "queso"] y 3 capas
Crear una receta especial con: ["pasta", "carne", "salsa", "queso", "bechamel", "vino"] y 4 capas
Crear una receta imposible con: ["pasta", "salmon", "caviar"] y 2 capas
########################################################

2. Crea un Sistema de Biblioteca de Videojuegos
   Debes crear una clase llamada BibliotecaJuegos que gestione una biblioteca de videojuegos con las siguientes funcionalidades:

Arrays para juegos y préstamos
Métodos simples
Funciones básicas:

agregarJuego: Agrega un nuevo juego al array

prestarJuego: Marca un juego como prestado

mostrarJuegos: Muestra la lista de juegos

contarJuegos: Cuenta juegos disponibles y prestados
Estructuras usadas:
Arrays
Objetos simples
Ciclo for básico
Condicionales if
Cada juego es un objeto con:
id
titulo
genero
consola
disponible
Cada préstamo es un objeto con:
idJuego
nombreUsuario

3) Registro de Gastos Semanales:
Usa objetos para organizar los gastos
Implementa arrays para guardar el historial
Incluye funciones con parámetros para agregar gastos y calcular balances

4) Organizador de Tareas del Hogar:
Combina objetos para representar tareas
Usa arrays para almacenar múltiples tareas
Incluye funciones con parámetros para gestionar el estado de las tareas
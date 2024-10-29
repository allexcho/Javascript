/* Ejercicio 1: */

// Verificar ingredientes necesarios \\
// Calcular tiempos
// Obtener mensaje sobre receta

let ingredientesDisponibles = ['pasta', 'carne', 'salsa', 'queso', 'bechamel', 'especias', 'cebolla', 'ajo', 'zanahoria', 'vino'];

function prepararLasagna(ingredientesNecesarios, numeroDeCapa) {
    /* Instruccion para preparar lasagna */
    let resultado = {
        sePuedePreparar: true,
        tiempoTotal: 0,
        ingredientesFaltantes: [],
        mensaje: ""
    }
    /* Logica para verificar ingredientes disponibles */
    for (let ingrediente of ingredientesNecesarios) {
        if (!ingredientesDisponibles.includes(ingrediente)) {
            resultado.ingredientesFaltantes.push(ingrediente)
            resultado.sePuedePreparar = false
            /* Ve si falta algun ingrediente. */
        }
    }
    /* Logica para calular tiempo base X capa */
    let tiempoPorCapas = numeroDeCapa * 2

    /* Calcular tiempo adicional X ingrediente: */
    let timepoAdicional = 0;
    for (let ingrediente of ingredientesNecesarios) {
        if (ingrediente === "bechamel") timepoAdicional += 10
        if (ingrediente === "carne") timepoAdicional += 8
        if (ingrediente === "vino") timepoAdicional += 5
    }
    /* Tiempo total de preparacion */
    resultado.tiempoTotal = tiempoPorCapas + timepoAdicional

    /* Determinar mensaje dependiendo del tiempo de preparacion */
    if (resultado.sePuedePreparar) {
        if (resultado.tiempoTotal < 30) {
            resultado.mensaje = "¡Preparación rápida!"
        } else if (resultado.tiempoTotal < 60) {
            resultado.mensaje = "Preparación tiempo medio"
        } else {
            resultado.mensaje = "Preparación elaborada"
        }
    } else {
        resultado.mensaje = `Faltan ingredientes: ${resultado.ingredientesFaltantes.join(",")}`
    }
    return resultado
}

/* Ejemplos de uso (Llamarlos) */
let recetaBasica = ["pasta", "salsa", "queso"]  // 3 capaz
let recetaEspecial = ["pasta", "carne", "salsa", "queso", "bechamel", "vino"]   // 4 capas
let recetaImposible = ["pasta", "salmon", "caviar"] // 2 capas

console.log('-------Receta basica(3 capas)-------')
console.log(prepararLasagna(recetaBasica, 3))

console.log('\n-------Receta basica(4 capas)-------');
console.log(prepararLasagna(recetaEspecial, 4))

console.log('\n-------Receta imposible(2 capas)-------');
console.log(prepararLasagna(recetaImposible, 2))

/* Ejercicio 2: */
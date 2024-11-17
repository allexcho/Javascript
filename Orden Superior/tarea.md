----------------EJEMPLO DE FUNCION CON METODOS---------------------

const productos = [
{ Artículo: 'caña okuma', CantIng: 6, peso: 0.25, Colores: 'Negro', Talle: 10, Códigos: 23, precio: 50000 },
{ Artículo: 'caña forest', CantIng: 15, peso: 0.20, Colores: 'Negro y amarillo', Talle: 10, Códigos: 23, precio: 42000 },
{ Artículo: 'campera salomon', CantIng: 3, peso: 1.25, Colores: 'Negro y azul', Talle: 10, Códigos: 23, precio: 300000 },
{ Artículo: 'zapatilla Columbia', CantIng: 10, peso: 1.15, Colores: 'Negro', Talle: 10, Códigos: 23, precio: 350000 }
];

// Función principal que encapsula otras funciones
const operacionesProductos = (productos) => {
// Sirve para obtener lista de nombres de productos
const obtenerListaNombres = () => productos.map(producto => producto.Artículo);

    // Verificar si hay productos que cumplen cierta condición
    const verificarCondicion = (condicion) => productos.some(condicion);

    // Encuentra producto por nombre específico
    const encontrarProductoPorNombre = (nombre) => productos.find(producto => producto.Artículo === nombre);

    // Llamadas a las funciones internas y resultados
    return {
        listaNombres: obtenerListaNombres(),
        hayProductoPrecioMayor100000: verificarCondicion(producto => producto.precio > 100000),
        productoBuscado: encontrarProductoPorNombre('caña forest')
    };

};

// Ejecución de operaciones y muestra de resultados
const resultados = operacionesProductos(productos);
console.log('Lista de nombres de productos:', resultados.listaNombres);
console.log('¿Hay algún producto con precio mayor a 100000?', resultados.hayProductoPrecioMayor100000);
console.log('Producto encontrado:', resultados.productoBuscado);

---

TAREAS DE FUNCIONES CON METODOS

1. Operaciones con una lista de prendas de ropa.
   Instrucciones:

Modifica la lista de prendas proporcionadas para que refleje tu propio catálogo de ropa. Asegúrate de incluir al menos 5-10 prendas con diferentes atributos como prenda, categoría, talla, color, código y precio.
Agrega más funcionalidades a la función operacionesPrendas()que se proporciona. Algunas ideas:

Crear una función para filtrar prendas por talla o color.
Implementar una función que calcule el valor total del inventario.
Agregar una función que encuentre la prenda más cara o más barata del catálogo.

## Prueba las nuevas funcionalidades que has agregado y verifica que los resultados sean los esperados. Puedes usar la consola de JavaScript para imprimir los resultados.

2. Operaciones con una lista de cuentas bancarias.
   Instrucciones:

Crea una clase CuentaBancariaque tenga los siguientes atributos y métodos:

Atributos:
titular: Nombre del titular de la cuenta.
saldo:Monto actual en la cuenta.
numeroCuenta:Número de cuenta bancaria.

Métodos:
depositar(monto): Agrega el monto especificado al saldo de la cuenta.
retirar(monto): Sustrae el monto especificado del saldo de la cuenta.
consultarSaldo(): Devuelve el saldo actual de la cuenta.

Crea una lista de al menos 5-10 cuentas bancarias utilizando la clase CuentaBancaria. Asegúrese de incluir diferentes titulares, saldos y números de cuenta.
Implementa las siguientes funcionalidades en una función de llamada operacionesCuentas(cuentas):

obtenerListaTitulares(): Devuelve una lista con los nombres de los titulares de todas las cuentas.
verificarSiHayCuentaConSaldoMayor(monto): Verifica si existe alguna cuenta con un saldo mayor al monto especificado.
encontrarCuentaPorNumero(numeroCuenta): Encuentra y devuelve la cuenta con el número de cuenta especificado.

Prueba las nuevas funcionalidades y verifica que los resultados sean los esperados. Puedes usar la consola de JavaScript para imprimir los resultados.

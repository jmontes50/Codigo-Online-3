//App.js es el script principal
//1. Tener MockAPI Listo - ✔
//2. Obtener los datos (GET) - ✔
//3. Convertir esos datos a Elementos de HTML - 
//4. Crear desde el navegador, POST (PUT, DELETE)
//5. Carrito.....

import {Comunicaciones} from "./Comunicacion.mjs"
import {Interface} from "./Interfaz.mjs"

let comunicacion = new Comunicaciones()
let interfaz = new Interface()

let getProductos = () => {
  comunicacion.obtenerProductos()
  .then(productos => {
    // console.table(productos)
    interfaz.imprimirProductos(productos)
  })
  .catch(err => console.log(err))
}
getProductos()


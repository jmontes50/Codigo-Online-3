//App.js es el script principal
//1. Tener MockAPI Listo - ✔
//2. Obtener los datos (GET) - ✔
//3. Convertir esos datos a Elementos de HTML - ✔
//4. Crear desde el navegador, POST (PUT, DELETE)
//4.1 Detectar el evento click de un botón, para crear ✔
//4.2 Vamos a invocar a un modal-✔
//4.3 tener un método para enviar los datos - ✔
//5. obtener los datos de los input del form, del modal - ✔
//6. mandar los datos al metodo y crear el producto - ✔

import {Comunicaciones} from "./Comunicacion.mjs"
import {Interface} from "./Interfaz.mjs"

let comunicacion = new Comunicaciones()
let interfaz = new Interface()

let btnCrear = document.getElementById("btn-crear")
let modalCrear = new bootstrap.Modal(document.getElementById("modal-crear"))
let btnGuardar = document.getElementById("btn-guardar")

let getProductos = () => {
  comunicacion.obtenerProductos()
  .then(productos => {
    // console.table(productos)
    interfaz.imprimirProductos(productos)
  })
  .catch(err => console.log(err))
}
getProductos()

btnCrear.addEventListener("click", () => {
  modalCrear.show()
})

btnGuardar.addEventListener("click", () => {
  let formulario = document.getElementById("form-crear")
  let nuevoProducto = {
    //cuando creamos un nuevo recurso, no indicamos el id
    nombre: formulario["nombre"].value,
    descripcion: formulario["descripcion"].value,
    precio: formulario["precio"].value,
  }
  // console.table(nuevoProducto)
  comunicacion.crearProducto(nuevoProducto)
  .then(productoCreado => {
    //ya creamos exitosamente nuestro producto
    // console.log(productoCreado)
    formulario.reset()
    modalCrear.hide()
    getProductos() //obtengo otra vez los productos
  })
  .catch(err => console.log(err))
})
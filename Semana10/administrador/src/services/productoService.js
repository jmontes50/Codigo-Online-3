import axios from "axios"

const URL = "https://609f105d5f32be00171cd33b.mockapi.io/Productos"

const obtenerProductos = async () => {
  try {
    let {data} = await axios.get(URL)
    return data
  } catch (error) {
    throw error
  }
}

{
// const obtenerProductosPromesa = () => {
//   return new Promise((resolve, reject) => {
//     axios.get(URL)
//     .then((respuesta) => resolve(respuesta))
//     .catch((error)=> reject(error))
//   })
// }
}

const crearProducto = async(nuevoProducto) => {
  try {
    
  } catch (error) {
    
  }
}

export {
  obtenerProductos
}
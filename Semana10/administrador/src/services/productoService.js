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
    let headers = {
      "Content-Type":"application/json"
    }
    //AWAIT axios.post(URL, nuevoRecurso, cabeceras)
    //headers, en caso de ser un post simple (mandar un obj es opcional), pero si mandamos mas info, como tokens u otros datos es necesrio agregarlo
    let { data } = await axios.post(URL, nuevoProducto, {headers})
    return data
  } catch (error) {
    throw error
  }
}

export {
  obtenerProductos,
  crearProducto
}
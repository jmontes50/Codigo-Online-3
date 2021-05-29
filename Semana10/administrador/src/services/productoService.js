import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API}/Productos`

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

const editarProducto = async (productoEditado, id) => {
  try {
    let headers = {
      "Content-Type":"application/json"
    }
    let { data } = await axios.put(`${URL}/${id}`, productoEditado, {headers})
    return data
  } catch (error) {
    console.log(error)
  }
}

const obtenerProductoPorId = async (id) => {
  try {
    let { data } = await axios.get(`${URL}/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  obtenerProductos,
  crearProducto,
  editarProducto,
  obtenerProductoPorId
}
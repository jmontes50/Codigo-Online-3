const URL = "https://609f105d5f32be00171cd33b.mockapi.io/Productos"

class Comunicaciones{
  obtenerProductos(){
    //que me devuelva directamente los datos
    return new Promise((resolve, reject) => {
      fetch(URL)
      .then(respuesta => {
        return respuesta.json() //tengo la respuesta con el status
      })
      .then(productos => {
        resolve(productos) //tengo los datos ya en JS
      })
      .catch(error => reject(error)) //en caso de error
    })
  }

  //aquí pueden ir mas métodos
}

export {
  Comunicaciones
}
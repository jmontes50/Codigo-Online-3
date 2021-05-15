// let traerData = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("Datos Obtenidos")
//     // reject("Error al obtener Datos")
//   })
// }

//async me sirve para retornar una nueva Promesa
let traerData = async () => {
  // return "Datos Obtenidos" //resolve
  throw "Error al obtener Data" //reject
}

// traerData()
// .then(rpta => console.log(rpta))
// .catch(error => console.log(error))

let usarData = async () => {
  try { //Intenta hace esto sin errores
    let rpta = await traerData()
    console.log(rpta)
  } catch (error) { //Ok si hay errores captura el error
    console.log(error)
  }
}

usarData()
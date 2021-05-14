//fetch(url)
//GET - Obteniendo Datos/Recursos/Documentos
fetch("https://reqres.in/api/users?page=2")
.then((respuesta) => {
  // console.log(respuesta); status, 
  // console.log(respuesta) //guia de remisión
  return respuesta.json() //.json() va a parsear/convertir la rpta
})
.then((datos) => {
  console.log(datos)
})

//POST - Enviando Datos, Crear un Recurso

//nuevoUsuario a mandar
let nuevoUsuario = {
  name:"Lezly",
  job:"Tutora"
}

//cabeceras - Guía de remisión
let cabecera = {
  //método HTTP, tipo_contenido, body = datos = nuevoUsuario
  method:'POST', //PUT, DELETE
  headers:{
    'Content-Type':'application/json'//api sepa como procesarlo
  },
  body: JSON.stringify(nuevoUsuario) //se convierta en un JSON de texto plano
}

//fetch(url, cabecera_con_body)
fetch("https://reqres.in/api/users", cabecera)
.then((respuesta) => {
  // console.log("POST",respuesta)
  return respuesta.json()
})
.then((datosCreados) => {
  console.log(datosCreados)
})
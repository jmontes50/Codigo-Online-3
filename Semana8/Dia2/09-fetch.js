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

//Mockapi GET
fetch("https://609f105d5f32be00171cd33b.mockapi.io/alumnos")
.then((respuesta) => {
  return respuesta.json() //status:code, headers ❌no hay datos
})
.then((alumnos) => {
  console.log(alumnos) //✔ya tengo los datos
})
.catch((error) => {
  console.log(error)
})

//PUT

let alumnoEditado = {
  nombres:"Ash",
  apellidos:"Ketchup"
}

let configuracion = {
  method:"PUT",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(alumnoEditado)
}

//endpoint -> url/api/v1/usuario/:id , los : representan un parámetro que hay que indicarle
fetch("https://609f105d5f32be00171cd33b.mockapi.io/alumnos/2", configuracion)
.then((respuesta) => {
  // if(respuesta.status !== 200){
  //   //ejecutar acción
  // }
  return respuesta.json()
})
.then((alumnoModificado) => {
  console.log(alumnoModificado)
})
.catch((error) => {
  console.log(error)
})

//Axios
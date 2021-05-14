//fetch(url)
//GET
fetch("https://reqres.in/api/users?page=2")
.then((respuesta) => {
  // console.log(respuesta);
  return respuesta.json() //.json() va a parsear/convertir la rpta
})
.then((datos) => {
  console.log(datos)
})
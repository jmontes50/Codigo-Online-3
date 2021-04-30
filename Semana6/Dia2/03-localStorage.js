let nombre = prompt("Ingresa tu nombre");

//localStorage.setItem("clave de lo guardado",valor de lo que este guardando)
localStorage.setItem("miNombre",nombre);

//setTimeout(function(){}, y el tiempo a ejecutar esa funcion en ms)
setTimeout(function(){
  //getItem("clave") obtiene algo del localStorage
  let obtenido = localStorage.getItem("miNombre");
  alert(obtenido)
}, 4000)

setTimeout(function(){
  //elimina algo del localStorage por su nombre
  localStorage.removeItem("miNombre")
},10000) //todo funca con ms

//TODO LO QUE GUARDEMOS EN EL LOCALSTORAGE ES STRING
localStorage.setItem("saludo", 8);

let obj = {
  fruta:"manzana",
  colores:["verde","roja","mixta"],
  tamanio:10,
  sabor:"dulce y ácida"
}

//JSON.stringify convierte JS a texto
let objAJSON = JSON.stringify(obj);
console.log(objAJSON)

//y recien lo guardamos en el LocalStorage
localStorage.setItem("JSON",objAJSON);

setTimeout(function(){
  let JSONobtenido = localStorage.getItem("JSON")
  let JSONdeVuelta = JSON.parse(JSONobtenido)
  console.log(JSONdeVuelta)
},2000)


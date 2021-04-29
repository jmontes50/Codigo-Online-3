//document va a contener todos los nodos (que son objetos) creados por nuestro HTML
//con nodos me refiero a cada etiqueta

//document.getElementById("id_de_elemento")
let title = document.getElementById("titulo");
console.log(title);

title.innerHTML = "Nuevo Título App";
//css -> border-radius => js -> borderRadius
//de kebab-case a camelCase
title.style.backgroundColor = "orangered";
title.style.color = "white";

//podemos obtener una lista de elementos
let misLIs = document.getElementsByClassName("lista__item");

console.log(misLIs)
//Parece un arreglo se ve como arreglo pero es un HTML Collection

let arregloLi = Array.from(misLIs);
console.log(arregloLi)

//querySelector obtendrá un elemento pero usando un selector como si fuera CSS
let subtitulo = document.querySelector("#subtitulo");
console.log(subtitulo);

let cajitas = document.querySelectorAll(".cajita");
console.log(cajitas);

cajitas.forEach(function(caja){
  caja.innerHTML = "contenido caja";
  caja.style.backgroundColor = "steelblue";
})
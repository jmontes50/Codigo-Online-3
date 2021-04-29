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

//Jugando con contenido

let divContenido = document.getElementById("contenido");

divContenido.innerHTML = `<h1>Título Contenido</h1>
                            <p id="parrafo">texto</p>`;

//1.creamos el elemento
let lista = document.createElement("ul");

//2.lo añadimos al DOM como un nodo más
divContenido.appendChild(lista);

let series = [
  "Falcon and the Winter Soldier",
  "The Young Pope",
  "¿Quién mato a Sara?",
  "WandaVision",
  "Sherlock",
  "Grey Anatomy",
  "Breaking Bad",
  "The Sopranos",
  "The Good Doctor",
  "The Office"
];

let textoLI = "";
series.forEach(function(programa){
  textoLI = textoLI + `<li>${programa}</li>`
})

lista.innerHTML = textoLI;

let miParrafo = document.getElementById("parrafo");
//si no me aseguro que un elemento agregado con innerHTML se haya agregado antes voy a tener errores o un undefined
console.log(miParrafo)
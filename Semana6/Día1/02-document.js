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

//me va a permitir agregar una clase a un elemento
miParrafo.classList.add("resaltado")

miParrafo.classList.add("redondeado")

miParrafo.classList.remove("resaltado")

console.log(miParrafo.classList)

//va a ejecutar un bloque de codigo en intervalos
//setInterval(function, tiempo_en_ms)
window.setInterval(function(){
  //toggle, si encuentra una clase css, la quita y si no la encuentra la agrega
  miParrafo.classList.toggle("resaltado");
}, 500);

//setTimeout ejecuta el codigo en un determinado tiempo
setTimeout(function(){
  miParrafo.innerHTML = "Break a eso de las 9";
}, 5000);

let input = document.getElementById("contacto");

// setAttribute("nombre_del_Atributo","valor del atributo")
input.setAttribute("type","number")

//como creo un elemento con JS

let imagen = document.createElement("img");

divContenido.appendChild(imagen)

imagen.setAttribute("src","https://images.unsplash.com/photo-1619614573488-6066b9e6278e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60");

let imagenes = [
  "https://images.unsplash.com/photo-1619604124113-38094c57e76b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1619597285851-c4a04326a7dd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1619629501066-3721fc778449?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1619449947405-6aa13108371a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
]

let rotarImagenes = setInterval(function(){
  let numeroAleatorio = Math.random() * (imagenes.length - 1) //0.5 = 1.5
  numeroAleatorio = Math.floor(numeroAleatorio) //redondea un numero hacia abajo
  
  imagen.setAttribute("src", imagenes[numeroAleatorio])
},1000)

// clearInterval(rotarImagenes)
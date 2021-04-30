// console.log(document);

let divContenido = document.getElementById("contenido")

console.log(divContenido);

//innerHTML maneja el contenido HTML de un elemento como si fuera Texto
divContenido.innerHTML = "<h1>Mi Título</h1>";

//Crear Nodos de HTML
let titulo2 = document.createElement("h2");

//appendChild agregar un nodoHTML como hijo de otro nodoHTML
divContenido.appendChild(titulo2);

//innerText cambio el contenido de un elemento, solo el texto
titulo2.innerText = "Segundo Título";

let imagen = document.createElement("img");

//appendChild => push
//prepend al inicio
divContenido.prepend(imagen)

imagen.setAttribute("src","https://i.hurimg.com/i/hdn/75/0x0/5e634ba7c03c0e1da8fbc75d.jpg");

titulo2.style.color = "blue";
titulo2.style.backgroundColor = "green";
/**
 * border-radius -> kebab-case
 * border_radius -> snake_case
 * borderRadius -> camelCase
 * BorderRadius -> PascalCase
 */
titulo2.style.borderRadius = "10px";

imagen.setAttribute("alt","pinguinos");

imagen.removeAttribute("alt");

imagen.style.width = "200px";

let frutas = ["Mango","Piña","Fresas","Naranja"];

let ul = document.createElement("ul");

divContenido.appendChild(ul);

frutas.forEach(function(item){
  let nuevoLI = document.createElement("li");
  nuevoLI.innerHTML = item;
  ul.appendChild(nuevoLI);
})
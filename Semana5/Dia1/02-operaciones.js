let a = 100;
let b = 4;

let suma = a + b;
console.log("suma", suma);

let resta = a - b;
console.log("resta", resta);

let multiplicacion = a * b;
console.log("multiplicar", multiplicacion);

let division = a / b;
console.log("división", division);

let raiz = Math.sqrt(144);
console.log("Raíz Cuadrada", raiz);

let residuo = 105 % 4;
console.log("modulo", residuo);

//concatenación

let saludo = "Hola soy ";

let nombre = "Osmar";

console.log(saludo + nombre + ", que tal");

console.log(nombre + ' ' + 30 + " años")

let miEdad = 30;

// cuando utilizamos `` puedo poner dentro ${cosas_De_js} - Es un template string
let texto = `Hola soy ${nombre} soy de Arequipa y tengo ${miEdad}`;

console.log(texto)

//PROMPT
//Es la primera manera de capturar datos

let cantidadPerretes = prompt("Cuantas mascotas tienes?");

console.log(`Mascotas ${cantidadPerretes}`); 

console.log(typeof cantidadPerretes)//todo lo ingresado en prompt es Texto

// let mascotasConvertidas1 = parseInt(cantidadPerretes);
let mascotasConvertidas1 = +cantidadPerretes;

console.log(typeof mascotasConvertidas1)
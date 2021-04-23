//Console log nos va a servir para mostrar en la consola lo que deseemos, es útil para hacer debug, o para haernos una idea de que esta ocurriendo con nuestro código
console.log("Hola Código!!!");

//VARIABLES
var nombre = "Osmar";
var edad = 30;

console.log(nombre);
console.log(edad);

nombre = "Jorge";
console.log(nombre);

let nombrePerro = "Backus";
console.log(nombrePerro);

// var nombre = "Luna";
// console.log(nombre);

// let nombrePerro = "Hijo";
// console.log(nombrePerro);

//TIPOS DE DATOS
//En las variables no puede ir ñ tilde o caracteres raros y no pueden comenzar con número
let anio = 2021; //si es un número es number

anio = "2022" //si tiene comillas es texto, string
console.log(anio)
//typeof me dice que tipo de valor tiene una variable
console.log(typeof anio)

let edadBackus =  12;
console.log(typeof edadBackus) //number

//Booleano, y tiene dos valores, true o false
let esDeNoche = true;

let ellaLesQuiere =  false; //false
console.log(ellaLesQuiere)

//VALORES DE TIPO RARO EN Javascript

let nota; //undefined, no tiene asignado nada
console.log(nota);

let nulo = null;//no hay valor
console.log(nulo)

//NaN = Not a Number
let rareza = (1000/"patatas");
console.log(rareza)
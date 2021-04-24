//BISIESTO
//Descomposición
//1. Objetivo
//-Encontrar si un año es bisiesto, por el año (1990, 2021, 1492)
//1.1 Reglas hacen de un año bisiesto - descomponiendo
//-Tiene que ser divisible entre 4 - que no de residuo
//-Los que son divisibles entre 100 NO son bisiestos
//-Por otro lado los queson divisibles entre 400 también son bisiestos a pesar que son divisibles entre 100

//2. Listar que pasos y datos necesitamos
//DATOS -> el año
//PASOS -> 1.Obtengo el año, 2. Pregunto según las condicionales 3. imprimo el resultado en pantalla

// let anio = +prompt("Ingrese el año")

// if(anio >= 2021){
//   console.log("Ingresa un año adecuado")
// }else if(anio % 400 === 0){
//   console.log("Si es BISIESTO")
//   //pregunto si es que es divisible entre 4 pero no entre 100
// }else if(anio % 4 === 0 && anio % 100 !== 0){
//   console.log("Si es BISIESTO")
// }else{
//   console.log("NO es BISIESTO")
// }

//Inventarios
/**
 * Una bodeha quiere hacer un inventario, actualmente tiene 03 tipos de productos, papitas, jabones y chocolate
 * queremos saber cuantos productos tiene en existencia
 */
/**
 * Descomposición
 * Reglas: Manejamos 3 productos
 * Cada Producto tendrá su cantidad al final
 * Tendremos que preguntar producto por producto
 * -Que datos o variables deberiamos tener?
 * 1. variables para c/producto
 * 2. cantidad de productos en general
 */

//Patrones
//Que tarea va a ser repetitiva?
//Contar los productos

//Diseño del Algoritmo
//1.Cuantos productos se van a contar, pedir al usuario
//2. Que producto estamos contando
//3. Si un producto pertenece a un tipo, aumentar su cantidad

let cantProductos = +prompt("Cuantos productos contarás?")

let papitas = 0;
let jabones = 0;
let chocolates = 0;

for(let i = 0; i < cantProductos; i++){
  let producto = +prompt("Ingrese 1. Papitas, 2. Jabones, 3. Chocolates");
  
  switch(producto){
    case 1:
      papitas = papitas + 1;
      break;
    case 2:
      jabones++;
      break;
    case 3:
      chocolates++;
      break;
    default:
      alert("Número erroneo, ingrese de nuevo");
      //i = i - 1 => i--;
      i--; //reduzco en uno para que el contador no aumente
  }
}

console.log(`En total hay: \n 
            Papitas ${papitas} \n
            Jabones ${jabones} \n
            Chocolates ${chocolates}`)
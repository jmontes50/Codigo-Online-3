/**
 * for(contador; condicional; actualizacion_contador){
 * //codigo a ejecutar
 * }
 */

// for(let i = 0; i <= 10; i = i + 1){
//   console.log(`El contador es ${i}`);
// }

// console.log("yo estoy al final");

//Escoger un Menú

// let carta = ["Ceviche",
//             "Cuy Chactado",
//             "Costillar",
//             "Chicharron",
//             "Arroz con Mariscos",
//             "Caldo de Gallina"]

// let eleccion = +prompt("0.Ceviche, 1.Cuy, 2.Costillar, 3. Chicharrón,4.Arroz con Mariscos, 5.Caldo de Gallina");

// //i++ = "i = i + 1"
// for(let i = 0; i < carta.length; i++){
//   if(eleccion === i){
//     console.log(`Ud ha elegido ${carta[i]}`)
//   }
// }

// let nombres = ["Jorge","Adriana","Erick","Jhan","Violeta"]

// for(let i = 0; i < nombres.length; i++){
//   console.log(nombres[i])
//   if(nombres[i] === "Erick"){
//     console.log(`Se encontro a ${nombres[i]}`);
//     //Va a servir para detener las iteraciones/vueltas que puedan quedar
//     break;
//   }
// }

let numeros = [1,0,1,0,0,1,0,1,0];
let contadorDeCeros = 0;

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] === 1){
    continue;
  }
  //Al encontrarse con un continue saltará la iteración
  console.log(numeros[i])
  contadorDeCeros++;
}

console.log(`Tenemos ${contadorDeCeros} Ceros`)
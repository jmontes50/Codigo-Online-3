// let edad = +prompt("Cuál es tu edad?");
//puedo poner + delante o utilizar parseInt

//esta habilitada para votar
//if(condición){}
// if(edad >= 18){
//   console.log("Tienes DNI azul, puedes votar");
//AND - acá ambos tienen que ser verdadero
// }else if(edad < 18 && edad >= 0){
//   console.log("Tienes DNI amarillito, no puedes votar")
// }else{
//  console.log("Ingrese un valor adecuado")
// }


// let numero = +prompt("Ingrese un número");

// //Operador OR - Ó, solamente uno tiene que ser verdadero para que me considere que es verdadero
// if(numero > 120 || numero < 0){
//   console.log("Es verdura")
// }else{
//   console.log("Esos me mintieron")
// }

// let chanchito = +prompt("Ingrese el total de su chanchito")


//vamos a comprar unos audifonos con el chancho

// if(chanchito > 3000){
//   console.log("Puedes comprar unos Bose A20");
// }else if(chanchito <= 3000 && chanchito >= 1000){
//   console.log("Puedes comprar unos Bose QuiefComfort 35II")
// }else if(chanchito <= 999 && chanchito >= 150){
//   console.log("Puedes comprar unos Logitech G432")
// }else if(chanchito == 149 || chanchito == 129){
//   console.log("Puedes comprar de Oferta unos HyperX")
// }else{
//   console.log("Puedes comprar unos Logitech Standard, que esta alrededor de 40 soles")
// }

//== VS ===

// let chanchito = 1000;

// //doble igual evalua el valor
// //triple igual va evaluar el valor y el tipo de dato
// if(chanchito === 1000){
//   console.log("Si es igual a 1000")
// }else{
//   console.log("Ñaaa error")
// }

//OPERADORES TERNARIOS
 let edad = 15;
  let mayor = false;

 //condicional ? Si es verdadero : Si es falso
 edad >= 18 ? mayor = true : mayor = false;

 console.log(mayor)

 //cuando es una evaluación simple!
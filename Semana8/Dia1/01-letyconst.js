var manzana = "apple";
var manzana = "Manzana Israel";
//la unica limitación de scope/ambito que tiene var es si esta dentro de una función, pero en for, if, switch. tiene scope global
console.log(manzana);

// let potato = "papa";

//LET ES MÁS SEGURO
let potato = "papa amarilla";

console.log(potato);

for(var i = 0; i < 3; i++){
  console.log(i)
}
console.log(`iterador: ${i}`);

for(let j = 10; j < 13; j++){
  console.log(j)
}
// console.log(`jterador: ${j}`); //Error
//LET solo existe en el bloque que se le cree

//CONST
const Pi = 3.1415;

// Pi = 42;//No podemos cambiar el valor de una constante, pero si podemos utilizarla

console.log(Pi);

let saludar = function(){
  console.log("Holaaaaaa");
}

const despedirme = function(){ //Es muy útil para utilizarlo en funciones
  console.log("Adiós Gokú");
}

saludar();
despedirme();
despedirme();
despedirme();
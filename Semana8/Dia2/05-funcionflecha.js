// function saludar(nombre){
//   return `Hola soy ${nombre}`
// }

// let saludar = function(nombre){
//   return `Hola soy ${nombre}`
// }

// let saludar = (nombre) => {
//   return `Hola soy ${nombre}`;
// }

//puedo obviar los paréntesis si solo tengo 01 parámetro.
// let saludar = nombre => {
//   return `Hola soy ${nombre}`;
// }

//En caso solamente vaya a retornar directamente algo, puedo remover el return y agregarlo en una sola línea
// let saludar = nombre => `Hola soy ${nombre}`;

let saludar = (nombre = "Batman") => `Hola soy ${nombre}`;

let saludando = saludar("Superman");

console.log(saludando);

//Diferencia entre un Function y una Arrow Function

let Mouse = {
  nombre:"Mickey",

  // presentarse: function(){
  //   // console.log(`Hola yo me llamo ${this.nombre}`)
  // }

  presentarse: () => {
    // console.log(`Hola yo me llamo ${this.nombre}`)
    console.log(this)
  }
  //En el caso del this dentro de una función flecha, el this hará referencia al objeto Window
}

Mouse.presentarse()
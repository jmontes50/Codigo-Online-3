//en la paret que recibo los parámetros es equivalente
//let base = valor que le paso
//ler altura = valor que le paso
function calcularAreaTriangulo(base, altura){
  // console.log("Estoy ejecutándome dentro de una función")
  let area = base * altura / 2;
  // console.log(area)
  return area;
  // console.log("Estoy después del return");
}


console.log(calcularAreaTriangulo(50, 25))

// let resultado = calcularAreaTriangulo(100,75);
// console.log(resultado)

//ÁMBITO - Scope

// console.log(area)

//ámbito global =  todo el documento
let nombre = "Daniel"; //esta variable seria de ámbito global

function imprimirNombre(){
  //ámbito local
  nombre = "Victor";
  console.log(nombre)
  var variable = 42;
}

imprimirNombre()

console.log(variable)
let precioSimple = 5;
let precioDoble = 9;
let cantidadSimples = 0;
let cantidadDobles = 0;

let finalizar = false;

do {
  let eleccion = +prompt(
    "Ingrese 1. para pedir una hamburguesa Simple, 2. para una hamburguesa Doble, 3. para finalizar su pedido"
  );
  switch (eleccion) {
    case 1:
      console.log("Una Simple!!!!");
      cantidadSimples++;
      break;
    case 2:
      console.log("Una Doble!!!!");
      cantidadDobles++;
      break;
    case 3:
      finalizar = true;
      break;
    default:
      alert("Opción Incorrecta");
  }
} while (finalizar === false);

let total = precioSimple * cantidadSimples + precioDoble * cantidadDobles;

console.log(`El total a pagar será de: ${total} por ${cantidadSimples} Simples y ${cantidadDobles} Dobles`);

let producto = +prompt("Ingrese el código del producto")

switch(producto){
  case 1:
    console.log("Papitas");
    break; //es casí como un return
  case 2:
    console.log("Lapicero");
    break;
  case 3:
    console.log("Pollo");
    break;
  case 4:
    console.log("Pelota")
    break;
  default:
    console.log("No se encontró")
}


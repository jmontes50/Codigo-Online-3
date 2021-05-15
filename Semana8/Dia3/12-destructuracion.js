let objVehiculo = {
  marca:"Tesla",
  modelo:"Model X",
  anio:2019,
  colores:["Rojo", "Gris"],
  prender: function(){
    console.log("bzzzzzz bzzzzzzzz")
  }
}
//TRADICIONAL, ORTODOXO, CLÁSICO
// console.log(objVehiculo.marca)
// console.log(objVehiculo.modelo)
// objVehiculo.prender()

let {marca, modelo, anio, colores, prender} = objVehiculo;

console.log(marca)
console.log(modelo)

prender()

console.log(anio + 2);

//Buena práctica con desestructuración

// let calcularBeneficios = (sueldo, vacaciones, bono1, bono2, cts, gratificación) => {
//   //suma de cada uno, restar impuestos
// }

// calcularBeneficios(1600, 600, 400, 350, 1100, 500);

let calcularBeneficios = ({sueldo, vacaciones, bono1, bono2, cts, gratificacion}) => {
  //suma de cada uno, restar impuestos
  //objACalcular.sueldo
  //objACalcular.vacaciones

  console.log(sueldo)
}

let objBeneficios = {
  sueldo:1600,
  vacaciones:600,
  gratificacion:500,
  bono1:400,
  bono2:350,
  cts:1100,
}

calcularBeneficios(objBeneficios);

//Desestructurar Arreglos
let nombres = ["Linder","Daniel","Joel","Lezly","Jorgito"];

let prosor = nombres[4];

console.log(prosor);

let [tutor2, boss, teacher, tutora, prosorcito] = nombres;

console.log(tutora)


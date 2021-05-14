let hornearTorta = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(true){
        resolve("La torta esta Lista!");
      }else{
        reject("Pos se quemo :(");
      }
    }, 5000)
  });
}

let prepararGlaseado = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Glaseado Listo!")
      reject("Se quemo el microondas :(")
    }, 4000)
  })
}

let cubrirTorta = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Torta Decorada!")
      //reject("Pidamos Rappi... ")
    }, 3000)
  })
}

//comenzando el proceso de tener lista nuestra torta
hornearTorta()
.then((tortaHorneada) => {//Good - Resolve
  console.log(tortaHorneada);
  //tenemos Exito horneando la torta
  //retornemos una función que retorne una nueva Promesa
  return prepararGlaseado();
})
.then((glaseadoListo) => {
  console.log(glaseadoListo)
  return cubrirTorta();
})
.then((tortaDecorada) => {
  console.log(tortaDecorada);
})
.catch((tortaQuemada) => {//Bad - Reject
  console.log(tortaQuemada);
})
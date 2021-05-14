let hornearTorta = () => {
  //Como el horneado demora o no se como va a salir
  //resolve => va bien, reject => va mal
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(false){
        resolve("La torta esta Lista!");
      }else{
        reject("Pos se quemo :(");
      }
    }, 5000)
  });
}

hornearTorta()
//va a ejecutarse si las cosas fueron bien -> Resolve
.then((tortaHorneada) => {
  console.log(tortaHorneada);
})
//va a ejecutar si las cosas fueron mal -> Reject
.catch((tortaQuemada) => {
  console.log(tortaQuemada);
})
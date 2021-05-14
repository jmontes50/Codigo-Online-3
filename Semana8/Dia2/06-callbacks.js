let alumnosDB = ["Jhan","Erick","Máximo","Agustín","Bryan","Violeta","Veronica","Adriana"];

let buscarAlumno = (nombre, callback) => {
  //esta función va a devolver mediante un booleano si existe o no
  setTimeout(() => {
    //utilizamos setTimeout para que esto demore algo más
    for(let i = 0; i < alumnosDB.length; i++){
      if(alumnosDB[i] == nombre){
        callback(true)
        return; //cuando hacemos un return, se corta la ejecución
      }
    }
    callback(false)
  }, 3000)
}

buscarAlumno("Jhan", (existe) => {
  if(existe === true){
    console.log("El alumno existe")
  }else{
    console.log("No existe")
  }
})


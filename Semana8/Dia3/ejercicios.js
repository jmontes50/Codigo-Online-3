let tragamoneda01 = () => {
  return new Promise((resolve, reject) => {
    let apuesta = Math.random()
    if(apuesta > 0.5){
      resolve("Ganaste la Primera apuesta")
    }else{
      reject("Perdiste a la primera")
    }
  })
}

let tragamoneda02 = () => {
  return new Promise((resolve, reject) => {
    let apuesta = Math.random()
    if(apuesta > 0.5){
      resolve("Ganaste la Segunda apuesta")
    }else{
      reject("Perdiste a la Segunda")
    }
  })
}

let tragamoneda03 = () => {
  return new Promise((resolve, reject) => {
    let apuesta = Math.random()
    if(apuesta > 0.5){
      resolve("Ganaste la Tercera apuesta")
    }else{
      reject("Perdiste a la Tercera")
    }
  })
}

let tragamoneda04 = () => {
  return new Promise((resolve, reject) => {
    let apuesta = Math.random()
    if(apuesta > 0.5){
      resolve("Ganaste la Cuarta apuesta")
    }else{
      reject("Perdiste a la Cuarta")
    }
  })
}

tragamoneda01()
.then((resultado) => {
  console.log(resultado)
  return tragamoneda02()
})
.then((resultado) => {
  console.log(resultado)
  return tragamoneda03()
})
.then((resultado) => {
  console.log(resultado)
  return tragamoneda04()
})
.then((resultado) => {
  console.log(resultado)
})
.catch(err => console.log(err))

//2

let encontrarUsuario = (arrUsuarios, usuario) => {
  return new Promise((resolve, reject) => {
    for(let i = 0; i < arrUsuarios.length; i++){
      if(arrUsuarios[i].first_name === usuario){
        resolve(i)
        return; //cortar la ejecución de la función
      }
    }
    //afuera del for
    reject(-1)
  })
}

fetch("https://reqres.in/api/users")
.then(response => {
  return response.json()
})
.then(datos => {
  console.log(datos.data)
  return encontrarUsuario(datos.data, "Janet")
})
.then(posicion => {
  if(posicion !== -1){
    console.log(`Existe en la posición ${posicion}`)
  }else{
    console.log("No existe")
  }
})
.catch(err => console.log(err))
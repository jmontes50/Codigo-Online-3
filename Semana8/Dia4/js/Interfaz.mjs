class Interface {
  imprimirProductos(arregloProductos){
    const contenido = document.getElementById("platos")

    let cardsContenido = '';

    arregloProductos.forEach((item) => {
      console.table(item)
    })
  }
}

export {
  Interface
}
class Interface {
  imprimirProductos(arregloProductos){
    const contenido = document.getElementById("platos")

    let cardsContenido = '';

    arregloProductos.forEach(({id, nombre, precio, foto, descripcion}) => {
      let cardProducto = `<div class="col-6 col-lg-3 mb-2">
                            <div class="card">
                              <img src="${foto}" class="card-img-top" alt="producto">
                              <div class="card-body">
                                <h4 class="card-title">
                                  ${nombre}
                                </h4>
                                <p class="card-text">
                                  ${descripcion}
                                </p>
                              </div>
                              <div class="card-footer">
                                <span class="fw-bold">Precio:</span> ${precio}
                              </div>
                            </div>
                          </div>`;
      cardsContenido = cardsContenido + cardProducto;                    
    })

    contenido.innerHTML = cardsContenido;
  }
}

export {
  Interface
}
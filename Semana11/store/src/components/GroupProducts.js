import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "@material-ui/core/Slider";

function GroupProducts({ productos, categoria, id_categoria, mostrarFiltro, setProductos}) {
  const [toggleFiltro, setToggleFiltro] = useState(false);
  const [filtroPrecio, setFiltroPrecio] = useState([1,999]);
  const [filtroNombre, setFiltroNombre] = useState("");
  // Creo una copia de mi arreglo de productos en un estado
  const [productosOriginal] = useState(productos)
  
  const manejarFiltroPrecio = (evento, precio) => {
    // después de cambiar el estado de filtroPrecio a un array, el parámetro precio es otro array
   setFiltroPrecio(precio)
  }

  const textoPrecio = (valor) => {
    return `S/ ${valor}`
  }

  useEffect(() => {
    let productosFiltrados = productosOriginal.filter((prod)=>{
      return prod.precio >= filtroPrecio[0] && 
            prod.precio <= filtroPrecio[1] && 
            prod.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    })
    setProductos(productosFiltrados)  
  },[filtroPrecio, filtroNombre])

  return (
    <div className="container">
      <div>
        <h2 className="my-3 fw-bold">{categoria}</h2>
      </div>
      {mostrarFiltro ? (
        <div>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => {
              setToggleFiltro(!toggleFiltro);
            }}
          >
            <i className="fas fa-funnel-dollar me-1"></i> Filtros
          </button>
          {toggleFiltro ? (
            <div className="row p-3">
              <div className="col-12 col-lg-6">
                <label>Ajustar Precio</label>
                <Slider 
                  value={filtroPrecio}
                  min={1} 
                  max={999} 
                  onChange={manejarFiltroPrecio}
                  getAriaValueText={textoPrecio}
                  valueLabelDisplay="auto"
                />
              </div>

              <div className="col-12 col-lg-6">
                <label className="form-label">Buscar por nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Ej. Gorro"
                  value={filtroNombre}
                  onChange={(e) => {setFiltroNombre(e.target.value)}}
                />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="row mt-3">
        {productos
          .filter((prod) => {
            return prod.id_categoria == id_categoria;
          })
          .slice(0, 8)
          .map((prod, i) => (
            <div className="col-6 col-lg-3" key={i}>
              <Link 
                className="card mb-4" 
                to={`/detalle/${prod.id}`} 
                style={{textDecoration:'none', color:'black'}}
              >
                <img className="card-img-top" src={prod.fotos[0]} alt="" />
                <div className="card-body">
                  <h6 className="card-title">{prod.nombre}</h6>
                  <span className="fw-bold">S/ {prod.precio}</span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GroupProducts;

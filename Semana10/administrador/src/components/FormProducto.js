import React, { useRef } from "react";
import {subirArchivo} from "../services/productoService"
//esta variable me va a permitir, manejar mi archivo sin problemas
let imagenes;

const asyncForEach = async(array, callback) => {
  for(let i = 0; i < array.length; i++){
    await callback(array[i]) //Se detiene la ejecución hasta que termine
  }
}

function FormProducto({
  value, 
  actualizarInput, 
  setValue, 
  manejarSubmit,
  categorias}) {

  //useRef, es como un Id interno de React
  const inputColor = useRef();
  const inputFotos = useRef();

  const anadirColor = (e) => {
    e.preventDefault();
    let nuevoColor = inputColor.current.value;
    setValue({...value, colores:[...value.colores, nuevoColor]})
  };

  const ejecutarSubmit = async(e) => {
    e.preventDefault()
    //primero subimos las imagenes
    let urls = []

    await asyncForEach(imagenes, async(imagen) => {
      let urlImagenSubida = await subirArchivo(imagen)
      urls.push(urlImagenSubida)
    })
    //Cuando editemos no vamos a poder editar las fotos
    //En caso no agreguemos fotos, no tocará las fotos anteriores
    //segundo recien ejecutamos el submit de la vista
    manejarSubmit(e, urls)
  }

  const manejarImagen = (e) => {
    e.preventDefault()
    let misImagenes = e.target.files//esto es un Array
    imagenes = misImagenes
  }

  return (
    <div>
      <form onSubmit={(e) => {ejecutarSubmit(e)}}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            name="nombre" 
            value={value.nombre}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input 
            type="text" 
            className="form-control" 
            name="descripcion"
            value={value.descripcion}
            onChange={(e)=>{actualizarInput(e)}}
            />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input 
            type="number" 
            className="form-control" 
            name="precio"
            value={value.precio}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input 
            type="number" 
            className="form-control" 
            name="stock"
            value={value.stock}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Colores</label>
          <input type="color" className="form-control" ref={inputColor} />
          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => {
              anadirColor(e);
            }}
          >
            Agregar Color
          </button>

          <div className="list-group">
            {value.colores.map((color, i) => (
              <div className="list-group-item list-group-item-sm" key={i}>
                Color:{" "}
                <span
                  style={{
                    border: "1px solid gray",
                    backgroundColor: `${color}`,
                  }}
                >
                  {color}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Fotos</label>
          <input 
            type="file"
            ref={inputFotos}
            className="form-control"
            onChange={(e)=>{manejarImagen(e)}}
            multiple
          />
          <ul className="list-group">
              {value.fotos.map((fotito, i) => (
                <li className="list-group-item" key={i}>{fotito}</li>
              ))}
          </ul>
        </div>
        <div className="mb-3">
          <label className="form-label">Categoría</label>
          {/* <input 
            type="text" 
            list="categorias" 
            className="form-control" 
            name="id_categoria"
           
            onChange={(e) => {actualizarInput(e)}}
          />
          <datalist id="categorias">
            {categorias.map((cat, i) => (
              <option key={i} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </datalist>    */}
          <select 
            className="form-control"
            name="id_categoria"
            value={value.id_categoria}
            onChange={(e)=>{actualizarInput(e)}}
          >
           {categorias.map((cat, i) => (
              <option key={i} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>
          
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormProducto;

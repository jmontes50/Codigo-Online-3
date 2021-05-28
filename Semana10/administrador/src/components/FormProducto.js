import React, { useState, useEffect, useRef } from "react";

function FormProducto() {
  const [colores, setColores] = useState([]);
  const [fotos, setFotos] = useState([]);

  const inputColor = useRef();
  const inputFotos = useRef();

  const anadirColor = (e) => {
    e.preventDefault();
    let nuevoColor = inputColor.current.value;
    setColores([...colores, nuevoColor]);
  };

  const anadirFoto = (e) => {
    e.preventDefault()
    let nuevaFoto = inputFotos.current.value;
    setFotos([...fotos, nuevaFoto]);
  }

  return (
    <div>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" className="form-control" />
        </div>

        <div>
          <label>Descripción</label>
          <input type="text" className="form-control" />
        </div>

        <div>
          <label>Precio</label>
          <input type="number" className="form-control" />
        </div>

        <div>
          <label>Stock</label>
          <input type="number" className="form-control" />
        </div>

        <div>
          <label>Colores</label>
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
            {colores.map((color, i) => (
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

        <div>
          <label>Fotos</label>
          <input 
            type="text"
            ref={inputFotos}
            className="form-control"
          />
          <button className="btn btn-primary btn-sm" onClick={(e)=>{anadirFoto(e)}}>
            Agregar Foto
          </button>
          <ul className="list-group">
              {fotos.map((fotito, i) => (
                <li className="list-group-item" key={i}>{fotito}</li>
              ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default FormProducto;

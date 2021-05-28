import React from 'react'

function FormProducto() {
  return (
    <div>
      <form>
        <div>
          <label>Nombre</label>
          <input 
            type="text"
            className="form-control"
          />
        </div>

        <div>
          <label>Descripción</label>
          <input 
            type="text"
            className="form-control"
          />
        </div>
        
        <div>
          <label>Precio</label>
          <input 
            type="number"
            className="form-control"
          />
        </div>

        <div>
          <label>Stock</label>
          <input 
            type="number"
            className="form-control"
          />
        </div>

        <div>
          <label>Colores</label>
          <input 
            type="text"
            className="form-control"
          />
          <button
            className="btn btn-primary btn-sm">
              Agregar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormProducto

import React,{useState, useEffect, useRef} from 'react'

function FormProducto() {
  
  const [colores, setColores] = useState([])

  const inputColor = useRef()

  const anadirColor = (e) => {
    e.preventDefault()
    let nuevoColor = inputColor.current.value
    setColores([...colores, nuevoColor])
  }

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
            type="color"
            className="form-control"
            ref={inputColor}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={(e)=>{anadirColor(e)}}
          >
              Agregar Color
          </button>
          
          <div className="list-group">
            {colores.map((color, i) => (
              <div className="list-group-item list-group-item-sm" key={i}>
                Color: <span style={{border:"1px solid gray", backgroundColor:`${color}`}}>{color}</span>
              </div>
            ))}
          </div>

        </div>
      </form>
    </div>
  )
}

export default FormProducto

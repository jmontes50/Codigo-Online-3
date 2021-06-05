import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {obtenerProductoPorId} from "../services/productoService"

function ProductoView() {

  const [producto, setProducto] = useState({})

  let { id } = useParams()//me da un objeto con todos los parámetros

  const getProducto = async () => {
    try {
      let productoObtenido = await obtenerProductoPorId(id)
      setProducto({...productoObtenido})
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducto()
  }, [])

  return (
    <div>
      <div className="titulo-detalle">
        <div className="container p-4 text-center">
          <h2 className="fw-bold">{producto.nombre}</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={producto.fotos[0]} alt={`foto de ${producto.nombre}`}/>
          </div>
          <div className="col-12 col-md-6">
            <h5>Colores:</h5>
            {producto.colores.map((item, i) => (
              <div style={{width:'50px',height:'50px',backgroundColor:item}} key={i}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductoView

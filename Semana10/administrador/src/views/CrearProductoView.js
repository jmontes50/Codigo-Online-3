import React,{useState} from 'react'
import FormProducto from "../components/FormProducto"

function CrearProductoView() {
  const [value, setValue] = useState({
    nombre:'',
    descripcion:'',
    precio:0,
    stock:0,
    fotos:[],
    colores:[]
  })

  const actualizarInput = (e) => {
    // console.log(e)
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div>
      <h1>Crear Producto</h1>
      <FormProducto value={value} actualizarInput={actualizarInput} setValue={setValue}/>
    </div>
  )
}

export default CrearProductoView

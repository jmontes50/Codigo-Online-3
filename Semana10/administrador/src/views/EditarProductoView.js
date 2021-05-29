import React,{useState} from 'react'
import FormProducto from "../components/FormProducto"
import {editarProducto} from "../services/productoService"

function EditarProductoView() {

  const [value, setValue] = useState({
    nombre:'',
    descripcion:'',
    stock:0,
    precio:0,
    colores:[],
    fotos:[]
  })

  const actualizarInput = (e) => {
    e.preventDefault()
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }

  const manejarSubmit = async (e) => {
    e.preventDefault()
    await editarProducto(value, _id)
  }

  return (
    <div>
      
    </div>
  )
}

export default EditarProductoView

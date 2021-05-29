import React,{useState} from 'react'
import FormProducto from "../components/FormProducto"
import {editarProducto} from "../services/productoService"
import {useParams} from "react-router-dom"

function EditarProductoView() {

  let {id} = useParams();

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
    await editarProducto(value, id)
  }

  return (
    <div>
      <h1>Editar Producto</h1>
      <FormProducto
        value={value}
        setValue={setValue}
        actualizarInput={actualizarInput}
        manejarSubmit={manejarSubmit}
      />
    </div>
  )
}

export default EditarProductoView

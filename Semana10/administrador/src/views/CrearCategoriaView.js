import React, {useState} from 'react'
import FormCategoria from "../components/FormCategoria"
import {crearCategoria} from "../services/categoriaService"
import Swal from "sweetalert2"
import {useHistory} from "react-router-dom"

function CrearCategoriaView() {

  const [value, setValue] = useState("")

  const history = useHistory()

  const manejarSubmit = async (e) => {
    e.preventDefault()
    let nuevaCategoria = {
      nombre:value
    }

    try {
      await crearCategoria({...nuevaCategoria})
      await Swal.fire({
        icon:"success",
        title:"Categoria Creada",
        showConfirmButton:false,
        timer:2000
      })
      history.push('/')
    } catch (error) {
      Swal.fire({
        icon:"error",
        title:"Sucedio un error inesperado",
        text:`${error}`,
        showConfirmButton:true
      })
    }
  }

  return (
    <div>
      <h1>Crear Categoria</h1>
      <FormCategoria 
        value={value} 
        setValue={setValue}
        manejarSubmit={manejarSubmit}
      />
    </div>
  )
}

export default CrearCategoriaView

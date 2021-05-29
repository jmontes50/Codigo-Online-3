import React, {useState} from 'react'
import FormCategoria from "../components/FormCategoria"
import {crearCategoria} from "../services/categoriaService"

function CrearCategoriaView() {

  const [value, setValue] = useState("")

  const manejarSubmit = async (e) => {
    e.preventDefault()
    let nuevaCategoria = {
      nombre:value
    }

    try {
      await crearCategoria(nuevaCategoria)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Crear Categoria</h1>
      <FormCategoria 
        value={value} 
        setValue={setValue}
      />
    </div>
  )
}

export default CrearCategoriaView

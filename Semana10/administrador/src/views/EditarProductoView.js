import React,{useState, useEffect} from 'react'
import FormProducto from "../components/FormProducto"
import {editarProducto, obtenerProductoPorId} from "../services/productoService"
import {useParams} from "react-router-dom"
import {obtenerCategorias} from "../services/categoriaService"

function EditarProductoView() {

  let {id} = useParams();

  const [value, setValue] = useState({
    nombre:'',
    descripcion:'',
    stock:0,
    precio:0,
    colores:[],
    fotos:[],
    id_categoria:1
  })

  const [categorias, setCategorias] = useState([])

  const actualizarInput = (e) => {
    e.preventDefault()
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }

  const manejarSubmit = async (e, urlsFotos) => {
    e.preventDefault()
    await editarProducto({...value,fotos:[...fotos, ...urlsFotos]}, id)
  }

  const getProducto = async () => {
    try {
      let productoObtenido = await obtenerProductoPorId(id)
      setValue({...productoObtenido})
    } catch (error) {
      console.log(error)
    }
  }

  const getCategorias = async() => {
    try {
      let categoriasObtenidas = await obtenerCategorias()
      setCategorias([...categoriasObtenidas])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducto()
    getCategorias()
  }, [])

  return (
    <div>
      <h1>Editar Producto</h1>
      <FormProducto
        value={value}
        setValue={setValue}
        actualizarInput={actualizarInput}
        manejarSubmit={manejarSubmit}
        categorias={categorias}
      />
    </div>
  )
}

export default EditarProductoView

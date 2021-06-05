import {useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import GroupProducts from "../components/GroupProducts"

function PortadaView() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    let productosObtenidos = await obtenerProductos()
    setProductos(productosObtenidos)
  }

  useEffect(()=>{
    getProductos()
  },[])

  return (
    <div>
      <GroupProducts productos={productos} categoria="Gamer" id_categoria="1"/>
      <GroupProducts productos={productos} categoria="Comfy" id_categoria="2"/>
    </div>
  )
}

export default PortadaView


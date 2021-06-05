import {useState, createContext} from "react"

export const CarritoContext = createContext()

const CarritoContextProvider = (props) => {
  //Aquí ira mi estado y las funciones que se encarguen de actualizar ese estado
  const [carrito, setCarrito] = useState([])

  const anadirProducto = (producto) => {
    setCarrito([...carrito, producto])
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        anadirProducto
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  )
}

export default CarritoContextProvider;
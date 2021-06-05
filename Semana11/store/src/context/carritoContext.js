import {useState, createContext} from "react"

export const CarritoContext = createContext()

const CarritoContextProvider = (props) => {
  //Aquí ira mi estado y las funciones que se encarguen de actualizar ese estado
  const [carrito, setCarrito] = useState([])

  const anadirProducto = (producto) => {
    //Esto en caso el producto ya exista
    for(let i = 0; i < carrito.length; i++){
      if(carrito[i].id === producto.id){
        //estoy creando un producto pero añadiendo una cantidad, para poder saber que cantidad es
        let productoExistente = {
          ...carrito[i],
          cantidad: carrito[i].cantidad + 1
        }
        let carritoTmp = [...carrito] //como es estado es inmutable hago una copia de carrito
        carritoTmp.splice(i, 1)//remuevo el producto que aumentará su cantidad
        carritoTmp.push(productoExistente)//lo vuelvo a agregar, pero ya actualizado
        setCarrito([...carritoTmp])//y actualizo el carrito
        return; //corta la ejecución
      }
    }
    //en caso sea nuevo, lo añado con una cantidad inicial de 1
    setCarrito([...carrito, {...producto, cantidad:1}])
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
import {Route} from "react-router-dom"
import PortadaView from "./views/PortadaView"
import ProductoView from "./views/ProductoView"
import CarritoView from "./views/CarritoView"

function Routes() {
  return (
    <div>
      <Route path="/" exact component={PortadaView} />
      <Route path="/detalle/:id" component={ProductoView}/>
      <Route path="/carrito" exact component={CarritoView} />
    </div>
  )
}

export default Routes

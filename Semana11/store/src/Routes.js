import {Route} from "react-router-dom"
import PortadaView from "./views/PortadaView"
import ProductoView from "./views/ProductoView"
import CarritoView from "./views/CarritoView"
import ComfyView from "./views/ComfyView"
import ComprarView from "./views/ComprarView"

function Routes() {
  return (
    <div>
      <Route path="/" exact component={PortadaView} />
      <Route path="/detalle/:id" component={ProductoView}/>
      <Route path="/carrito" exact component={CarritoView} />
      <Route path="/comfycategory" exact component={ComfyView} />
      <Route path='/comprar' exact component={ComprarView} />
    </div>
  )
}

export default Routes

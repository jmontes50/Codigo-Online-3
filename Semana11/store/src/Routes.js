import {Route} from "react-router-dom"
import PortadaView from "./views/PortadaView"
import ProductoView from "./views/ProductoView"

function Routes() {
  return (
    <div>
      <Route path="/" exact component={PortadaView} />
      <Route path="/detalle/:id" component={ProductoView}/>
    </div>
  )
}

export default Routes
import React from 'react'
import {Route} from "react-router-dom"
import CrearProductoView from "./views/CrearProductoView"
import ListaProductosView from "./views/ListaProductosView"
import EditarProductoView from "./views/EditarProductoView"

function Routes() {
  return (
    <div>
      <Route exact path="/" component={ListaProductosView} />
      <Route exact path="/crearproducto" component={CrearProductoView} />
      {/* al darle en el path :algo indico que voy a pasar un parámetro llamado "algo" */}
      <Route exact path="/editarproducto/:id" component={EditarProductoView} />

    </div>
  )
}

export default Routes

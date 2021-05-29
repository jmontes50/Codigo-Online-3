import React from 'react'
import {Route} from "react-router-dom"
import CrearProductoView from "./views/CrearProductoView"
import ListaProductosView from "./views/ListaProductosView"

function Routes() {
  return (
    <div>
      <Route exact path="/" component={ListaProductosView} />

      <Route exact path="/crearproducto" component={CrearProductoView} />
    </div>
  )
}

export default Routes

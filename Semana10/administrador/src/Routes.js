import React from 'react'
import {Route} from "react-router-dom"
import CrearProductoView from "./views/CrearProductoView"
import ListaProductosView from "./views/ListaProductosView"
import EditarProductoView from "./views/EditarProductoView"
import CrearCategoriaView from "./views/CrearCategoriaView"
import ListaCategoriaView from "./views/ListaCategoriaView"

function Routes() {
  return (
    <div>
      <Route exact path="/" component={ListaProductosView} />
      <Route exact path="/crearproducto" component={CrearProductoView} />
      {/* al darle en el path :algo indico que voy a pasar un parámetro llamado "algo" */}
      <Route exact path="/editarproducto/:id" component={EditarProductoView} />
      <Route exact path="/crearcategoria" component={CrearCategoriaView} />
      <Route exact path="/listacategoria" component={ListaCategoriaView} />
    </div>
  )
}

export default Routes

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';

const routes: Routes = [
  // {path:"url", component:NombreComponente}
  {path:"", component: ProductosComponent},
  {path:"crearproducto", component:CrearproductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

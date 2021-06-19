import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../services/producto.service"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  misProductos:Array<object>
  subscripcionProd:Subscription

  //inyeccion por dependencias de nuestro servicio
  constructor(
    private _sProducto: ProductoService
  ) { }

  getProductos(){
    this.subscripcionProd = this._sProducto.obtenerProductos()
    .subscribe((datos) => {
      // console.log("datosobtenidos",datos)
      this.misProductos = datos
    })
  }

  ngOnInit(): void {
    //equivale a un useEffect solo en el montaje
    this.getProductos()
  }

}

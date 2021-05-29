import React, { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productoService";
import {Link} from "react-router-dom"

function ListaProductosView() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      //1. ejecutamos la función que me devuelve los productos
      const productosObtenidos = await obtenerProductos();
      //2. Lo pongo en el estado
      setProductos(productosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //montaje, cambia un estado
    //pero lo filtramos por su 2do parámetro
    getProductos();
  }, []);

  return (
    <div>
      <h1>Productos Listados</h1>
      <Link className="btn btn-primary btn-lg my-2" to="/crearproducto">
        Crear Producto
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod, i) => (
            <tr key={i}>
              <td>{prod.nombre}</td>
              <td>{prod.precio}</td>
              <td>{prod.descripcion}</td>
              <td>{prod.stock}</td>
              <td>
                <Link className="btn btn-warning btn-sm" to={`/editarproducto/${prod.id}`}>
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductosView;

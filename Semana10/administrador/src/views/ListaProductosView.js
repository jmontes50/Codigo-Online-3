import React, { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productoService";

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
    getProductos();
  }, []);

  return (
    <div>
      <table>
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
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductosView;

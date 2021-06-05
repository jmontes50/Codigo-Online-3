import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";

function CarritoView() {
  let { carrito } = useContext(CarritoContext);
  return (
    <div>
      {carrito.map((prod, i) => (
        <div key={i}>{prod.nombre}</div>
      ))}
    </div>
  );
}

export default CarritoView;

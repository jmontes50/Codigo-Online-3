import React from "react";

function Parrafo({ texto, banda }) {
  console.log(banda);
  return (
    <div>
      <p>
        {texto}
        <br />

        {/* renderizado condicional */}
        {banda ? 
        (<small>{banda}</small>)
        :
        (<small>No existe en la BD</small>)}
        
      </p>
    </div>
  );
}

export default Parrafo;

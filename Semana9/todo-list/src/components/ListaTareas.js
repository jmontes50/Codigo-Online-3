import React from 'react'

function ListaTareas({tareas}) {
  // console.log("misTareas", tareas)
  //renderizar Listas
  return (
    <div>
      {tareas.map((item, indice) => (
        // este key tiene que ser único
        <p key={indice}>
          {item}
          <button>X</button>
        </p>
        
      ))}
    </div>
  )
}

export default ListaTareas

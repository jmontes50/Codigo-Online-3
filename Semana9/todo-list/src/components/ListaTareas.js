import React from 'react'

function ListaTareas({tareas, eliminarTarea}) {
  // console.log("misTareas", tareas)
  //renderizar Listas
  return (
    <div>
      {tareas.map((item, indice) => (
        // este key tiene que ser único
        <p key={indice}>
          {item}
          <button 
            onClick={()=>{eliminarTarea(indice)}}
          >
            X
          </button>
        </p>
        
      ))}
    </div>
  )
}

export default ListaTareas

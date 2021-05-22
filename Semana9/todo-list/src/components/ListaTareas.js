import React from 'react'

function ListaTareas({tareas, eliminarTarea}) {
  // console.log("misTareas", tareas)
  //renderizar Listas
  return (
    <ul className="list-group mt-4">
      {tareas.map((item, indice) => (
        // este key tiene que ser único
        <li key={indice} className="list-group-item">
          {item}
          <button 
            onClick={()=>{eliminarTarea(indice)}}
            className="btn btn-danger btn-sm ms-2"
          >
            X
          </button>
        </li>
        
      ))}
    </ul>
  )
}

export default ListaTareas

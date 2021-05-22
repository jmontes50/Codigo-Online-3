import React, {useState} from 'react'
import InputTarea from "./components/InputTarea"
import ListaTareas from "./components/ListaTareas"

function App() {
  const [tareas, setTareas] = useState([])

  const [tarea, setTarea] = useState("Hola")

  const anadirTarea = () => {
    setTareas([...tareas, tarea])//?
  }

  const manejarTarea = (tarea) => {
    setTarea(tarea)
  }

  const eliminarTarea = (indice) => {
    //obtengo los items de tarea por desestructuración
    let tareasTmp = [...tareas]
    //elimino 01 item a partir del indice que reciba
    tareasTmp.splice(indice, 1)
    console.log(tareasTmp)
    //actualizo el estado, con el arreglo modificado
    setTareas([...tareasTmp])
  }

  return (
    <div>
      <h1>Todo - List</h1>
      Tarea: {tarea}
      <InputTarea 
        tarea={tarea} 
        manejarTarea={manejarTarea}
        anadirTarea={anadirTarea}
      />
      <ListaTareas 
        tareas={tareas} 
        eliminarTarea={eliminarTarea}
      />
    </div>
  )
}

export default App

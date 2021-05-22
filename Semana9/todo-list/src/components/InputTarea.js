import React,{useState} from 'react'

function InputTarea({tarea, manejarTarea, anadirTarea}) {
  
  //Componentes Controlados
  //Todo Input debe estar amarrado a un estado
  // const [input, setInput] = useState('Patata')

  return (
    <div>
      <input 
        type="text"
        placeholder="Ingrese una nueva tarea"
        value={tarea}
        onChange={(e)=>{manejarTarea(e.target.value)}}
        className="form-control"
      />
      {/* En caso tenga que pasar argumentos a la func */}
      {/* <button onClick={()=>{anadirTarea()}}> */}
      {/* En caso solamente quiero ejecutarla */}
      <button onClick={anadirTarea} className="btn btn-primary mt-2">
        Agregar Tarea
      </button>
    </div>
  )
}

export default InputTarea

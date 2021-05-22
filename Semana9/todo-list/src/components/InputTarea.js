import React,{useState} from 'react'

function InputTarea({tarea, manejarTarea}) {
  
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
      />
      <button>
        Agregar Tarea
      </button>
    </div>
  )
}

export default InputTarea

import React from 'react'

function Parrafo(props) {
  console.log(props)
  return (
    <div>
      <p>
        {props.texto}
      </p>
    </div>
  )
}

export default Parrafo



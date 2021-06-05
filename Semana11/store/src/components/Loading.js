import React from 'react'

function Loading() {
  return (
    <div
      style={{
        position:'fixed',
        top:'0',
        left:'0',
        width:'100vw',
        height:'100vh',
        backgroundColor:'rgba(0,0,0,0.5)',
        zIndex:'99'
      }}
    >
      <i className="fas fa-cog fa-spin fa-6x"
        style={{
          color:'white',
          position:'absolute',
          top:'calc(50% - 50px)',
          left:'calc(50% - 50px)',
        }}
      ></i>
    </div>
  )
}

export default Loading

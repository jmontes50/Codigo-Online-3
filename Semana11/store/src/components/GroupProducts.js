import React from 'react'

function GroupProducts({productos, categoria}) {
  return (
    <div className="container">
      <div>
        <h2>{categoria}</h2>
      </div>
      <div className="row">
        {productos.map((prod, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="card">
              <img className="card-img-top" src={prod.fotos[0]} />
              <div className="card-body">
                <h6 className="card-title">{prod.nombre}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupProducts

import React,{useState} from "react";
import {Link} from "react-router-dom"

function NavTop() {
  const [estaColapsado, setEstaColapsado] = useState(true)
  const manejarNavbar = () => setEstaColapsado(!estaColapsado)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          CodiShop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!estaColapsado ? true : false}
          aria-label="Toggle navigation"
          onClick={manejarNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${estaColapsado ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/'>
                Portada
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/comfycategory'>
                Comfy
              </Link>
            </li>
            
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">
                  Carrito
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTop;

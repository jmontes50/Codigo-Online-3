import React from 'react'
import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"
import foto4 from "../assets/foto4.jpg"
import CustomCarousel from './CustomCarousel'

function Header() {
  return (
    <header className="container mt-4 contenedor">
      <div className="head1">
        {/* <img src={foto1} alt="foto1"/> */}
        <CustomCarousel/>
      </div>
      <div className="head2">
        <img src={foto2} alt="foto2"/>
      </div>
      <div className="head3">
        <img src={foto3} alt="foto3"/>
      </div>
      <div className="head4">
        <img src={foto4} alt="foto4"/>
      </div>
    </header>
  )
}

export default Header

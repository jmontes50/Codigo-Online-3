import React,{useRef} from 'react'
import {Carousel} from "bootstrap" //js
import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"

function CustomCarousel() {

  let refCarousel = useRef() //la referencia

  let myCarousel = refCarousel.current //el elemento HTML, getElementById
  let bsCarousel = new Carousel(myCarousel, {interval:10000}) //la instancia Carousel de Bootstrap
  console.log(bsCarousel)

  const avanzarCarousel = () => {
    bsCarousel.next()
  }

  const regresarCarousel = () => {
    bsCarousel.prev()
  }

  return (
    <div>
      <div ref={refCarousel} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={foto1} className="d-block w-100" alt="..." />
            <div className="bannerCarousel position-absolute top-50 start-50 translate-middle">
              <small>Tu estilo</small>
              <h5>Temporada Invierno</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={foto2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={foto3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={regresarCarousel}  data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={avanzarCarousel} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default CustomCarousel

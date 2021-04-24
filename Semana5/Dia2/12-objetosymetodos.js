let albumMusica = {
  nombre: "Future Nostalgia",
  artista: "Dua Lipa",
  discografica: "Warner Records",
  anio:2020,
  canciones:[
    {
      titulo:"Future Nostalgia",
      duracion:3.04,
      escritores:["Dua Lipa","Clarence","Jeff"]
    },
    {
      titulo:"Don't Start Now",
      duracion:3.03
    },
    {
      titulo:"Physical",
      duracion:3.13
    }
  ]
}

console.log(albumMusica.canciones[1].titulo)

//métodos
let restaurante = {
  nombre: "La Nueva Palomino",
  platillos:[
    {
      id:1,
      nombrePlatillo:"Rocoto Relleno",
      precio:30
    },
    {
      id:2,
      nombrePlatillo:"Pepian de Cuy con Sango",
      precio:22
    },
    {
      id:3,
      nombrePlatillo: "Chupe",
      precio:20
    }
  ],
  mostrarPlatillos: function(){
    console.log(restaurante.platillos)
  }
}

// console.log(restaurante.platillos)

restaurante.mostrarPlatillos()

//LET AGUANTA TODO - ciudadano de primera de clase

let sumar = function(){
  return 10+20;
}

console.log(sumar())
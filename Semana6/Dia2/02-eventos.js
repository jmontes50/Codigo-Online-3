let divContenido = document.getElementById("contenido");

let miBoton = document.createElement("button");

miBoton.innerText = "Dame Click";

divContenido.appendChild(miBoton);


//addEventListener("evento", function(){})
miBoton.addEventListener("click",function(){
  alert("Haz dado CLICK!")
});

// 
let cancionesParaBailar = [
  "Lose Yourself to Dance",
  "La Macarena",
  "Gangnam Style",
  "Get Yourself",
  "Dance Monkey",
  "Motor y Motivo",
  "Tren al Sur",
  "Asereje"
];

cancionesParaBailar.forEach(function(cancion){
  let nuevoParrafo = document.createElement("p");
  nuevoParrafo.innerText = cancion;
  divContenido.appendChild(nuevoParrafo);
  //vamos a agregar también aquí su addEvent Listener
  //evento dblclick
  nuevoParrafo.addEventListener("dblclick",function(){
    alert("Hiciste Click en una canción")
  })
  nuevoParrafo.style.cursor = "pointer";
});

// 
let input = document.createElement("input");
input.setAttribute("type","password")
divContenido.appendChild(input)

let btnVer = document.createElement("button");
btnVer.innerText = "ver Password";
divContenido.appendChild(btnVer);

let esVisible = false;

btnVer.addEventListener("click",function(){
  //cambiar el booleano, cuando utilizo el signo ! 
  // ! => NOT
  esVisible = !esVisible;
  if(esVisible === true){
    input.setAttribute("type","text")
  }else{
    input.setAttribute("type","password")
  }

  alert(input.value)
});

//keyup -> evento cuando la tecla se levanta
input.addEventListener("keyup",function(evento){
  //lo que reciba la función del addEventListener va a ser otro objeto, la tecla y demás info
  // target = al elemento que estoy capturando
  console.log(evento.target.value)
})
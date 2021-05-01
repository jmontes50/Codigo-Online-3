let listaPlatillos = [
  {
    id:1,
    nombre:'Crema de Verduras',
    descripcion:'Suave crema preparada con una variedad de verduras estacionales',
    precio:12.00,
    stock:10,
    imagen:'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80z'
  },
  {
    id:2,
    nombre:'Albondigas con salsa Barbeque',
    descripcion:'Albondigas de carne de res condimentandas con finas hierbas acompañadas con Salsa Bbq y espinacas',
    precio:18.00,
    stock:8,
    imagen:'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80'
  },
  {
    id:3,
    nombre:'Hamburguesa Royal',
    descripcion:'Carne, Queso, Huevo y tomate, todo envuelto con pan',
    precio:11.00,
    stock:14,
    imagen:'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id:4,
    nombre:'Pizza de la casa',
    descripcion:'Pizza con recetea original de la casa',
    precio:14.00,
    stock:7,
    imagen:'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id:5,
    nombre:'Ceviche de la casa',
    descripcion:'Plato Bandera Peruano acompañado con bebida a elección',
    precio:20.00,
    stock:10,
    imagen:'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id:6,
    nombre:'Ramen Fusión',
    descripcion:'Ramen preparado con ingredientes Peruanos',
    precio:19.00,
    stock:6,
    imagen:'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
  }
];

let carrito = [];

//1. siempre obtengamos los elementos que utilizaremos del HTML
let divContenido = document.getElementById("contenido");

let htmlTarjetas = "";

//transformando arreglo en html
listaPlatillos.forEach(function(plato){
  htmlTarjetas = htmlTarjetas + `<div class="tarjeta">
                                    <div class="imagen">
                                      <img src="${plato.imagen}" alt="${plato.nombre}">
                                    </div>
                                    <div class="texto">
                                      <h4>${plato.nombre}</h4>
                                      <p>${plato.descripcion}</p>
                                      <div class="precio">
                                        <span>S/ ${plato.precio}</span>
                                        <button class="btn-agregar" data-idplato="${plato.id}">
                                          Agregar
                                        </button>
                                      </div>
                                    </div>
                                  </div>`;
});

divContenido.innerHTML = htmlTarjetas;

let buscarPlatoPorId = function(id){
  for(let i = 0; i < listaPlatillos.length; i++){
    //le vamos a pasar solamente un id y nos va a retornar todo el objeto
    if(id === listaPlatillos[i].id){
      return listaPlatillos[i]; //aca retorno el objeto que coincida con el id que le haya pasado
    }
  }
};

//esta función recibirá un objeto con todo el plato, y a partir de ese objeto creamos un pedido con la cantidad del plato, platoApedir el parametro de la función sera un objeto
let agregarACarrito = function(platoAPedir){
  let pedido = {
    plato:platoAPedir,
    cantidad:1
  }
  //lo agregamos a la variable carrito
  carrito.push(pedido)
}

//Obtenemos los btns-agregar, después que cambiamos el innerHTML de divContenido con las tarjetas
//para que esas tarjetas esten en el DOM
//Obtenemos un HTML Collection que los podemos tratar como un arreglo
//querySelectorAll(".btn-agregar")
let btnsAgregar = document.getElementsByClassName("btn-agregar");

//Si nos queremos asegurar que sea un arreglo (de tipo Array)
let arrayBotonesAgregar = Array.from(btnsAgregar);
// console.log(arrayBotonesAgregar)

//recorremos el arreglo, y por cada iteración obtenemos c/botón 1 x 1
arrayBotonesAgregar.forEach(function(boton){
  //y por cada boton que recorramos le vamos a añadir un listener, del evento click
  boton.addEventListener("click", function(evento){

    //Necesito saber que botón estoy presionando, entonces lke agregamos un atributo personalizado al botón.
    //el atributo data-idplato
    //Y lo siguiente que hacemos es obtener el valor de ese atributo con el método getAttribute
    //Gracias a que event.target hace referencia al mismo objeto HTML del que estamos capturando el evento
    let idPlato = evento.target.getAttribute("data-idplato");
    //Después que obtuvimos el idPlato
    let platoObtenido = buscarPlatoPorId(+idPlato); //vuelvo a encontrar el Plato, le pongo un + por delante para que sea Number
    //agregamos al carrito el plato
    agregarACarrito(platoObtenido);
    console.log(carrito)
  })
});

//AQUI voy a poner la parte que me permita mostrar el carrito en la parte derecha
//Tengo que usar mi variable carrito para convertirlo a HTML
//Recuerden revisar la estructura del Array carrito, para que sepan que propiedades necesitan
//Verifiquen como es la estructura HTML que esta dentro de tbody-carrito, en el preview
//En el canal de Front lo van poniendo


//TODO for tomorrow
//1. A partir de una Array, mostrar estos objetos dentro del navegador

//2. Cuando demos click al botón agregar de cada platillo, este se agregue al carrito de compras de la derecha.

//3. Agrupar productos.

//4. mostrar la fecha, hacer que ese menu funcione, y conquistar el mundo...
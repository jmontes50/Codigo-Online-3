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

//1. siempre obtengamos los elementos que utilizaremos del HTML
let divContenido = document.getElementById("contenido");

let htmlTarjetas = "";

listaPlatillos.forEach(function(plato){
  htmlTarjetas = htmlTarjetas + `<div class="tarjeta">
                                    <h2>${plato.nombre}</h2>
                                  </div>`;
})

divContenido.innerHTML = htmlTarjetas;

//TODO for tomorrow
//1. A partir de una Lista, mostrar estos objetos dentro del navegador

//2. Cuando demos click al botón agregar de cada platillo, este se agregue al carrito de compras de la derecha.

//3. Agrupar productos.

//4. mostrar la fecha, hacer que ese menu funcione, y conquistar el mundo...
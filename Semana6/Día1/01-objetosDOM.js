/**window representa un obejto que se crea automáticamente dentro de JS
 * 
 * Va a representar al navegador con toda la información que contiene
 */

console.log(`Es el ancho del navegador en píxeles ${window.innerWidth}`)

console.log(`Es la altura del navegador en píxeles ${window.innerHeight}`)

console.log(`Info del navegador ${window.navigator.userAgent}`)

console.log(`Info de la url ${window.location}`)

/**
 * window.navigator.geolocation.getCurrentPosition(function(infoUbicacion){
  console.log(infoUbicacion)
})
Da igual que invoquemos a window, porque puedo llamar directamente a sus propiedades y ya JS sabe a que estamos referenciando
 */

navigator.geolocation.getCurrentPosition(function(infoUbicacion){
  console.log(infoUbicacion)
})

console.log(window.document)

let titulo = document.querySelector("h1");

console.log(typeof titulo)
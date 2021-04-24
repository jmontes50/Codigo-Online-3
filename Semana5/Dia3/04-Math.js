//La clase Math nos permitirá hacer funciones Matemáticas

console.log(`Raíz cuadrada de 144 = ${Math.sqrt(144)}`)

//Numeros aleatorios
console.log(`Un número aleatorio entre 0 y 1 = ${Math.random()}`)

let random10y50 = Math.random() * (50 - 10) + 10;

console.log(`número aleatorio entre 10 y 50 ${random10y50}`)

console.log(`redondeado ${random10y50.toFixed(2)}`)

console.log(`Pi ${Math.PI}`)

console.log(`Euler ${Math.E}`)

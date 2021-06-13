let saludo = "Hola Mundo"

console.log(saludo)

//types o tipado
let texto:string = "Conferencia Xbox"

// texto = 10000

let cantidad:number = 100

let losQuiere:boolean = true

let misNumeritos:Array<number> = [20,18,19,17,20,12]

let random:any = {nombre:"Backus"} //any acepta cualquier cosa

let random2:unknown = {nombre:"Luna"} //acepta cualquier cosa menos null y undefined

//funciones

let sumar = (num1:number, num2:number):number => {
  return num1 + num2
}

sumar(10, 20)
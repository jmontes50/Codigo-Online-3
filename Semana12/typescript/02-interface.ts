//interface => contrato
//modelos
interface iGato {
  nombre:string
  edad:number
  raza:string
  color?:string
}

let gatita:iGato = {
  nombre: "Gatita",
  edad:6,
  raza:"Siames",
}
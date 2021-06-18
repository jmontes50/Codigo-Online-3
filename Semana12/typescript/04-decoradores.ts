function decorador(texto:string){
  return function(target){ //target, va a representar a mi class Persona, porque lo vamos a modificar
    target.prototype.saludar = function(){
      console.log(`Buenos días, por favor guarde la distancia de seguridad y ${texto}`)
    }
  }
}

//un decorador va a inspeccionar o modificar un comportamiento, y va si o si justo antes de lo que modifique
@decorador("estoy con mascarilla")
class Persona {
  public nombre:string

  constructor(nombre:string){
    this.nombre = nombre
  }

  saludar(texto):void{
    console.log(`Hola que tal, soy ${this.nombre} ${texto}`)
  }
}

let Jhonny:Persona = new Persona("Jhonny")

Jhonny.saludar("cuando un Dota")
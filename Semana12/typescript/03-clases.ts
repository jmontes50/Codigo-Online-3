//contrato
interface iPlato {
  id:number,
  nombre:string,
  ingredientes:Array<string>,
  preparacion:string

  mostrarInfo():void
}

//clase, estas en ts ya pueden implementar una interface
class Platillo implements iPlato{
  public id:number
  public nombre:string
  public ingredientes:Array<string>
  public preparacion:string
  private _ingrediente_secreto:string

  constructor(id:number,nombre:string){
    this.id = id
    this.nombre = nombre
    this.ingredientes = []
    this.preparacion = ""
    //_privado
    this._ingrediente_secreto = "plancton"
  }
  //getters - accesors - obtiene
  get ingrediente_secreto():string{
    return this._ingrediente_secreto
  }
  //setters - modifica
  set ingrediente_secreto(nuevoIngrediente:string){
    this._ingrediente_secreto = nuevoIngrediente
  }

  modificarIngrediente(nuevoIngrediente:string){
    this._ingrediente_secreto = nuevoIngrediente
  }

  mostrarInfo(){
    console.log(`Este Platillo es ${this.nombre} y su preparación es ${this.preparacion}`)
  }
}

let Chifa:Platillo = new Platillo(10, "Aeropuerto");

// Chifa.modificarIngrediente("romero")
Chifa.ingrediente_secreto = "miel"

console.log(Chifa)
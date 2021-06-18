//clase, estas en ts ya pueden implementar una interface
class Platillo {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = [];
        this.preparacion = "";
        //_privado
        this._ingrediente_secreto = "plancton";
    }
    //getters - accesors - obtiene
    get ingrediente_secreto() {
        return this._ingrediente_secreto;
    }
    //setters - modifica
    set ingrediente_secreto(nuevoIngrediente) {
        this._ingrediente_secreto = nuevoIngrediente;
    }
    modificarIngrediente(nuevoIngrediente) {
        this._ingrediente_secreto = nuevoIngrediente;
    }
    mostrarInfo() {
        console.log(`Este Platillo es ${this.nombre} y su preparación es ${this.preparacion}`);
    }
}
let Chifa = new Platillo(10, "Aeropuerto");
// Chifa.modificarIngrediente("romero")
Chifa.ingrediente_secreto = "miel";
console.log(Chifa);

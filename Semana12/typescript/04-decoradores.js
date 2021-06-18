var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(texto) {
    return function (target) {
        target.prototype.saludar = function () {
            console.log("Buenos d\u00EDas, por favor guarde la distancia de seguridad y " + texto);
        };
    };
}
//un decorador va a inspeccionar o modificar un comportamiento, y va si o si justo antes de lo que modifique
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function (texto) {
        console.log("Hola que tal, soy " + this.nombre + " " + texto);
    };
    Persona = __decorate([
        decorador("estoy con mascarilla")
    ], Persona);
    return Persona;
}());
var Jhonny = new Persona("Jhonny");
Jhonny.saludar("cuando un Dota");

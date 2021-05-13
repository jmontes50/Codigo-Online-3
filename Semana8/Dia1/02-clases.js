class Pokemon {
  //Estas son las caracteristicas que va a tener mi Objeto
  //No es obligatorio declarar las propiedades; NO USAMOS LET VAR O CONST dentro de una clase
  // Nombre;
  // Fuerza;
  // Tipo;
  // Agilidad;
  // Resistencia;
  // Nivel;
  //Toda clase va a tener un constructor y siempre este método se ejecutará al inicio de construir un objeto con la clase
  constructor(nombre, fuerza, tipo, agilidad, resistencia, nivel){
    //y acá adentro construiremos el objeto
    //this hará referencia al objeto que en ese momento se este trabajando
    this.Nombre = nombre;
    this.Fuerza = fuerza;
    this.Tipo = tipo;
    this.Agilidad = agilidad;
    this.Resistencia = resistencia;
    this.Nivel = nivel;
    //1ero construye
    //2do después se ejecuta
    console.log("Construyendo");
    //Ejecutar un método de forma obligatoria cada vez que se instancie un objeto
    this.aparecer();
  }
  //un método va a ser una accion(función) que va a tener mi objeto
  aparecer(){
    console.log(`Un ${this.Nombre} salvaje apareció`);
  }

  atacar(veces){
    console.log(`${this.Nombre} ataca con una Fuerza de ${this.Fuerza}, ${veces} veces`)
  }
}
//Cuando creamos un nuevo objeto, eso se llama instancia
let Pikachu = new Pokemon("Pikachu",20,"Eléctrico",70, 15,1000);

console.log(Pikachu)
//instancia Meowth
let Meowth = new Pokemon("Meowth", 30, "Normal", 70, 20, 900);

console.log(Meowth);

//utilizando métodos
// Pikachu.aparecer();
// Meowth.aparecer();

Pikachu.atacar(2);
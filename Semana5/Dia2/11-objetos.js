let perrete = {
  nombre: "Backus",
  edad: 12,
  color:"Blanco",
  esterilizado:false,
  ladra:true,
  hobbies:["Jugar", "Persigue Gatos", "Comer Higadito"],
  comer: function() {
    //olfatea
    //me juzga
    //se resigna
    console.log("come")
  }
}
// console.log(perrete)
console.log(perrete.nombre)
console.log(perrete.color)

console.log(perrete.hobbies[0])

perrete.edad = 13;

console.log(perrete.edad)
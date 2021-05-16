const axios = require('axios'); //esto viene de node_modules

axios.get("https://reqres.in/api/users")
.then(respuesta => console.log(respuesta.data.data))
.catch(error => console.log(error))

console.log("otro cambio")

console.log("Holaaaaaaaaaaaaaa")
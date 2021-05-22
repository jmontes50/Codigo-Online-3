import React, { Component } from "react";

class App extends Component {
  //1. Solamente puedo retornar un elemento en el return
  //2. Si o si vamos a tener un state, los "estados" estarán guardados como propiedades de state
  //3. podemos incluir JS en el JSX con {}
  //4. el state es inmutable
  //5. si queremos modificar el state, tenemos que utilizar el método setState
  //6. Todas mis etiquetas tienen que estar cerradas
  state = {
    nombre:"Osmar",
    contador:0
  }

  incrementar(){
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return (
      <main>
        <div>
          <h1>Hola React!</h1>
        </div>
        <hr/>
        <p>{this.state.nombre}</p>
        <p>{100 + 540}</p>
        <p>Contador: {this.state.contador}</p>
        <button onClick={() => {this.incrementar()}}>Incrementar Contador</button>
      </main>
    );
  }
}

export default App;

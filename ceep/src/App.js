import React, { Component } from "react";
import Formulario from "./components/Formulario.jsx";
import ListaDeNotas from './components/ListaDeNotas.jsx';

class App extends Component {
  render() {
    return (
      <section>
        <Formulario/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;

import React, { Component } from "react";

class Formulario extends Component {  
  render() {
    return (
      <form>
        <input type="text" placeholder="Título"></input>
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default Formulario;

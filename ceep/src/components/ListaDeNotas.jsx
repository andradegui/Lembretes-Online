import React, { Component } from "react";
import CardNotas from "./CardNotas.jsx";

class ListaDeNotas extends Component {
  render() {
    return (
    <ul>
      {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
        return(
          <li>            
            <CardNotas/>
          </li>
        );
      })}
    </ul>
    );
  }
}

export default ListaDeNotas;

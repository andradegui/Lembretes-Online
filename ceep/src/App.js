import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaDeNotas from './components/ListaDeNotas';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor() {
    super();
    
    /*serve para guardar valores que podem vir a mudar com a interação do usuário 
    o state pode ser passado como props*/
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    }    
    this.setState(novoEstado);   
  }

  render() {    
    return (
      <section className="conteudo">
        <Formulario criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;

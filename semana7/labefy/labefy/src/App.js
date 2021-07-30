import React from "react"
import styled from "styled-components"
import axios from "axios"
import CriaPlaylist from "./components/CriaPlaylist"
import ListaPlaylist from "./components/ListaPlaylist"

export default class App extends React.Component{
  state = {
    telaAtual: "cria playlist"
   
  }

  escolheTela = () =>{
    switch(this.state.telaAtual){
      case "cria playlist":
        return <CriaPlaylist irListaPlaylist={this.irListaPlaylist} />
      case "lista":
        return <ListaPlaylist paginaPlaylist={this.paginaPlaylist} />
      default:
        return <div>Erro! Página não encontrada</div>

    }
  }

  paginaPlaylist = () =>{
    this.setState({telaAtual: "cria playlist"})
  }

  irListaPlaylist = () =>{
    this.setState({telaAtual: "lista"})

  }

  render(){
    return(
     <div>
        <h1>Labefy</h1>
        <div>
          {this.escolheTela()}
          </div>
     </div>
    )
  }
}



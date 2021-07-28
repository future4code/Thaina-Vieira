import React from "react";
import axios from "axios";

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers: {
    Authorization: "Thainá-Rodrigues-Vieira-Lovelace"
  }
};



export default class App extends React.Component {
  state = {
    nome: [],
    inputNome: ""

  };

  mudaInputNome = (event) => {
    this.setState ({inputNome: event.target.value});
  };
   
 

  criarUsuario = () =>{
    const body = {
      name: this.state.inputNome
    };

    axios
    .post(url, body, headers)
    .then((resposta) =>{
      alert("Cadastro realizado com sucesso");
      this.setState({inputNome: ""});
    })
    .catch((erro) =>{
      alert(erro.response.data.message);
    });
  }


  render (){
    const componentesUsuarios = this.state.nome.map((usuario) => {
      return <li key={usuario.id}>{usuario.name}</li>;
    });
   

    return(
      <div>
        <button>Ir para a página da lista</button>
        <hr></hr>
        <div>
          <label>Nome:</label>
          <input 
           value={this.state.mudaInputNome}
           onChange={this.mudaInputNome}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input />
        </div>
        <button onClick={this.criarUsuario}>Salvar</button>
        {componentesUsuarios}
      </div>
    )
  }
}






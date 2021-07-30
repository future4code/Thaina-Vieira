import React from "react"
import axios from "axios"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
  body {
    background-image: url(https://i.pinimg.com/originals/6e/c0/3d/6ec03d9ea1c504ffbf916ee31c845239.jpg);
  }
  font-style: oblique;
  
  
`

// const Site = styled.div `
//   padding: 10px;
//   font-style: oblique;
//   background-image: url(https://images.tcdn.com.br/img/img_prod/719551/papel_de_parede_fundo_rosa_bolinhas_marrom_1403_1_20201214002647.jpg);
//   max-height: 100%;
//     p{
//       font-style: oblique;
//     }
// `



export default class App extends React.Component{
  state ={
    activity: {}
  }

  atividade = () =>{
    axios
    .get ("https://www.boredapi.com/api/activity/")
    .then ((res) => {
      console.log(res.data);
      this.setState({activity: res.data})
    })
    .catch((err) =>{
      console.log(err);
    });
  };
  render(){
    const {activity, type, participants, price, accessibility} = this.state.activity
    return(
     <div>
       <GlobalStyle />
       
       <h1>Acabe com seu tédio imeadiatamente com as atividades desentediantes!</h1>
       <h3>Divirta-se</h3>
       <button onClick={this.atividade}>Me aperte</button>
       <hr />
       <h4>Nome: {activity}</h4>
       <h4>Tipo: {type}</h4>
       <h4>Participantes: {participants}</h4>
       <h4>Preço: {price}</h4>
       <h4>Acessibilidade: {accessibility}</h4>
    
     </div>
     
    )
  }
}
  
 


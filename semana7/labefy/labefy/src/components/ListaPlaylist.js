import React from "react"
import axios from "axios"
import styled from "styled-components"



const CardLista = styled.div `
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`



export default class ListaPlaylist extends React.Component{
    state = {
        listagem: []
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "Thainá-Rodrigues-Vieira-Lovelace"
            }
        })
        .then ((res) =>{
            // console.log(res) só para teste
            this.setState({ listagem: res.data.result.list });
            console.log(res.data.result. list)
        })
        .catch ((err) =>{
            // console.log(err) só para teste
            alert ("Ocorreu um problema, tente novamente")
        })

    }

    deletaPlaylist = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "Thainá-Rodrigues-Vieira-Lovelace"
            }

        }) 

        .then((res) =>{
            console.log(res)
            alert("Playlist deletada com sucesso")
            this.pegarPlaylist()
        })
        .catch((err) =>{
            alert("Ocorreu um erro, tente novamente")
        })
    }

    render(){
        const listaReproducao = this.state.listagem && this.state.listagem.map((listas) =>{
            return <CardLista key={listas.id}>{listas.name}
            <button onClick={() => this.deletaPlaylist(listas.id)}>x</button>
            </CardLista>
           

        })

       

        return(
            <div>
               <button onClick={this.props.paginaPlaylist}>Voltar para página inicial</button>
               <h2>Sua lista de playlists</h2>
                {listaReproducao}
            </div>
           
        )
    }
}



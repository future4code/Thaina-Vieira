import axios from "axios"
import React from "react"



export default class CriaPlaylist extends React.Component{
    state = {
        playlist: ""
    }

    handlePlaylist = (event) =>{
        this.setState({playlist: event.target.value})
    }

    fazerPlaylist = () =>{
        // console.log(this.state) para ver se o state tava guardando as informações
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist
        }

        axios.post(url, body, {
            headers: {
                Authorization: "Thainá-Rodrigues-Vieira-Lovelace"
            }
        })

        .then((res) =>{
            alert("Playlist criada com sucesso")
            this.setState({playlist:""}) //para limpar o input depois que criar a playlist
        })

        .catch((err) =>{
            // console.log(err.response.data) para ver qual erro dar quando repete o nome da playlist
            alert(err.response.data.message)
        })
    }


    render(){
        return(
            <div>
                <button onClick={this.props.irListaPlaylist}>Ir para lista de playlist</button>
                <h2>Criar lista de reprodução</h2>
                <input 
                  placeholder={"Crie sua playlist aqui"} 
                  value={this.state.playlist}
                  onChange={this.handlePlaylist}
                  />
                    
                <button onClick={this.fazerPlaylist}>Criar</button>
            </div>
        )
    }
}

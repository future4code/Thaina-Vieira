import React from "react"

export default class ListaPlaylist extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.paginaPlaylist}>Voltar para página que cria playlists</button>
                <h1>Sua lista de playlists</h1>
            </div>
           
        )
    }
}



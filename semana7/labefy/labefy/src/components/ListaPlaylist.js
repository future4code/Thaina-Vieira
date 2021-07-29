import React from "react"

export default class ListaPlaylist extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.paginaPlaylist}>Ir para página que cria playlists</button>
            </div>
        )
    }
}
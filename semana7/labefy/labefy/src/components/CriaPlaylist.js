import React from "react"

export default class CriaPlaylist extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.irListaPlaylist}>Ir para lista de playlist</button>
            </div>
        )
    }
}
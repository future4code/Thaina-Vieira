import React from "react"
import { ListaContainer, ImagemRedonda } from "./styled"


export const ListaPerfil = () => {
    return (
        <ListaContainer>
            <ImagemRedonda src = {"https://picsum.photos/50/50?=1"}/>
            <h2>Nome da pessoa</h2>
        </ListaContainer>
    )
}
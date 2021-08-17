import React from "react"
import { ListaPerfil } from "../../components/ListaPerfil"
import {MatchesContainer, ListaDeMatches} from "./styled"



export const PaginaDeMatches = () =>{
    return(
        <MatchesContainer>
            <ListaDeMatches>
                <ListaPerfil />
                <ListaPerfil />
                <ListaPerfil />
                <ListaPerfil />
                <ListaPerfil />
            </ListaDeMatches>
        </MatchesContainer>
    )
}
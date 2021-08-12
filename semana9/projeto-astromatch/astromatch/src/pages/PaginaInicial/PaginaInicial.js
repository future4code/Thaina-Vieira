import React, { useEffect, useState } from "react"
import { HomeContainer, Perfil, ImagemPerfil } from "./styled"
import axios from "axios"

export const PaginaInicial = () =>{
    const [perfil, setPerfil] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thaina-rodrigues-vieira-lovelace/person"

    useEffect (() => {
        pegarPerfil()
    }, [])
    const pegarPerfil = () =>{
        axios.get(url)
        .then((res) =>{
            setPerfil(res.data.profile)
        })
        .catch((err) =>{
            console.log(err.response)
        })

    }
    
const body ={
    
        "id": "",
        "choice": true
    
}
    const escolhePessoa =() =>{
        axios.post(url, body, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
           
        .then((res) =>{
            console.log(res.data)
        })
        .catch((err) =>{
            console.log(err.response)
        })
        

    }


    return(
        <HomeContainer>
            <Perfil>
                <ImagemPerfil src={perfil.photo}/>
                <h2>{perfil.name}, {perfil.age}</h2>
                <p>{perfil.bio}</p>
                <div>
                    <button onClick={escolhePessoa}>❌</button>
                    <button onClick={escolhePessoa}>💚</button>
                </div>
            </Perfil>
        </HomeContainer>
    )
}
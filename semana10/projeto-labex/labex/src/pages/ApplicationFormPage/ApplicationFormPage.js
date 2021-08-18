import React from "react"
import { useHistory } from "react-router-dom"
import { goToListTripsPage } from "../../route/coordinator"


export const ApplicationFormPage = () =>{
    return(
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <button>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}
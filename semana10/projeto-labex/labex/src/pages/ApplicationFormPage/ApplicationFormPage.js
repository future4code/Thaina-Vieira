import React from "react"
import { useHistory } from "react-router-dom"
import { goToListTripsPage } from "../../route/coordinator"
import { FormPage } from "./styled"

export const ApplicationFormPage = () =>{
    const history = useHistory();
    return(
        <FormPage>
            <h1>Inscreva-se para uma viagem</h1>
            <form>
                <input placeholder="Escolha Uma Viagem"/>
                <input placeholder="Nome"/>
                <input placeholder="Idade"/>
                <input placeholder="Texto de Candidatura"/>
                <input placeholder="Profissão"/>
                <input placeholder="Escolha Um País"/>
            </form>
            <button onClick={() => goToListTripsPage(history)}>Voltar</button>
            <button>Enviar</button>
        </FormPage>
    )
}

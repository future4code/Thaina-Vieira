import React from "react"
import { useHistory } from "react-router"
import { goToAdminHomePage } from "../../route/coordinator"
import { CreatePage } from "./styled"


export const CreateTripPage = () => {
    const history = useHistory();


    return (
        <CreatePage>
            <h1>Criar Viagem</h1>
            <form>
                <input placeholder="Nome" />
               <input placeholder="Escolha Um Planeta"/>
                <input placeholder="Data" />
                <input placeholder="Descrição" />
                <input placeholder="Duração Em Dias" />
                <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
                <button>Criar</button>
            </form>
        </CreatePage>
    )
}
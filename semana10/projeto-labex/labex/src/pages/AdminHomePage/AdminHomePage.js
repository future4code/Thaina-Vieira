import React from "react"
import { useHistory } from "react-router"

export const AdminHomePage = () =>{
    const history= useHistory();

    const goToCreateTripPage = () =>{
        history.push("/admin/trips/create")
    }
    const goToTripDetailsPage = () =>{
        history.push("/admin/trips/:id")
    }

    return(
        <div>
            <h1>Painel Adminstrativo</h1>
            <button>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button>Logout</button>

            
        </div>
    )
}
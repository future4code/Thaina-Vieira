import React from "react"
import { useHistory } from "react-router"
import { goToHomePage } from "../../route/coordinator";

export const AdminHomePage = () =>{
    const history= useHistory();

    const goToCreateTripPage = () =>{
        history.push("/admin/trips/create")
    }
    const goToTripDetailsPage = () =>{
        history.push("/admin/trips/NoIFVcOiSgTKTIPVZwXS")
    }

    return(
        <div>
            <h1>Painel Adminstrativo</h1>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button>Logout</button>

           {goToTripDetailsPage}

            
        </div>
    )
}
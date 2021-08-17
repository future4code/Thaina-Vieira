import React from "react"
import { useHistory} from "react-router-dom"


export const ListTripsPage = () =>{
    const history = useHistory();

    const goToApplicationFormPage = () =>{
        history.push("/trips/application")
    }
    return(
       <div>
            <button>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            <h1>Lista De Viagens</h1>
       </div>
    )

}
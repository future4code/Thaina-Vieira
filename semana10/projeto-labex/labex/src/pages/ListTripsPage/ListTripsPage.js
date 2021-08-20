import React from "react"
import { useHistory} from "react-router-dom"
import { goToHomePage } from "../../route/coordinator";
import { ListTrip } from "./styled";


export const ListTripsPage = () =>{
    const history = useHistory();

    const goToApplicationFormPage = () =>{
        history.push("/trips/application")
    }
    return(
       <ListTrip>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            <h1>Lista De Viagens</h1>
       </ListTrip>
    )

}
import React from "react";
import { useHistory } from "react-router-dom";
import { PaginaInicial } from "./styled";


export const HomePage = () =>{
    const history = useHistory();
    
    const goToListTripsPage = () =>{
        history.push("/trips/list");
    }

    const goToLoginPage = () =>{
        history.push("/login")
    }

    return(
        <PaginaInicial>
            <h1>LabeX</h1>
            <button onClick={goToListTripsPage}>Ver Viagens</button>
            <button onClick={goToLoginPage}>Área de Admin</button>
            
        </PaginaInicial>
    )

}
import React from "react"
import axios from "axios"
import { useHistory } from "react-router"
import { useEffect } from "react";
import { goToHomePage } from "../../route/coordinator";
import { AdminPage } from "./styled";

export const AdminHomePage = () => {
    const history = useHistory();

    useEffect(() => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/thaina/trips/:id/apply', {
                headers:{
                   'Content-Type': 'application/json'
                }
            })

                .then((response) => {
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error.response)
                })
            }, [])

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }
    // const goToTripDetailsPage = () =>{
    //     history.push("/admin/trips/NoIFVcOiSgTKTIPVZwXS")
    // }

    return (
        <AdminPage>
            <h1>Painel Adminstrativo</h1>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button>Logout</button>

            {/* {goToTripDetailsPage} */}


        </AdminPage>
    )
}
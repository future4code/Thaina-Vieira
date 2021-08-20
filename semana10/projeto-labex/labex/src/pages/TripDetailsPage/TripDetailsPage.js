import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useHistory } from "react-router"
import { goToAdminHomePage } from "../../route/coordinator"

export const TripDetailsPage = () =>{
    const history = useHistory();

    useEffect(() => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/thaina/trip/Bbry1RZtCmIEwKPTMWED', {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imk5aTg2Q1dpVlVneEtDZjc4SGJtIiwiZW1haWwiOiJ0aGFpbmFAZ21haWwuY29tIiwiaWF0IjoxNjI5Mzc4OTE2fQ.ZhYGyKCY8OES9POQe_5JpdgmM1KqpVxWyhF6m6N51kY'
            }
        })
        .then((response) =>{
            console.log(response.data)
        }).catch((error) =>{
            console.log(error.response)
        })
    }, [])

    return(
        <div>
            <p><b>Nome:</b></p>
            <p><b>Descrição:</b></p>
            <p><b>Planeta</b></p>
            <p><b>Duração</b></p>
            <p><b>Data:</b></p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            <h3>Candidatos Pendentes</h3>
            <h3>Candidatos Aprovados</h3>
        </div>
    )
}
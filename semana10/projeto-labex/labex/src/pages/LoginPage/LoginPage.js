import React from "react"
import { useHistory } from "react-router"

export const LoginPage = () =>{
    const history = useHistory();

    const goToAdminHomePage = () =>{
        history.push("/admin/trips/list")
    }

    return(
        <div>
            <h1>Login</h1>
            <input />
            <input />
            <button>Voltar</button>
            <button onClick={goToAdminHomePage}>Entrar</button>
        </div>
    )
}
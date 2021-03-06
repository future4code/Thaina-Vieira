import React from "react"
import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import { goToHomePage } from "../../route/coordinator"
import { Login} from "./styled"

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const goToAdminHomePage = (event) => {
        event.preventDefault()

        console.log(email, password)
        const body = {
            email: email,
            password: password
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/thaina/login",
            body
        )
            .then((response) => {
                console.log(response.data)
                history.push("/admin/trips/list")
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    return (
        <Login>
            <h1>Login</h1>
            <form onSubmit={goToAdminHomePage}>
                <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                />
                <input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button type={"submit"}>Entrar</button>
                
            </form>

        </Login>
    )
}
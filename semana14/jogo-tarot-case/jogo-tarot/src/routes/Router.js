import React from "react"
import PaginaInicial from "../pages/PaginaInicial/PaginaInicial"
import PaginaDetalhes from "../pages/PaginaDetalhes/PaginaDetalhes"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PaginaInicial />
                </Route>

                <Route exact path="/detalhes">
                    <PaginaDetalhes />
                </Route>

                <Route>
                    <h1>Página Não Encontrada!</h1>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router
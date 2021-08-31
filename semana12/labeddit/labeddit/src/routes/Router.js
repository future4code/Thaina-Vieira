import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PaginaLogin from "../pages/LoginPage/PaginaLogin"
import PaginaCadastro from "../pages/SignUpPage/SignUpPage"
import PaginaFeed from "../pages/PaginaFeed/PaginaFeed"
import PaginaPost from "../pages/PaginaPost/PaginaPost"
import PaginaErro from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/styled"

const Router = () =>{
    return(
        <BrowserRouter>
        <Header/>
         <Switch>
             <Route exact path="/login">
                 <PaginaLogin/>
             </Route>

             <Route exact path="/cadastro">
                 <PaginaCadastro/>
             </Route>

             <Route exact path="/">
                 <PaginaFeed/>
             </Route>

             <Route exact path="/posts">
                 <PaginaPost/>
             </Route>

             <Route>
                 <PaginaErro/>
             </Route>

         </Switch>
        </BrowserRouter>
    )
}

export default Router
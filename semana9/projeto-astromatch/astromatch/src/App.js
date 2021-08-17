import React, { useState, useEffect } from "react"
import { PaginaDeMatches } from "./pages/PaginaDeMatches/PaginaDeMatches"
import { PaginaInicial } from "./pages/PaginaInicial/PaginaInicial"



const App = () => {

  const [telaAtual, setTelaAtual] = useState("home")

  // const escolheTela = () => {
  //   switch (telaAtual) {
  //     case "home":
  //       return <PaginaInicial />
  //     case "matches":
  //       return <PaginaDeMatches />
  //     default:
  //       return <PaginaInicial />
  //   }
  // }

  const escolheTela = () =>{
    if(telaAtual === "home"){
      setTelaAtual("matches")
    } else{
      setTelaAtual("home")
    }
  }

  const limparMatches = ()=>{
    console.log("Esse botão vai limpar os matches")
  }

  const mudarTela = (nomeTela) => {
    setTelaAtual(nomeTela)
  }

  return (
    <div>
      {telaAtual === "home" ? <PaginaInicial /> : <PaginaDeMatches />}
      <button onClick={escolheTela}>{telaAtual === "home" ? "Matches" : "Home"}</button>
      <button onClick={limparMatches}>Limpar matches</button>
      

      {/* <button onClick={() => mudarTela("home")}>Home</button>
      // <button onClick={() => mudarTela("matches")}>Match</button>
      {escolheTela()} */}

    </div>
  )

}
export default App
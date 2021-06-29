/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de Blackjack")


if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
   const primeiraCartaUsuario = comprarCarta()
   const segundaCartaUsuario = comprarCarta()
   const primeiraCartaComputador = comprarCarta() 
   const segundaCartaComputador= comprarCarta()


const pontuacaoDoUsuario = (primeiraCartaUsuario.valor + segundaCartaUsuario.valor)
const pontuacaoDoComputador = (primeiraCartaUsuario.valor + segundaCartaUsuario.valor)
console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - ${pontuacaoDoUsuario}`)
console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - ${pontuacaoDoComputador}`)

if(pontuacaoDoUsuario > pontuacaoDoComputador){
   console.log("O usuário ganhou")
}else if(pontuacaoDoComputador > pontuacaoDoUsuario){
   console.log("O computador ganhou")
}else if(pontuacaoDoComputador === pontuacaoDoUsuario){
   console.log("Empate")
}   
}else{
   console.log("O jogo acabou") 
}   

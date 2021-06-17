//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 

// questão 1
// a) 10
//    50

// b) Aconteceu que nada foi impresso no console

 // questao 2
// a) Essa função nos diz se um conjunto de caracteres pode ser encontrado dentro de outra string. Ela nos ajuda a descobrir se algo é verdadeiro ou falso.
// b) i- false
// ii- true
// iii- true  

//EXERCÍCIOS DE ESCRITA DE CÓGIDO

// questao 1
// a)
 
// function falandoDeMim() {
//     console.log("Eu sou Thainá, tenho 23 anos, moro em Goiás e sou estudante.")
// }

// falandoDeMim()


// b)

function dadosPessoais(nome, idade , endereço , profissão){
    console.log(`Eu sou ${nome} tenho ${idade} anos, moro em  ${endereço} e sou  ${profissão}.`)
}


dadosPessoais('Thainá' , 23 , 'Goiás' , 'Atendente')

const nomeInserido = prompt('Insira o seu nome')
const idadeInserida = Number(prompt('Insira a sua idade'))
const enderecoInserido = prompt('Insira aonde mora')
const profissaoInserida = prompt('Insira a sua profissão')

dadosPessoais(nomeInserido, idadeInserida, enderecoInserido, profissaoInserida)
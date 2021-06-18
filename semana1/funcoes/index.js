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
  
// essa forma de fazer estar certa:

// function falandoDeMim() {
//     console.log("Eu sou Thainá, tenho 23 anos, moro em Goiás e sou estudante.")
// }

// falandoDeMim()

// outra forma de responder a questao a:

// const nome = "Thaina"
// const idade = 23
// const cidade = "Cidade Ocidental" 
// const estudante = "Sou estudante"

// function imprimeMensagem() {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} `)
// }

// imprimeMensagem() 


// b)
// uma forma de fazer:

// function formaFrase  (nome, idade, cidade, profissão) {
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`
// }
// const frase = formaFrase ('Thainá', 23, 'Cidade Ocidental', 'Atendente')
// console.log(frase)

// outra forma de fazer:

// function dadosPessoais(nome, idade, endereço, profissão){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço}, e sou ${profissão}.`)
// }
// dadosPessoais('Thainá', 23, 'Goiás', 'Atendente')
// const nomeInserido = prompt('insira seu nome')
// const idadeInserida = prompt('insira a sua idade')
// const enderecoInserido = prompt('insira aonde mora')
// const profissaoInserida = prompt('insira a sua profissão')

// dadosPessoais(nomeInserido, idadeInserida, enderecoInserido, profissaoInserida)

// questão 2
// a)

// function somaDoisnumeros(num1, num2){
//     return num1 + num2
// }
// const resultado = somaDoisnumeros(10, 30)
// console.log(resultado)

// b)

// function verificaMaiornumero(num1, num2){
//     return num1 >= num2
// }
// const primeiroNumeromaior = verificaMaiornumero(20, 30)
// console.log(primeiroNumeromaior)

// c)

// function verificaParidade(numero){
//     return numero % 2 === 0
// }
// const ehpar = verificaParidade(4)
// console.log(ehpar)

// d)
 
// function retornaTamanho(texto){
//     return `${texto.length}, ${texto.toUpperCase()}`
// }
// console.log(retornaTamanho('olá'))

// questão 3

// function soma(numero1, numero2){
//     return numero1 + numero2
// }

// function subtrai(numero1, numero2){
//     return numero1 - numero2
// }

// function multriplica(numero1, numero2){
//     return numero1 * numero2
// }

// function divide(num1, num2){
//     return numero1 / numero2
// }

// const primeiroNumero = Number(prompt('insira o primeiro número'))
// const segundoNumero = Number(prompt('insira o segundo número'))

// console.log('Soma:', soma(primeiroNumero, segundoNumero))
// console.log('Diferença:', subtrai(primeiroNumero, segundoNumero))
// console.log('Multiplicação:', multiplica(primeiroNumero, segundoNumero))
// console.log('Divisão:', divide(primeiroNumero, segundoNumero))





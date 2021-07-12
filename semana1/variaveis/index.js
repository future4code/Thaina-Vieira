// Exercícios de interpretação de código

// 1)
// será impresso 10 10 5
// acho que será impresso o valor da variavel a e b e também o valor de b que está sem variavel.Exercícios

// 2)
// será impresso 10 10 10

// 3)
 let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
 let valorDiaTrabalhado = prompt("Quanto você recebe por dia?")
 alert(`Você trabalha ${valorDiaTrabalhado/horasTrabalhadasPorDia} por hora`)

Exercícios de escrita de código

1)
//a) 
let nome
//b
let idade
//c)
console.log('Tipo variavel:', typeof nome)
console.log('Tipo variavel:', typeof idade)
//d)
//Foi impresso undefined por que as variaveis estão sem valores.
//e)
let nome = prompt('Qual é o seu nome?')
let idade = prompt('Quantos anos você tem?')
//f)
//Notei que agora que atribui um valor as variaveis p typeof retornou o tipo certo da variavel
//g)
console.log(`Olá ${nome} você tem ${idade} anos`)

2)
const roupa = prompt('Você esta usando roupa azul hoje?')
const carro = prompt('Você tem carro?')
const celular = prompt('Você tem celular?')

console.log(`Você esta usando roupa azul hoje? ${roupa}`)
console.log(`Você tem carro? ${carro}`)
console.log(`Você tem celular? ${celular}`)

3)
//Não consegui resolver, fiquei horas e não saia nada
let a = 10
let b = 5
let c
a = b
b = c
c = a
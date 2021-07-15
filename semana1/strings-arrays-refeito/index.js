//Exercícios de interpretação de códigos
 
//1)

let array
console.log('a. ', array) // a,undefined

array = null
console.log('b. ', array) //b.null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //c.11

let i = 0
console.log('d. ', array[i]) //d.3, o valor de i é igual a 3, por que ele é o primeiro número do array [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

array[i+1] = 19
console.log('e. ', array) //e. (11)[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]. O array [i+1] fez uma substituição do 4 pelo 19 por que i+1=4, que é o segundo valor do array

const valor = array[i+6]
console.log('f. ', valor) //f.9, o i é igual a 3, então 3+6=9

//2)

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27, deu 27 por que contou até os espaçoes entre as letras.

//Exercícios de escrita de código

//1)

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu email")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} `)

//2)

const comidaFavorita = ["Hamburguer", "batata frita" , "panqueca", "lasanha", "chocolate"]
console.log(comidaFavorita)
console.log("Essas são as minhas comidas preferidas:", 
`${comidaFavorita[0]}
${comidaFavorita[1]}
${comidaFavorita[2]}
${comidaFavorita[3]}
${comidaFavorita[4]}`)

const comidaNova = prompt("Digite a sua comida favorita")
comidaFavorita[1] = comidaNova
console.log(comidaFavorita)

//3)

const listaDeTarefas = []
const tarefaUm = prompt("Digite a primeira tarefa")
const tarefaDois = prompt("Digite a segunda tarefa")
const tarefaTres = prompt("Digite a terceira tarefa")
listaDeTarefas.push(tarefaUm)
listaDeTarefas.push(tarefaDois)
listaDeTarefas.push(tarefaTres)
console.log(listaDeTarefas)

const tarefaRealizada = prompt("Digite o indice da tarefa que já realizou 0, 1 ou 2")
listaDeTarefas.splice((tarefaRealizada), 2)
console.log(listaDeTarefas)


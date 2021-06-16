 Exercícos de interpretação de códigos

// questão-1:


let array
console.log('a. ', array) resposta: a. undefined



array = null
console.log('b. ', array) resposta: b. null



array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) resposta: c. 11



let i = 0
console.log('d. ', array[i]) resposta: array is not defined



array[i+1] = 19
console.log('e. ', array) resposta: array is not defined



const valor = array[i+6]
console.log('f. ', valor) resposta: array is not defined



questao-2:


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 
resposta: SUBI EM ÔNIBUS EM MIRROCOS 27



Exercícios de escrita de código

questão-1:


const nomeDoUsuario = prompt('Insira o seu nome')
const emailDoUsuario = prompt('Insira o seu email')
const frase = ' o email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}.'

console.log(frase)

questao-2:


const minhasComidaspreferidas = ['hamburguer', 'pizza', 'lasanha', 'chocolate', 'milho']
console.log(minhasComidaspreferidas) 

console.log('essas são as minhas comidas preferidas')
console.log(minhasComidaspreferidas[0])
console.log(minhasComidaspreferidas[1])
console.log(minhasComidaspreferidas[2])
console.log(minhasComidaspreferidas[3])
console.log(minhasComidaspreferidas[4])

const comidaFavoritausuario = prompt ('Qual a sua comida preferida?')
const novaLista = minhasComidaspreferidas[1].replaceAll, comidaFavoritausuario)
console.log(novaLista)


questão-3:


const listaDetarefas = []

const tarefas = prompt('Digite 3 tarefas que precisa fazer no dia')
const listaDetarefas = ['lavar a casa' , 'lavar a louça' , 'lavar o banheiro']
console.log(listaDetarefas)

const indice = prompt('Digite o indice da tarefa já realizada') 
console.log(indice)

const listaDetarefas = ['lavar a casa' , 'lavar a louça' , 'lavar o banheiro']
listaDetarefas.pop()
console.log(listaDetarefas)
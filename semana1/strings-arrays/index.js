//  Exercícos de interpretação de códigos

// // questão-1:


// let array
// console.log('a. ', array) resposta: a. undefined, por que declarou uma variável e não atribiui um valor.



// array = null
// console.log('b. ', array) resposta: b. null



// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) resposta: c. 11 (array.length vai contar o tanto de coisa na array)



// let i = 0
// console.log('d. ', array[i]) resposta: (array is not defined-errado)(resposta: 3, por que a posição i=0 é a posição zero.Na posição zero tem o número 3. Quando tiver [i] significa posição)



// array[i+1] = 19
// console.log('e. ', array) resposta: (array is not defined-errado)(resposta: 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13. Vai trocar o quatro pelo 19, por que i+1 dar na posição 4 do array)



// const valor = array[i+6]
// console.log('f. ', valor) resposta: (array is not defined- errado)(resposta:9 , por que i+6 dar na posição 9 do array)



// questao-2:


// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 
// resposta: SUBA EM ÔNABUS EM MIRROCOS 27 (Acertei)



// Exercícios de escrita de código

// questão-1:


// const nomeDoUsuario = prompt('Insira o seu nome')
// const emailDoUsuario = prompt('Insira o seu email')
// const frase (errado, poderia ter colocado isso dentro console.log) = 'o email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}.'

// console.log(frase)

// questao-2:


// const minhasComidaspreferidas = ['hamburguer', 'pizza', 'lasanha', 'chocolate', 'milho']
// console.log(minhasComidaspreferidas) 

// console.log('essas são as minhas comidas preferidas:')
// console.log(minhasComidaspreferidas[0])
// console.log(minhasComidaspreferidas[1])
// console.log(minhasComidaspreferidas[2])
// console.log(minhasComidaspreferidas[3])
// console.log(minhasComidaspreferidas[4])

// const comidaFavoritausuario = prompt ('Qual a sua comida preferida?')
// const novaLista = minhasComidaspreferidas[1].replaceAll, comidaFavoritausuario) (errado)
// minhasComidaspreferidas[1] = comidaFavoritausuario (certo)
// console.log(comidaFavoritausuario)


// questão-3: (a primeira parte esta toda errada)


// const listaDetarefas = []

// const tarefas = prompt('Digite 3 tarefas que precisa fazer no dia') (errado, tinha fazer tres prompts: uma cada tarefa)
// const listaDetarefas = ['lavar a casa' , 'lavar a louça' , 'lavar o banheiro']
// console.log(listaDetarefas)

// const indice = prompt('Digite o indice da tarefa já realizada') 
// console.log(indice)

// const listaDetarefas = ['lavar a casa' , 'lavar a louça' , 'lavar o banheiro']
// listaDetarefas.pop()
// console.log(listaDetarefas)

// questao-3 (formacorreta)

// const listaDetarefas = []
// const primeiraTarefa = prompt ('Digite uma tarefa')
// const segundaTarefa = prompt ('Digite uma tarefa')
// const terceiraTarefa = prompt ('Digite uma tarefa')

// listaDetarefas.push(primeiraTarefa)
// listaDetarefas.push(segundaTarefa)
// listaDetarefas.push(terceiraTarefa)

// console.log(listaDetarefas)


// const tarefaRealizada = prompt('Digite o indice de uma tarefa que já realizou: 0, 1 ou 2')
// listaDetarefas.splice(Number(tarefaRealizada), 1)
// console.log(listaDetarefas)
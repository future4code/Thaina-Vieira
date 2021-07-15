
//Exercícios de interpretação de codigo

//1)
a.false
b.false
c.true
d.booleano

//2/3)
//Faltou colocar o Number na frente do prompt

//Exercícios de escrita de códigos

//1)
const idade = Number(prompt("Digite a sua idade"))
const idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo(a)"))
const idadeMaior = idade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idadeMaior)

const diferencaIdade = idade - idadeAmigo
console.log(diferencaIdade)

//2)
const numeroPar = Number(prompt("Insira um número par"))
const resto = numeroPar % 2
console.log(resto)

//Notei que o resto sempre é zero
//O resto está sempre dando um


//3)
const idadeAnos = Number(prompt("Digite a sua idade"))
console.log("A idade do usuario em meses é", idadeAnos * 12)
console.log("A idade do usuario em dias é", idadeAnos * 365)
console.log("A idade do usuario em horas é", idadeAnos * 365 * 24)

//4)
const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))
console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisivel pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0)

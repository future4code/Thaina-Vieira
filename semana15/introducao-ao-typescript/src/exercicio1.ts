// // a)Dar erro, por que o tipo é string e não number 
const minhaString: string = 1


// // b) Para que uma variável do tipo Number aceite uma string é só usar union type |
const meuNumero: number = 1


//c) 
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const fred: pessoa = {
    nome: "Fred",
    idade: 24,
    corFavorita: "preto"
}

const joao: pessoa = {
    nome: "João",
    idade: 30,
    corFavorita: "azul"
}

const maria: pessoa = {
    nome: "Maria",
    idade: 20,
    corFavorita: "rosa"
}




d)
enum coresArcoIris {
    ROSA = "Rosa",
    AZUL = "Azul", 
    ROXO = "Roxo"
}

type cores = {
    class : coresArcoIris
}
const azul: cores = {
    class : coresArcoIris.AZUL
}
 console.log("azul")
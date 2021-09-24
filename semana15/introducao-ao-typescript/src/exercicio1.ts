// // a)Acontece que o typescript avisa que Number não pode ser atribuido a uma variavel do tipo string
const minhaString: string = "Ola"
minhaString = 1509


// // b) Para que uma variável do tipo Number aceite uma string é só usar union type |
let meuNumero: number | string = 0
meuNumero = "123"
meuNumero = 55
meuNumero = "abc"


//c) 
const eu = {
    nome: "Thainá",
    idade: 24,
    corFavorita: "Preto"
  }

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const fred: pessoa = {
    nome: "Fred",
    idade: 24,
    corFavorita: "Vermelho"
}

const joao: pessoa = {
    nome: "João",
    idade: 30,
    corFavorita: "Azul"
}

const maria: pessoa = {
    nome: "Maria",
    idade: 20,
    corFavorita: "Verde"
}




// d)

enum coresArcoIris {
  VIOLETA = "VIOLETA",
  ANIL = "ANIL",
  AZUL = "AZUL",
  VERDE = "VERDE",
  AMARELO = "AMARELO",
  LARANJA = "LARANJA",
  VERMELHO = "VERMELHO"
}


type PessoaArcoIris = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS 
  }
  
  const fredArcoIris: PessoaArcoIris = {
    nome: "Fred",
    idade: 24,
    corFavorita: CORES_ARCO_IRIS.VERMELHO
  }
  
  const joaoArcoIris: PessoaArcoIris = {
    nome: "Joao",
    idade: 30,
    corFavorita: CORES_ARCO_IRIS.AZUL
  }
  
  const mariaArcoIris: PessoaArcoIris = {
    nome: "Maria",
    idade: 20,
    corFavorita: CORES_ARCO_IRIS.VERDE
  }
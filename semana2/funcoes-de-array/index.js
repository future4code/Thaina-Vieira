// Exercícios de interpretação de códigos

// questão 1)

//{nome: "Amanda Rangel", apelido: "Mandi"} 0 (3) [{…}, {…}, {…}]
//{nome: "Laís Petra", apelido: "Laura"} 1 (3) [{…}, {…}, {…}]
//{nome: "Letícia Chijo", apelido: "Chijo"} 2 (3) [{…}, {…}, {…}]

// questão 2)

//["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// questão 3)

//{nome: "Amanda Rangel", apelido: "Mandi"}
//{nome: "Laís Petra", apelido: "Laura"}

//Exercícios de escrita de códigos

// questão 1)

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// a)

//const nomeDosPets = pets.map((pets) =>{
    //return pets.nome
//})
//console.log(nomeDosPets)

// b)

// const cachorroSalsicha = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
// })
// console.log(cachorroSalsicha)

// c)

//  const cupomDesconto = (item) => {
//      if(item.raca === "Poodle"){
//          console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.raca}!`)
//      }
//  }
//  const descontoPoodle = pets.filter(cupomDesconto)
//  console.log(descontoPoodle)

// questão 2)
 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)

//  const itens = produtos.map((produtos) => {
//      return produtos.nome
//  })
//  console.log(itens)

// b)


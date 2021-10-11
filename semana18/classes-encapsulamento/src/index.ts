// 1)
// a)Para chamar o construtor usa o this

// b)
// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
  
//   }

const novaConta: UserAccount = new UserAccount("5555555555", "Bruna", 25)

// c) Variáveis privadas só podem ser acessadas de dentro da própria classe, usando a keyword this
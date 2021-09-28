### Exercicio 1
a) 
VARCHAR(n)- É usado para strings que tenha no máximo n caracteres. (Para caracteres variáveis);
DATE- É usado para representar uma data
PRIMARY KEY- É uma chave primária que possui um identificar único
NOT NULL- para fixar como obrigatório e não opcional

b)
 Usando o comando SHOWDATABASE apareceu uma pequena tabela com o nome do meu database: lovelace-2147751-thaina-vieira (SHOW DATABASES/TABLES traz os nomes de cada database/tabela existente na schema.)
Usando o comando SHOW TABLES apareceu uma pequena tabela com o nome da tabela Actor

c) 
O comando DESCRIBE Actor descreveu a tabela de atores que tinha sido feita anteriormente. Mostrou em uma tabela o id, name, salary, birth_date e gender com os seus respectivos type, null, key,default, extra... (O comando DESCRIBE Actor traz informações mais precisas de como a tabela foi estruturada. É mais legível que o comando SQL usado para sua criação.)

### Exercicio 2
a)

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b)
> Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' Entrada duplicada para a chave primária.
O programa detecta e impede automaticamente a criação de uma entrada com PRIMARY KEY já existente.
Entrada duplicada para a chave primária.


c)
> Error Code: 1136. Column count doesn't match value count at row 1  A contagem da coluna não corresponde á contagem do valor da linha 1
Apesar de todas as informações necessárias terem sido passadas, não foram passadas as respectivas colunas entre parênteses da primeira linha do comando.

Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1900-10-21",
  "female"
);

d)
> Error Code: 1364. Field 'name' doesn't have a default value  O nome do campo não tem um valor padraão.
Era esperado mais um campo de dado name para que um novo item na tabela Actor fosse criado.Deu erro por que estava faltando o name 

correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Marcio Garcia",
  400000,
  "1949-04-18", 
  "male"
);

e)
> Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1  Valor de data incorreto '1950' para a coluna "data_nascimento" na linha 1
O dado do campo birth_date precisa ser uma string no formato "YYYY-MM-DD" Deu erro por que estava faltando as aspas na data de nascimento
Y de year (ano), M de month (mês) e D de day (dia)

Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "John Doe",
  600000,
  "1955-10-02", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Jane Doe",
  1000000,
  "1966-12-25", 
  "female"
);
```

### Exercicio 3
a)
```sql
SELECT * FROM Actor WHERE gender = "female";
```

b)
```sql
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c)
Foi retornado uma tabela com as lacunas do  id, name, salary, birth_date, vazios. A pesquisa é válida, mas não é encontrado nenhum actor.

d)
```sql
SELECT id, name, salary from Actor WHERE salary < 500000;
```

e)
> Error Code: 1054. Unknown column 'nome' in 'field list' coluna desconhecida 'nome' na lista de campos
O nome da coluna 'nome' não existe, porque na criação da tabela foi utilizado 'name'.

Correção:
SELECT id, name from Actor WHERE id = "002"

### Exercicio 4
b)
```sql
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```

c)
```sql
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%");
```

d)
```sql
SELECT * FROM Actor 
WHERE (
	(name LIKE "%a%" OR name LIKE "%A%") OR (name LIKE "%g%" OR name LIKE "%G%")
)
AND salary BETWEEN 350000 AND 900000;
```
 
 ### Exercicio 5
 a)
 ```sql
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);
```

b)
```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
``` 

c)
```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

d)
```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);
```

e)
```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "004",
  "Teste",
  "Sinopse de teste",
  "2021-05-24",
  5
);
```

### Exercicio 6
a)
```sql
SELECT id, name, synopsy FROM Movie
WHERE id = "001";
```

b)
```sql
SELECT * FROM Movie
WHERE name = "Teste";
```

c)
```sql
SELECT id, name, synopsy FROM Movie
WHERE rating > 7;
``` 

### Exercicio 7
a)
```sql
SELECT * FROM Movie
WHERE name like "%vida%";
```

b)
```sql
SELECT * FROM Movie
WHERE name like "%vida%" OR synopsy like "%vida%";
``` 

c)
```sql
SELECT * FROM Movie
WHERE release_date <= CURRENT_DATE();
```

d)
```sql
SELECT * FROM Movie
WHERE (
  release_date <= CURRENT_DATE() AND
  (name like "%vida%" OR synopsy like "%vida%") AND
  rating > 7
);
```


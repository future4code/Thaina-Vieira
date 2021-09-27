### Exercicio 1
a) 
VARCHAR(n)- É usado para strings que tenha no máximo n caracteres  
DATE- É usado para representar uma data
PRIMARY KEY- É uma chave primária que possui um identificar único
NOT NULL- Não nulo

b)
 Usando o comando SHOWDATABASE apareceu uma pequena tabela com o nome do meu database: lovelace-2147751-thaina-vieira
Usando o comando SHOW TABLES apareceu uma pequena tabela com o nome da tabela Actor

c) 
O comando DESCRIBE Actor descreveu a tabela de atores que tinha sido feita anteriormente. Mostrou em uma tabela o id, name, salary, birth_date e gender com os seus respectivos type, null, key,default, extra...

### Exercicio 2
a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  120000,
  "1963-08-23",   
  "female"
);

b)
 "Duplicate entry '002' for  key PRIMARY" Entrada duplicada para a chave primária.
Esse erro acontece por que a PRIMARY KEY é uma chave primária que possui um identificador único

c)
"Column count doesn't match value count at row 1" A contagem da coluna não corresponde á contagem do valor da linha 1
Deu erro por que tinha mais VALUES do que os que foram passados na linha 1, dentro do parenteeses depois do Actor

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
"field 'name' doesn´t have a default value" O nome do campo não tem um valor padraão.
Deu erro por que estava faltando o name 

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
"incorrect date value '1950' for column "birth_date" at row 1" Valor de data incorreto '1950' para a coluna "data_nascimento" na linha 1
Deu erro por que estava faltando as aspas na data de nascimento

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
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Claudia Raia",
  400000,
  "1989-11-14", 
  "female"
);

### Exercicio 3
a)
SELECT id, name, salary, birth_date from Actor WHERE gender = "female"

b)
SELECT salary from Actor WHERE name = "Tony Ramos";

c)
Foi retornado uma tabela com as lacunas do  id, name, salary, birth_date, vazios

d)
SELECT id, name, salary from Actor WHERE salary < 500000;

e)
"Unknown column 'nome' in field lista" coluna desconhecida 'nome' na lista de campos
Deu erro por que está escrito 'nome' e o correto é 'name'

Correção:
SELECT id, name from Actor WHERE id = "002"

### Exercicio 4
b)
SELECT * from Actor
WHERE name NOT LIKE "A%" AND salary > 35000000;

c)
SELECT * from Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

d)
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
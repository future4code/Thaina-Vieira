### Exercicio 1
a)
Remove a coluna salary

b)
Vai redeclarar a coluna gender, vai mudar ela para sex

c)
Vai redeclarar a coluna gender, vai mudar ela para gender e agora ela terá um VARCHAR que suporta 255 caracteres

d)
``` sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercicio 2
a)
```sql
UPDATE Actor 
SET
name = "Cléo Pires",
birth_date = "1983-06-28"
WHERE id = "003";
```

b)
``` sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

c)
```sql
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

d)0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. 0 linha (s) afetada (s) Linhas correspondidas: 0 Alterado: 0 Avisos: 0
Nada foi alterado
```sql
UPDATE Actor
SET name = "Moacy Franco"
WHERE id = "123";
```

### Exercicio 3
a)
```sql
DELETE FROM Actor WHERE id = "007";
```
b)
```sql
DELETE FROM Actor
WHERE
	gender = "male" AND salary > 1000000;
```

### Exercicio 4
a)
```sql
 SELECT MAX(salary)
    FROM Actor;
```

b)
```sql
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c)
```sql
SELECT COUNT (*) FROM Actor
WHERE gender = "female";
```

d)
```sql
SELECT SUM(salary) FROM Actor
```

### Exercicio 5
a)
Apareceu uma tabela com a quantidade de exata do genero feminino e masculino.

b)
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```sql
SELECT * FROM Actor ORDER BY salary;
```

d)
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```
### Exercicio 6
a)
```sql 
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b)
```sql 
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)
```sql 
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Movie
SET
	playing_limit_date = "2021-12-31"
WHERE id = "002"
```

d)
```sql 
DELETE FROM Movie WHERE id = "001";
```

### Exercicio 7
a)
```sql 
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

b)
```sql 
SELECT AVG(rating) FROM Movie;
```

c)
```sql 
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

d)
```sql 
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```

e)
```sql 
SELECT MAX(rating) FROM Movie;
```

f)
```sql 
SELECT MIN(rating) FROM Movie;
```

### Exercicio 8
a)
```sql 

```

b)
```sql 

```

c)
```sql 
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

d)
```sql 
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```
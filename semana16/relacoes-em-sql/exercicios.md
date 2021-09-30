### Exercicio 1
```
a)
```
Identifica um valor que está em outra tabela.
```
b)
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
SELECT * FROM Rating;
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147751-thaina-vieira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`lovelace-2147751-thaina-vieira`.`Rating`, CONSTRAINT` Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (` id`))
```

d)
```
ALTER TABLE Movie
DROP COLUMN rating;

```
e)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147751-thaina-vieira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`lovelace-2147751-thaina-vieira`.`Rating`, CONSTRAINT` Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (` id`)). A chave estrangeira não permite que apague uma linha pa.
```

### Exercicio 2
```
a)
Essa tabela vai relacionar os filmes com os atores.
```

```
b)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "010"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "006"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"006",
    "009"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"006",
    "008"
);
```

```
c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147751-thaina-vieira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`lovelace-2147751-thaina-vieira`.`MovieCast`, CONSTRAINT` MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (` id`)). A chave estrangeira não deixa adicionar ou atualizar uma linha filha.
```

```
d)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147751-thaina-vieira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`lovelace-2147751-thaina-vieira`.`MovieCast`, CONSTRAINT` MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (` id`)). A chave estrangeira não permite que uma linha pai seja excluída ou atualizada.

```


### Exercicio 3
```
a)
A tabela movie foi colocada junto com a tabela Rating e viraram uma só por causa do ON.
```

```
b)
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```


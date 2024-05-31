-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE chesstudent;

USE chesstudent;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table preferencias(
idPreferencia int,
primary key(idPreferencia),
constraint UsuarioPref foreign key (idPreferencia) references usuario(id),
experiencia varchar(45),
frequencia varchar(45),
tipoPartida varchar(45),
motivacao varchar(45)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(2000),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table jogo (
id int primary key,
tipo varchar(45)
);

create table TentativaJogo (
id int auto_increment,
fkjogo int,
foreign key (fkjogo) references jogo(id),
fkusuario int,
foreign key (fkusuario) references usuario(id),
tempo int,
primary key (id, fkjogo, fkusuario),
porcentAcertos decimal(4,1)
);


alter table TentativaJogo modify column porcentAcertos decimal(4,1);


select u.nome, t.tempo from TentativaJogo as t 
join usuario as u 
on u.id = t.fkusuario
where fkjogo = 2
order by t.tempo
limit 10;

select u.nome, avg(t.porcentAcertos) as 'Porcentage de Acertos' from usuario as u join TentativaJogo as t on u.id = t.fkusuario where u.nome = 'Elerson';



select u.nome, j.tipo, t.tempo, t.porcentAcertos from usuario as u join TentativaJogo as t on u.id = t.fkusuario join jogo as j on t.fkjogo = j.id;


select * from preferencias;

select * from usuario;

select * from aviso;




select usuario.nome, p.experiencia, p.frequencia, p.tipoPartida, p.motivacao from usuario join preferencias as p on usuario.id = p.idPreferencia;

SELECT
    SUM(CASE WHEN tipoPartida = 'Casual' THEN 1 ELSE 0 END) AS casual,
    SUM(CASE WHEN tipoPartida = 'Partidas Clássicas' THEN 1 ELSE 0 END) AS classicas,
    SUM(CASE WHEN tipoPartida = 'Problemas' THEN 1 ELSE 0 END) AS problemas,
    SUM(CASE WHEN tipoPartida = 'Jogos Rápidos' THEN 1 ELSE 0 END) AS rapidas
FROM preferencias;

delete from usuario where id = 5;

select count(tipoPartida) from preferencias;


SELECT 
    (SELECT COUNT(tipoPartida) FROM preferencias WHERE tipoPartida = 'Casual') AS casual,
    (SELECT COUNT(tipoPartida) FROM preferencias WHERE tipoPartida = 'Partidas Clássicas') AS classicas,
    (SELECT COUNT(tipoPartida) FROM preferencias WHERE tipoPartida = 'Problemas') AS problemas,
    (SELECT COUNT(tipoPartida) FROM preferencias WHERE tipoPartida = 'Jogos Rápidos') AS rapidas;
    
    
SELECT
    (SELECT COUNT(*) FROM preferencias WHERE frequencia = 'Diariamente') AS diariamente,
    (SELECT COUNT(*) FROM preferencias WHERE frequencia = 'Semanalmente') AS semanalmente,
    (SELECT COUNT(*) FROM preferencias WHERE frequencia = 'Mensalmente') AS mensalmente,
    (SELECT COUNT(*) FROM preferencias WHERE frequencia = 'Raramente') AS raramente;


SELECT
    (SELECT COUNT(*) FROM preferencias WHERE experiencia = 'Iniciante') AS iniciante,
    (SELECT COUNT(*) FROM preferencias WHERE experiencia = 'Mestre') AS mestre,
    (SELECT COUNT(*) FROM preferencias WHERE experiencia = 'Intermediário') AS intermediario,
    (SELECT COUNT(*) FROM preferencias WHERE experiencia = 'Avançado') AS avancado;
    
    
SELECT 
	(SELECT COUNT(*) FROM preferencias WHERE motivacao = 'Diversão') as diversao,
    (SELECT COUNT(*) FROM  preferencias WHERE motivacao = 'Desafio Mental') as desafio,
	(SELECT COUNT(*) FROM  preferencias WHERE motivacao = 'Competição') as competicao,
	(SELECT COUNT(*) FROM  preferencias WHERE motivacao = 'Apredizado') as aprendizado;
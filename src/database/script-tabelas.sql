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

select * from preferencias;

select * from usuario;

select * from aviso;

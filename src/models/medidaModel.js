var database = require("../database/config");

function buscarExperiencia() {
    var instrucaoSql = `SELECT
    (SELECT COUNT(*) FROM preferencias WHERE experiencia = 'Iniciante') AS iniciante,
    (SELECT COUNT(*) FROM preferencias WHERE experiencia = 'Mestre') AS mestre,
    (SELECT COUNT(*) FROM preferencias WHERE experiencia = 'Intermediário') AS intermediario,
    (SELECT COUNT(*) FROM preferencias WHERE experiencia = 'Avançado') AS avancado;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFrequencia() {
    var instrucaoSql = `SELECT
    (SELECT COUNT(*) FROM preferencias WHERE frequencia = 'Diariamente') AS diariamente,
    (SELECT COUNT(*) FROM preferencias WHERE frequencia = 'Semanalmente') AS semanalmente,
    (SELECT COUNT(*) FROM preferencias WHERE frequencia = 'Mensalmente') AS mensalmente,
    (SELECT COUNT(*) FROM preferencias WHERE frequencia = 'Raramente') AS raramente;`;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTipo() {
    var instrucaoSql = `SELECT 
    (SELECT COUNT(tipoPartida) FROM preferencias WHERE tipoPartida = 'Casual') AS casual,
    (SELECT COUNT(tipoPartida) FROM preferencias WHERE tipoPartida = 'Partidas Clássicas') AS classicas,
    (SELECT COUNT(tipoPartida) FROM preferencias WHERE tipoPartida = 'Problemas') AS problemas,
    (SELECT COUNT(tipoPartida) FROM preferencias WHERE tipoPartida = 'Jogos Rápidos') AS rapidas;
`;
    console.log('Executando instrução SQL: \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMotivo() {
    var instrucaoSql = `SELECT 
	(SELECT COUNT(*) FROM preferencias WHERE motivacao = 'Diversão') as diversao,
    (SELECT COUNT(*) FROM  preferencias WHERE motivacao = 'Desafio Mental') as desafio,
	(SELECT COUNT(*) FROM  preferencias WHERE motivacao = 'Competição') as competicao,
	(SELECT COUNT(*) FROM  preferencias WHERE motivacao = 'Apredizado') as aprendizado;
`;
    console.log('Executando instrução SQL: \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRankingProblema(){
    var instrucaoSql = `select u.nome, t.tempo from TentativaJogo as t 
    join usuario as u 
    on u.id = t.fkusuario
    where fkjogo = 1
    order by t.tempo
    limit 10;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarRankingPartida(){
    var instrucaoSql = `select u.nome, t.tempo from TentativaJogo as t 
    join usuario as u 
    on u.id = t.fkusuario
    where fkjogo = 2
    order by t.tempo
    limit 10;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarExperiencia,
    buscarFrequencia,
    buscarTipo,
    buscarMotivo,
    buscarMedidasEmTempoReal,
    buscarRankingProblema,
    buscarRankingPartida
}

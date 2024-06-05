var database = require("../database/config");
function obterDadosUsuario(idUsuario) {
    var instrucaoSql = `SELECT 
    u.nome, 
    t.fkjogo,
    COUNT(t.id) AS tentativas, 
    AVG(t.porcentAcertos) AS acertos,
    min(t.tempo) as menortempo,
    p.*
FROM 
    usuario AS u 
left JOIN 
    TentativaJogo AS t ON u.id = t.fkusuario 
JOIN 
    preferencias AS p ON u.id = p.idPreferencia
WHERE 
    u.id = ${idUsuario}
GROUP BY 
    u.nome, t.fkjogo, p.idPreferencia, p.experiencia, p.frequencia, p.tipoPartida, p.motivacao;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}
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

function buscarRankingProblema() {
    var instrucaoSql = `SELECT u.nome, tj.tempo
    FROM TentativaJogo tj
    JOIN (
        SELECT fkusuario, MIN(tempo) AS min_tempo
        FROM TentativaJogo
        WHERE fkjogo = 1
        GROUP BY fkusuario
    ) AS subquery
    ON tj.fkusuario = subquery.fkusuario AND tj.tempo = subquery.min_tempo
    JOIN usuario u
    ON tj.fkusuario = u.id
    WHERE tj.fkjogo = 1
    ORDER BY tj.tempo;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarRankingPartida() {
    var instrucaoSql = `SELECT u.nome, tj.tempo
    FROM TentativaJogo tj
    JOIN (
        SELECT fkusuario, MIN(tempo) AS min_tempo
        FROM TentativaJogo
        WHERE fkjogo = 2
        GROUP BY fkusuario
    ) AS subquery
    ON tj.fkusuario = subquery.fkusuario AND tj.tempo = subquery.min_tempo
    JOIN usuario u
    ON tj.fkusuario = u.id
    WHERE tj.fkjogo = 2
    ORDER BY tj.tempo;`
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
    obterDadosUsuario,
    buscarExperiencia,
    buscarFrequencia,
    buscarTipo,
    buscarMotivo,
    buscarMedidasEmTempoReal,
    buscarRankingProblema,
    buscarRankingPartida
}

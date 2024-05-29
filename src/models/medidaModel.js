var database = require("../database/config");

function buscarExperiencia() {
    var instrucaoSql = `SELECT
    SUM(CASE WHEN experiencia = 'Iniciante' THEN 1 ELSE 0 END) AS iniciante,
    SUM(CASE WHEN experiencia = 'Mestre' THEN 1 ELSE 0 END) AS mestre,
    SUM(CASE WHEN experiencia = 'Intermediário' THEN 1 ELSE 0 END) AS intermediario,
    SUM(CASE WHEN experiencia = 'Avançado' THEN 1 ELSE 0 END) AS avancado
FROM preferencias;`;

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
    buscarMedidasEmTempoReal
}

var database = require("../database/config")

function cadastrarpref(idPreferencia, experiencia, frequencia, tipoPartida, motivacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", experiencia, frequencia, tipoPartida, motivacao);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO preferencias (idPreferencia, experiencia, frequencia, tipoPartida, motivacao) VALUES (${idPreferencia},'${experiencia}', '${frequencia}', '${tipoPartida}', '${motivacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirproblema(fkjogo, idUsuario, tempo){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",fkjogo, idUsuario, tempo);
    var instrucaoSql = `INSERT INTO TentativaJogo (fkjogo, fkusuario, tempo) VALUES (${fkjogo}, ${idUsuario}, ${tempo})`;
    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrarpref,
    inserirproblema
}
var quizModel = require("../models/quizModel")
function cadastrarpref(req, res) {
    experiencia = req.body.experienciaServer
    frequencia = req.body.frequenciaServer
    tipoPartida = req.body.tipoPartidaServer
    motivacao = req.body.motivacaoServer
    idPreferencia = req.body.idPreferenciaServer
    quizModel.cadastrarpref(idPreferencia, experiencia, frequencia, tipoPartida, motivacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function inserirproblema(req, res){
    fkjogo = req.body.fkjogoServer
    tempo = req.body.tempoServer
    idUsuario = req.body.idUsuarioServer
    quizModel.inserirproblema(fkjogo, idUsuario, tempo)
        .then(
            function(resultado){
                res.json(resultado);
            }
        ) .catch(
            function (erro){
                console.log(erro)
                console.log(
                    "\nHouve um erro ao inserir no bacno de dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        );
}
module.exports = {
    cadastrarpref,
    inserirproblema
}
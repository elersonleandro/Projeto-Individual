var medidaModel = require("../models/medidaModel");
function obterDadosUsuario(req, res) {
    var idUsuario = req.body.idusuarioServer
    medidaModel.obterDadosUsuario(idUsuario)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 2) {
                    console.log(resultado);
                    res.json({
                        nome: resultado[0].nome,
                        tentativasProblemas: resultado[0].tentativas,
                        tentativasPartidas: resultado[1].tentativas,
                        acertosProblemas: resultado[0].acertos,
                        acertosPartidas: resultado[1].acertos,
                        menorTempoProblemas: resultado[0].menortempo,
                        menorTempoPartida: resultado[1].menortempo,
                        idPreferencia: resultado[0].idPreferencia,
                        experiencia: resultado[0].experiencia,
                        frequencia: resultado[0].frequencia,
                        tipoPartida: resultado[0].tipoPartida,
                        motivacao: resultado[0].motivacao,
                    });
                    console.log(res)

                } 
                else if (resultado.length == 1){
                    console.log(resultado);
                    res.json({
                        nome: resultado[0].nome,
                        tentativasProblemas: resultado[0].tentativas,
                        acertosProblemas: resultado[0].acertos,
                        // acertosPartidas: resultado[1].acertos,
                        menorTempoProblemas: resultado[0].menortempo,
                        // menorTempoPartida: resultado[1].menortempo,
                        idPreferencia: resultado[0].idPreferencia,
                        experiencia: resultado[0].experiencia,
                        frequencia: resultado[0].frequencia,
                        tipoPartida: resultado[0].tipoPartida,
                        motivacao: resultado[0].motivacao,
                    });
                }
                else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                }
                else {
                    res.status(500).send('Mais de um email')
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarExperiencia(req, res) {

    medidaModel.buscarExperiencia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarFrequencia(req, res) {

    medidaModel.buscarFrequencia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarTipo(req, res) {
    medidaModel.buscarTipo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarMotivo(req, res) {
    medidaModel.buscarMotivo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarRankingProblema(req, res) {
    medidaModel.buscarRankingProblema().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarRankingPartida(req, res) {
    medidaModel.buscarRankingPartida().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
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
var medidaModel = require("../models/medidaModel");

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
function buscarTipo(req, res){
    medidaModel.buscarTipo().then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarMotivo(req, res){
    medidaModel.buscarMotivo().then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarRankingProblema(req, res){
    medidaModel.buscarRankingProblema().then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarRankingPartida(req, res){
    medidaModel.buscarRankingPartida().then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
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
    buscarExperiencia,
    buscarFrequencia,
    buscarTipo,
    buscarMotivo,
    buscarMedidasEmTempoReal,
    buscarRankingProblema,
    buscarRankingPartida
}
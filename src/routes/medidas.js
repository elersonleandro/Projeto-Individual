var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");
router.post('/buscar/usuario', function(req,res){
    medidaController.obterDadosUsuario(req, res);
});

router.get('/buscar/frequencia', function(req,res){
    medidaController.buscarFrequencia(req, res);
});

router.get("/buscar/experiencia", function (req, res) {
    medidaController.buscarExperiencia(req, res);
});

router.get('/buscar/tipo', function(req,res){
    medidaController.buscarTipo(req, res);
});
router.get('/buscar/motivo', function(req,res){
    medidaController.buscarMotivo(req, res);
});
router.get('/buscar/rankingProblema', function(req,res){
    medidaController.buscarRankingProblema(req, res);
});
router.get('/buscar/rankingPartida', function(req,res){
    medidaController.buscarRankingPartida(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;
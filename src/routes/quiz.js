var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");
router.post("/cadastrarpref", function (req, res) {
    quizController.cadastrarpref(req, res);
});

router.post("/inserirproblema", function (req,res){
    quizController.inserirproblema(req, res);
})

module.exports = router;
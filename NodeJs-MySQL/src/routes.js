const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

//criando rota pra pegar todos os carros
// rota.crud('/rota', função)
router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:codigo', CarroController.alterar);
router.delete('/carro/:codigo', CarroController.excluir)
module.exports = router;
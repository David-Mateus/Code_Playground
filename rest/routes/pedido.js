const express = require('express');
const router = express.Router();

// Lista com todos os Pedido
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    })
});
//Adicionar um Pedido
router.post('/',(req, res, next) =>{
    const pedido ={
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(200).send({
        mensagem: 'Pedido foi criado',
        pedidoCriado: pedido
    })
});
// Pegar um Pedido exclusivo
router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto
    res.status(200).send({
        mensagem:'Retorna um pedido',
        id: id
    })
});


//Apgando pedido
router.delete('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto
    res.status(201).send({
        mensagem: 'Apagando um pedido',
        id: id
    })
})
module.exports = router;
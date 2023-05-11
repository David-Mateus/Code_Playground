const express = require('express');
const router = express.Router();

// Lista com todos os produtos
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    })
});
//Adicionar um produto
router.post('/',(req, res, next) =>{
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(200).send({
        mensagem: 'Criando um produto',
        produtoCriado: produto
    })
});
// Pegar um produto exclusivo
router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto
    res.status(200).send({
        mensagem:'Retornando um unico produto',
        id: id
    })
});

//Atualizando produto
router.patch('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Atualizano produto'
    })
});
//Apgando produto
router.delete('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto
    res.status(201).send({
        mensagem: 'Usando delete deotro da rota de produtos',
        id: id
    })
})
module.exports = router;
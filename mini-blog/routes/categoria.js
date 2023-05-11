const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Arquivos Models
const { categorias} = require("../models/Categoria");

//Rotas Categorias
router.get('/categorias', (req, res) => {
    categorias.find().lean().then((categorias) => {
        res.render('admin/categorias', {categorias: categorias})
    })
})

router.get('/categorias/add',(req, res) => {
    res.render('admin/categorias')
})

router.post('/categoria/nova', (req, res) => {
    const novaCategoria = new categorias({
        //faz o envio das informações que estão vindo do html
        nome: req.body.nome,
        slug: req.body.slug
    })
    novaCategoria.save()
    res.redirect('/admin/categorias')
})

module.exports = router;
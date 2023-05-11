const express = require("express");
const app = express();
const mongoose = require("mongoose");
const exphbs = require('express-handlebars');
const path = require('path')
const handlebars = exphbs.create({});

// diretorio publico
app.use(express.static(path.join(__dirname, '/public')));

// importa models
const { categorias } = require("./models/Categoria");

// rotas
const categoria = require('./routes/categoria');

//rotas para uso
app.use('/admin', categoria)

//Tenplate Engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// ENV com dados do Mongo
require("dotenv").config();

// Conecation MongoDB
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGO_DB,
{useNewUrlParser: true})
.then(()=>{
    console.log('Mongo conectado')
}).catch((err)=> {
    console.log(err)
});

app.get('/', (req, res) => {
  res.render('layouts/main')
})

// Porta de acesso
const PORT = process.env.PORT || 5005
app.listen(PORT, () => {
  console.log('Escutando na porta: ' + PORT )
})

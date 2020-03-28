const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');



//criando a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


//node ouvindo a porta 3333 "LocalHost"
module.exports = app;
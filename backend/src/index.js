const express = require('express');
const cors = require('cors');
const routes = require('./routes');



//criando a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


//node ouvindo a porta 3333 "LocalHost"
app.listen(3333);
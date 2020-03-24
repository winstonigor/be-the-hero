const express = require('express');
const OngController = require('./controllers/OngController');
//const connection = require('./database/connection');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * ROTA/RECURSO
 * 
 */
/**
 * METODOS HTTP:
 * GET:  BUSCAR ou listar INFORMAÇÃO NO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 * 
 */

/**
 * Tipos de parametros:
 * 
 * Query : PARAMETROS ENVIADOS NA ROTA APOS O SIMBOLO DE "?" (FILTROS , PAGINAÇÃO)
 * ROUTE PARAMS: PARAMETROS UTIULIZADO PARA INDENTIFICAR RECURSOS
 * REQUEST BODY: CORPO DA REQUISIÇÃO UTILIZADO PARA CRIAR OU ALTERAR RECURSOS
 * 
 */

 /**
  * TIPOS DE BANCO
  * MYSQL, SQL SERVE, SQLITE...
  * NOSQL, MONGODB....
  *  
  */

  /**
   * DRIVER DO BANCO
   * DRIVER: SELECT * FROM USERS
   * QUERY BUILDER: table('users').select('*'),where()
   */

//LISTAR AS ONGS CADASTARADAS

routes.post('/sessions',SessionController.create);
routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.listOng);
routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.list);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;
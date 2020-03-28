const express = require('express');
const {celebrate, Segments, Joi} = require ('celebrate');


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

//celebrate Validação

//LISTAR AS ONGS CADASTARADAS

routes.post('/sessions',SessionController.create);
routes.get('/ongs', OngController.list);


routes.post('/ongs', celebrate({
   [Segments.BODY]:  Joi.object().keys({
      name:Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
   })

}), OngController.create);

routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
   }).unknown()

}), ProfileController.listOng);

routes.post('/incidents', IncidentsController.create);


routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
   })
}),IncidentsController.list);

routes.delete('/incidents/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
   })
}), IncidentsController.delete);

module.exports = routes;
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end (puxar);
 * POST: Criar uma informação para o back-end (enviar);
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end;
 */


 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na roda após o '?'
  * Route Params: Parâmetros utilizados para identificar recursos.
  * Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc.
   */

   /**
    * Driver: SELECT * FROM users
    * Query BUilder: table('users').select('*').where()
    */
routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post("/ongs", OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
/**
 * Tipos de pârametros:
 * 
 * Query Params: Parâmetros nomeados enviados no rota após "?" (Filtros, paginação)
 * Routes Params: Pâramentros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 */
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


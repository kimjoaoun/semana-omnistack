const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // if in production adiciona a {origin: 'endereco_que_esta_hospedado.com'};
app.use(express.json()); // avisa para o express que a requisição virá em JSON.
app.use(routes);

app.listen(3333); 
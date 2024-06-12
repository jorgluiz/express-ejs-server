// O projeto que você descreveu é uma aplicação web que utiliza o framework Express.js para criar um servidor backend,
// com o mecanismo de visualização EJS (Embedded JavaScript) para renderizar páginas HTML dinâmicas.
// O projeto integra tanto o backend quanto o frontend, permitindo que o servidor Express.js sirva páginas HTML geradas dinamicamente.

// index.js
const express = require('express');
const app = express();
const path = require('path'); // Importe o módulo 'path'
const { routes } = require('./routes');
const bodyParser = require('body-parser')
const cors = require('cors');

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define o diretório de visualizações como './views'


// Permitir solicitações de qualquer origem
app.use(cors());

app.use(routes);

app.listen(3000, () => {
  console.log('Servidor conectado na porta 3000');
});

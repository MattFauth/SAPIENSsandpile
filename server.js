//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static('./dist/SECOsandpile'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/SECOsandpile/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);
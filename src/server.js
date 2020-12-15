/* dar um npm install express para instalar dependencias
npm install nodemon para reiniciar o serve automaticamente a cada alteração
npm install hbs para template engine 
dentro do package.json alterar o script test para:
"start": "nodemon src/server.js"*/

// importar lib
require('dotenv/config');

const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o EXPRESS
const server = express()

server
  .use(express.urlencoded({ extended: true })) // Usar o body do request
  .use(express.static('public')) //chamando arquivos estáticos

  //configurar template engine para arquivos não-estáticos
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs') //Renomear arquivos .html para .hbs

  // criar uma 'rota'
  /* .get('/', (request, response) => {
     EXEMPLO INICIAL:
    request.query --> query string vem depois do "?" na minha URL...
    console.log(request.query)
    Se digito no navegador http://127.0.0.1:5500/?id=1&name=Fernando
    Ele me retorna o json { id: '1', name: 'Fernando' } 
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))

    return response.render('index') */
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

  //ligar o servidor na porta 5500
  .listen(process.env.PORT || 3333)
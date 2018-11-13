const express = require('express');
const bodyParser = require('body-parser');

const db = require('./Server/db');
const RouteHandler = require('./Server/handlers/routeHandler');

const dbConnectionString = 'mongodb://localhost:27017';
const serverPort = 8888;
const indexPath = '../../Client';

// server setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// JS bundles
app.use('/bundles', express.static('./Client/bundles'));

// routing
const routeHandler = new RouteHandler();
routeHandler.init(app, indexPath);

// connect to database
db.connect(dbConnectionString, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('connected to DB...');

  // app start
  app.listen(serverPort, () => {
    console.log(`the APP started on port ${serverPort}...`);
  });
});

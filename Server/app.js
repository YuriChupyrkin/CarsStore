const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const RouteHandler = require('./handlers/routeHandler');

const serverPort = 8888;

// server setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routing
const routeHandler = new RouteHandler();
routeHandler.init(app);

// connect to database
db.connect('mongodb://localhost:27017', (err) => {
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

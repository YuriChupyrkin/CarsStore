const express = require('express');
const bodyParser = require('body-parser');
const RouteHandler = require('./handlers/routeHandler');

const serverPort = 8888;

// server setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routing
const routeHandler = new RouteHandler();
routeHandler.init(app);

// app start
app.listen(serverPort, () => {
  console.log(`the APP started on port ${serverPort}`);
});

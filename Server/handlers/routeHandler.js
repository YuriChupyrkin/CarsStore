const path = require('path');
const carsController = require('../controllers/carsController');

module.exports = class RouteHandler {
  init(application, indexPath) {
    console.log('Route handler init...');

    this._indexPath = indexPath;

    this.handleGetRequests(application);
    this.handlePostRequests(application);
    this.handlePutRequests(application);
    this.handleDeleteRequests(application);
  }

  handleGetRequests(application) {
    application.get('/', (req, res) => {
      res.sendFile('index.html', { root: path.join(__dirname, this._indexPath) });
    });

    application.get('/cars', carsController.all);
    application.get('/cars/:_id', carsController.findOne);
  }

  handlePostRequests(application) {
    application.post('/cars', carsController.update);
  }

  handlePutRequests(application) {
    application.put('/cars', carsController.create);
  }

  handleDeleteRequests(application) {
    application.delete('/cars/:id', carsController.delete);
  }
};
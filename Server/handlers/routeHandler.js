const carsController = require('../controllers/carsController');

module.exports = class RouteHandler {
  init(application) {
    console.log('Route handler init...');

    this.handleGetRequests(application);
    this.handlePostRequests(application);
    this.handlePutRequests(application);
    this.handleDeleteRequests(application);
  }

  handleGetRequests(application) {
    application.get('/', (req, res) => {
      res.send('index...');
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
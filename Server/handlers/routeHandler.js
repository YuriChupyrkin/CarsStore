const CarRepository = require('../repositories/carsRepository');

module.exports = class RouteHandler {
  constructor() {
    this._carRepo = new CarRepository();
  }

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

    application.get('/cars', (req, res) => {
      res.send(this._carRepo.getCars());
    });

    application.get('/cars/:id', (req, res) => {
      let dataItem = this._carRepo.getCar(req.params.id);
      res.send(dataItem);
    });
  }

  handlePostRequests(application) {
    application.post('/cars', (req, res) => {
      this._carRepo.updateCar(req.body);
      res.sendStatus(200);
    });
  }

  handlePutRequests(application) {
    application.put('/cars', (req, res) => {
      let newItem = this._carRepo.createCar(req.body);
      res.send(newItem);
    });
  }

  handleDeleteRequests(application) {
    application.delete('/cars/:id', (req, res) => {
      this._carRepo.deleteCar(req.params.id);
      res.sendStatus(200);
    });
  }
};
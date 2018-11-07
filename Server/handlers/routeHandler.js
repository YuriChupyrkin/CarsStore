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
      this._carRepo.getCars().then((cars) => {
        res.send(cars);
      }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
    });

    application.get('/cars/:_id', (req, res) => {
      this._carRepo.getCar(req.params._id).then((car) => {
        res.send(car);
      }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
    });
  }

  handlePostRequests(application) {
    application.post('/cars', (req, res) => {
      this._carRepo.updateCar(req.body).then(() => {
        res.sendStatus(200);
      }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
    });
  }

  handlePutRequests(application) {
    application.put('/cars', (req, res) => {
      this._carRepo.createCar(req.body).then((car) => {
        res.send(car);
      }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
    });
  }

  handleDeleteRequests(application) {
    application.delete('/cars/:id', (req, res) => {
      this._carRepo.deleteCar(req.params.id).then(() => {
        res.sendStatus(200);
      }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
    });
  }
};
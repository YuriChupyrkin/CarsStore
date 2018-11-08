const carsModel = require('../models/carsModel');

module.exports.all = (req, res) => {
  carsModel.all().then((cars) => {
    res.send(cars);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};

module.exports.findOne = (req, res) => {
  carsModel.findOne(req.params._id).then((car) => {
    res.send(car);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};

module.exports.update = (req, res) => {
  carsModel.update(req.body).then(() => {
    res.sendStatus(200);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};

module.exports.create = (req, res) => {
  carsModel.create(req.body).then((car) => {
    res.send(car);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};

module.exports.delete = (req, res) => {
  carsModel.delete(req.params.id).then(() => {
    res.sendStatus(200);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};
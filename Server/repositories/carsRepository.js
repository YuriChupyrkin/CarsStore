const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

const CollectionName = 'cars';

module.exports = class CarsRepository {
  getCarsCollection() {
    return db.getDataBase().collection(CollectionName);
  }

  getFindOneExpr(id) {
    return { _id: ObjectID(id) };
  }

  getCars() {
    return new Promise((resolve, reject) => {
      this.getCarsCollection().find().toArray((err, docs) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      });
    });
  }

  getCar(id) {
    return new Promise((res, rej) => {
      this.getCarsCollection().findOne(this.getFindOneExpr(id), (err, car) => {
        if (err) {
          rej(err);
          return;
        }

        res(car);
      });
    });
  }

  createCar(data) {
    let car = {
      name: data.name
    };

    return new Promise((resolve, reject) => {
      this.getCarsCollection().insertOne(car, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(car);
      });
    });
  }

  updateCar(data) {
    return new Promise((res, rej) => {
      if (!data._id) {
        rej('invalid car id');
        return;
      }

      this.getCarsCollection().updateOne(
        this.getFindOneExpr(data._id),
        { $set: { name: data.name }},
        (err, result) => {
          if (err) {
            rej(err);
            return;
          }

          res(result);
        }
      );
    });
  }

  deleteCar(id) {
    return new Promise((res, rej) => {
      this.getCarsCollection().deleteOne(
        this.getFindOneExpr(id),
        (err, result) => {
          if (err) {
            rej(err);
            return;
          }

          res(result);
        }
      );
    });
  }
};

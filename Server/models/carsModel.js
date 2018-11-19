const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

const CollectionName = 'cars';

function getCarsCollection() {
  return db.getDataBase().collection(CollectionName);
};

function getFindOneExpr(id) {
  return { _id: ObjectID(id) };
};

module.exports.filter = (filterCriteria) => {
  return new Promise((resolve, reject) => {
    getCarsCollection().find({name: {
      $regex: `.*${filterCriteria}.*`,
      $options: 'i'
    }}).toArray((err, docs) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      }
    );
  });
}

module.exports.all = () => {
  return new Promise((resolve, reject) => {
    getCarsCollection().find().toArray((err, docs) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(docs);
    });
  });
};

module.exports.findOne = (id) => {
  return new Promise((res, rej) => {
    getCarsCollection().findOne(getFindOneExpr(id), (err, car) => {
      if (err) {
        rej(err);
        return;
      }

      res(car);
    });
  });
};

module.exports.create = (data) => {
  let car = {
    name: data.name
  };

  return new Promise((resolve, reject) => {
    getCarsCollection().insertOne(car, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(car);
    });
  });
};

module.exports.update = (data) => {
  return new Promise((res, rej) => {
    if (!data._id) {
      rej('invalid car id');
      return;
    }

    getCarsCollection().updateOne(
      getFindOneExpr(data._id),
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
};

module.exports.delete = (id) => {
  return new Promise((res, rej) => {
    getCarsCollection().deleteOne(
      getFindOneExpr(id),
      (err, result) => {
        if (err) {
          rej(err);
          return;
        }

        res(result);
      }
    );
  });
};

const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null
};

exports.connect = (url, done) => {
  if (state.db) {
    return done();
  }

  MongoClient.connect(url, (err, client) => {
    if (err) {
      return done(err);
    }

    state.db = client.db('carsStore');
    done();
  })
};

exports.getDataBase = () => {
  return state.db;
}
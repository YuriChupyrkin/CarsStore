module.exports = class CarsRepository {
  constructor() {
    this._cars = [
      {
        id: 1,
        name: 'Acura',
      },
      {
        id: 2,
        name: 'Lexus',
      }
    ];
  }

  getCars() {
    return this._cars;
  }

  getCar(id) {
    return this._cars.find((item) => {
      return item.id == id;
    });
  }

  createCar(data) {
    let lastId = !this._cars ?
      0 :
      this._cars[this._cars.length - 1].id;

    let newItem = {
      id: ++lastId,
      name: data.name
    };
    
    this._cars.push(newItem);
    return newItem;
  }

  updateCar(data) {
    if (!data.id) {
      return;
    }

    let car = this.getCar(data.id);
    if (!car) {
      return;
    }

    car.name = data.name;
    return car;
  }

  deleteCar(id) {
    this._cars = this._cars.filter((item) => item.id != id);
  }
};

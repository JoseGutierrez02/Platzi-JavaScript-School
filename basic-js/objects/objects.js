// Object - { key: value }
var myCar = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  carDetail: function() {
    console.log(`${this.brand} ${this.model} from ${this.year}`);
  }
};

myCar.carDetail();
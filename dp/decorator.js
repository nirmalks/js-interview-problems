class Car {
  drive() {
    return 'Driving';
  }
}

class CarDecorator {
  constructor(car) {
    this.car = car;
  }

  drive() {
    return this.car.drive();
  }
}

class GpsDecorator extends CarDecorator {
  drive() {
    return `${super.drive()} with GPS`;
  }
}

const myCar = new Car();
const myCarWithGPS = new GpsDecorator(myCar);
console.log(myCar.drive());
console.log(myCarWithGPS.drive());

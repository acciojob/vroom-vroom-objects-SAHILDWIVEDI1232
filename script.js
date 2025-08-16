// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel to Car prototype
Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Call Car constructor
  Car.call(this, make, model);

  // Add topSpeed
  this.topSpeed = topSpeed;
}

// Inherit from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

// Test example
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());  // Output: Ferrari Testarossa
console.log(car.getTopSpeed());   // Output: 200

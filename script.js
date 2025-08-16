// Complete the js code
function Car(make, model) {
	this.make = make;
  this.model = model;
}
getMakeModel(){
	return(this.make+"Toyota"+this.model+"Corolla");
}
}
function SportsCar(make, model, topSpeed) {
	 this.topSpeed = topSpeed;}

	getTopSpeed(){
		return(this.make+"Toyota"+this.model+"Corolla"+this.topSpeed+"50mph");
	}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());  // Output: Ferrari Testarossa
console.log(car.getTopSpeed());  





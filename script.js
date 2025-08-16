// Complete the js code
function Car(make, model) {
	
getMakeModel(){
return(this.make+"Toyota"+this.model+"Corolla");
}
}
function SportsCar extends Car(make, model, topSpeed) {
	getTopSpeed(){
		return(this.make+"Toyota"+this.model+"Corolla"+this.topSpeed+"50mph");
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

console.log(car.getMakeModel());
console.log(car.getTopSpeed());
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function () {
    this.isRunning = true;
};
Vehicle.prototype.turnOff = function () {
    this.isRunning = false;
};
Vehicle.prototype.honk = function () {
    if (this.isRunning) {
        console.log('Beep!');
    }
};

var myCar = new Vehicle('someMake', 'someModel', 2010);
myCar.turnOn();
myCar.honk()
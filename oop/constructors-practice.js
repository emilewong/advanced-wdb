//Practice
function House(bdrms, bthrms, nmSqrFt) {
    this.bedrooms = bdrms;
    this.bathrooms = bthrms;
    this.squareFeet = nmSqrFt;
}

var myHouse = new House(4, 2, 2500);
//console.log(myHouse);

//Exercise - Make A Dog
function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        console.log(this.name + " just barked!");
    };
}

var Oddie = new Dog('Oddie', 4);
console.log(Oddie);

Oddie.bark();

//Multiple constructors
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Car(make, model, year) {
    this.numOfWheels = 4;
    Vehicle.apply(this, arguments);
}

var myCar = new Car('someMake', 'someModel', 2010);
console.log(myCar)
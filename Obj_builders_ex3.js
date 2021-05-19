function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;
    this.start = function() {
        this.started = true;
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + ' ' + this.model + ' goes Zoom Zoom');
        } else {
            console.log('Start the engine first');
        }
    };
    this.stop = function() {
        this.started = false;
    };
}

let chevy = new Car('Chevy', 'Bel air', 1957, 'red', 2, false, 1021);
let taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
let fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

let testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

let cars = [chevy, taxi, fiat, testCar];

for(let i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}

let cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
}

let cadi = new CarBuilderParams(cadiParams);

function CarBuilderParams(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function() {
        this.started = true;
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + ' ' + this.model + ' goes Zoom Zoom');
        } else {
            console.log('Start the engine first');
        }
    };
    this.stop = function() {
        this.started = false;
    };
}

cadi.start();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.stop();

console.log(typeof cadi)

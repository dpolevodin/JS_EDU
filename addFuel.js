const cadi = {
    make: 'Cadi',
    model: 'GM Cadilac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    fuel: 0,
    start: function() {
        if (this.fuel > 0) {
            this.started = true; 
        } else {
            alert('The car is on empty. fill up before starting');
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + ' ' + this.model + ' goes Zoom Zoom!');
                this.fuel -= 1;
            } else {
                alert('Out of fuel');
            }
        } else {
            alert('You need to start engine first!');
        }
    },
    addFuel: function(amount) {
        this.fuel += amount;
    }
};
cadi.start();
cadi.drive();
cadi.addFuel(2);
cadi.start();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.stop();

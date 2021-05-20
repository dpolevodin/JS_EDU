function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.sitting = false;
Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function() {
    console.log("Run!");
    };

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + ' is already sitting')
    } else {
        this.sitting = true;
        console.log(this.name + ' is now sitting')
    }
    };


let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
let barnaby = new Dog('Barnaby', 'Basset Hound', 55);

let aDog = new Dog();

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight); //call — встроенный метод, который может использоваться с любой функцией (не забывайте, что Dog — это функция). 
                                         //Dog.call вызывает функцию Dog и передает ей объект, 
                                        //который должен использоваться как this, вместе со всеми аргументами функции Dog.
    this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
console.log("Stack");
};
ShowDog.prototype.bait = function() {
console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
console.log("Groom");
};

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

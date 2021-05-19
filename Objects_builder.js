// Имя конструктора начинается с заглавной буквы!

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}

let fido = new Dog('Fido', 'Mixed', 38);
alert(fido.breed);

// Имя конструктора начинается с заглавной буквы!

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);
let dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    let size = 'small';
    if (dogs[i].weight > 10) {
        size = 'large';
    }
    console.log('Dog: ' + dogs[i].name + 'is a ' + size + ' ' + dogs[i].breed);
}

const dog = {
    name: 'Fido',
    weight: 20.2,
    age: 4,
    breed: 'mixed',
    activity: 'fetch balls'
};

let bark;
if (dog.weight > 20) {
    bark = 'WOOF WOOF';
} else {
    bark = 'woof woof';
}

let speak = dog.name + 'speak' + bark + 'when he wants to ' + dog.activity;
console.log(speak);
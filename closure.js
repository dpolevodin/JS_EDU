function makeCounter() {
    let count = 0;
    return {
        increment: function() {
            count = count + 1;
            return count;
        }
    }
}

let test = makeCounter();
console.log(test.increment());
console.log(test.increment());
console.log(test.increment());

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

// замыкание (англ. closure) - это функция вместе со всеми внешними переменными, которые ей доступны.
// Или, другими словами, замыкание - это функция вместе со своим лексическим окружением.
// В JavaScript чаще всего, говоря "замыкание функции", имеют ввиду не саму эту функцию, а именно ее внешние переменные.
// Если же какая-то функция получает переменную из своего лексического окружения, то говорят "переменная берется из замыкания".

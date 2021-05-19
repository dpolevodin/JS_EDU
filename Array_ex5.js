let now = new Date();
let dateString = now.toString();
let theYear = now.getFullYear();
let theDayOfWeek = now.getDay();

let log = console.log

log(dateString);
log(theYear);
log(theDayOfWeek);

let emptyArray = new Array();
emptyArray[0] = 99;

let oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;

oddNumbers.reverse();
let aArray = oddNumbers.join(' - ');
log(aArray)

let areAllOdd = oddNumbers.every(function(x) {
            return ((x % 2) !== 0);
});

log(areAllOdd);

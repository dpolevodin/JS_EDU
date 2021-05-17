let numbersArray = [60, 50, 62, 58, 54, 54];
function compareNumber(num1, num2) {
    if (num1 > num2) {
        return -1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return 1;
    }
}
    
numbersArray.sort(compareNumber);
console.log(numbersArray);


//Выведет значения по убыванию

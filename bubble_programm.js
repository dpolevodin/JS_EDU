let score = [60, 50, 60, 58, 54, 54,
             58, 50, 52, 54, 48, 69,
             34, 55, 51, 52, 44, 51,
             69, 64, 66, 55, 52, 61,
             46, 31, 57, 52, 44, 18,
             41, 53, 55, 61, 61, 44];

const printAndGetHighScore = array => {
    let highScore = 0;
    let output;
    for (let i = 0; i < array.length; i ++) {
        let output = 'Bubble solution #' + i + ' score: ' + array[i];
        console.log(output);
        if (array[i] > highScore) {
            highScore = array[i];
        }
    }
    return highScore;
}

const getBestResult = (array, highScore) => {
    let maxValue = [];
    for (let i=0; i < array.length; i++) {
        if (array[i] == highScore) {
            maxValue.push(i);
        }
    }
    return maxValue;
}

let highScoreTest = printAndGetHighScore(score);
console.log("Bubbles tests: " + score.length);
console.log("Bubbles max value: " + highScoreTest);


let bestSolutions = getBestResult(score, highScoreTest);
console.log("Solution with highest score: " + bestSolutions);

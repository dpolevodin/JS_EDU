let array = [60, 119, 999, 50, 1000, 60, 58, 54, 54, 3, 5, 2, 1, 0];

const bubbleSort = arr => {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++ ) {

            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(array));

let array = [60, 119, 999, 50, 60, 58, 54, 54, 3, 5, 2, 1, 0];

function bubble_sort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++ ) {
            if (arr[j] > arr[j+1]) {
                let swapValue = array[j];
                arr[j] = arr[j+1];
                arr[j+1] = swapValue;
            }
        }
    }
    return arr;
}

console.log(bubble_sort(array));

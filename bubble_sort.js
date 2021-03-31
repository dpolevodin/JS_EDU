// Доделать

var array = [60, 50, 60, 58, 54, 54,
             58, 50, 52, 54, 48, 69,
             34, 55, 51, 52, 44, 51,
             69, 64, 66, 55, 52, 61,
             46, 31, 57, 52, 44, 18,
             41, 53, 55, 61, 99, 44];

function bubble_sort(arr) {
    for (let i = 0; i < (array.len-1); i++) {
        for (let j = 0; j < (array.len-1-i); i++ ) {
            if (array[j] > array[j+1]) {
                let newValue = array[j];
                array[j] = array[j+1];
                array[j+1] = newValue;
            }
        }
    }
}
bubble_sort(array);

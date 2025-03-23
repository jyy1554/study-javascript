console.log(insertionSort([1, 4, 5, 3, 2]));

function insertionSort(arr) {
    if (arr.length <= 0) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
            arr[j] = currentValue;
        }
    }
    return arr;
}

// [1,4,5,3,2] 4
// [1,4,5,3,2] 5
// [1,4,5,3,2] 3
//      j
// [1,4,3,5,2] 3
//    j
// [1,3,4,5,2] 3
//  j

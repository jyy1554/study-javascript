console.log(insertionSort([1, 4, 5, 3, 2]));

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

function insertionSort(arr) {
    if (arr.length <= 0) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                arr = swap(arr, j, i);
                i = j;
            }
        }
    }
    return arr;
}

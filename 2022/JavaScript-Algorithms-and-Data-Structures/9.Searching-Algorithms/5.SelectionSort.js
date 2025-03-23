console.log(selectionSort([2, 5, 1, 3, 4]));

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) lowest = j;
        }
        if (i !== lowest) {
            swap(arr, i, lowest);
        }
    }
    return arr;
}

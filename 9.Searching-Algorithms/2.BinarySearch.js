// accepts a sorted array and a value and returns the index

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5], 6)); //-1

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (start <= end) {
        if (val === arr[middle]) return middle;
        else if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;

        middle = Math.floor((start + end) / 2);
    }
    return -1;
}

//[1, 2, 3, 4, 5] <- 2 찾기
// S     M     E

//[1, 2, 3, 4, 5]
// SM E

//[1, 2, 3, 4, 5]
//    SME

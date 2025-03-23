function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//자기자신보다 작은 수를 왼쪽에 정렬해주는 pivot helper 함수
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); // 3

        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
// [3,2,1,4,6,9,5]  return 3
//        4
//  3,2,1   6,9,5
//      3     6
//  2,1     5,  9
//    2
//  1

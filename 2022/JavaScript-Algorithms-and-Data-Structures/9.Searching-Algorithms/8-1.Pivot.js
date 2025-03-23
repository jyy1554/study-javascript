console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
//[4,2,8,1,5,7,6,3]
//[4,2,1,8,5,7,6,3]
//[4,2,1,3,5,7,6,8]

//[3,2,1,4,5,7,6,8] return 3

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

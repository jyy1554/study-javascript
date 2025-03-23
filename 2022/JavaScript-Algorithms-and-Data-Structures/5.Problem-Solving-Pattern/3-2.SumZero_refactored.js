//합이 0이 되는 한 쌍의 값을 찾아라!
//arr는 sorted array이다.

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

//Time Complexity : O(N^2);
//Space Complexity : O(1);

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]));

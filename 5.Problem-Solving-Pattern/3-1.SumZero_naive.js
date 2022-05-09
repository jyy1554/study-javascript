//합이 0이 되는 한 쌍의 값을 찾아라!
//arr는 sorted array이다.

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

//Time Complexity : O(N^2);
//Space Complexity : O(1);

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

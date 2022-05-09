//기준점 간 이동배열 패턴
//array안에 n개의 요소들을 묶어 나오는 합들 중 가장 큰 합을 구하라

console.log(maxSubarraySum([], 2));
console.log(maxSubarraySum([3, 5, 2, 6, 2], 3));

function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity; //배열안에 모두 음수일 수 있기 때문에
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

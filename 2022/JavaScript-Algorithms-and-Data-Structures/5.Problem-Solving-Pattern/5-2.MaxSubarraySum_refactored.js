//기준점 간 이동배열(Sliding Window) 패턴
//array안에 n개의 요소들을 묶어 나오는 합들 중 가장 큰 합을 구하라

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19

function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

//time complexity : O(n)

//       i
// 0 1 2 3
// 2,6,9,2,1,8,5,6,3

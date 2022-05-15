//Given a sorted array of integers and a target average, determine if there is a pair of values in the array
//where the average of the pair equals the target average. There may be more than one pair that matches the average target.
//Time : O(N)
//Space : O(1)

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false

function averagePair(arr, targetAver) {
    // 요소들의 합이 targetAver * 2와 같으면 됨
    const targetSum = targetAver * 2;

    //요소가 1개 이하인 경우 false
    if (arr.length < 2) {
        return false;
    }

    //pointer 2개 설정
    //left는 arr[0]에서, right는 맨끝에서
    let left = arr[0];
    let right = arr[arr.length - 1];

    //sum이 targetSum과 같으면 true 끝
    //sum이 targetSum보다 크면 right--
    //sum이 targetSum보다 작으면 left++
    //left < right이어야됨 아니면 false
    while (left < right) {
        let sum = left + right;
        if (sum === targetSum) {
            return true;
        } else if (sum > targetSum) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

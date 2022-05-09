//배열의 요소 중 unique 값들이 총 몇개인지 알아내기 (즉, 중복값을 없앤 경우 배열의 길이가 어떻게 되는지)
//sorted array 받아서 처리

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4

function countUniqueValues(arr) {
    //길이가 0인 경우 return 0
    if (arr.length === 0) {
        return 0;
    }

    //빈 array 변수 할당
    let uniqueValues = [];
    //pointer 사용하기
    let left = 0;
    let right = arr.length - 1;

    //left 한번, right 한번 해서 넣고 left === right인 경우 그만
    while (left <= right) {
        let leftNum = arr[left];
        let rightNum = arr[right];

        if (uniqueValues.indexOf(leftNum) === -1) {
            uniqueValues.push(leftNum);
        }
        if (uniqueValues.indexOf(rightNum) === -1) {
            uniqueValues.push(rightNum);
        }
        left += 1;
        right -= 1;
    }
    //array길이를 return
    return uniqueValues.length;
}

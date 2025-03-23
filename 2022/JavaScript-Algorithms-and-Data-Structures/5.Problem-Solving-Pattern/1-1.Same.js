// 배열1 요소의 제곱값이 arr2의 요소로 있어야하며 대응하는 개수 또한 동일하여야한다.

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.lenght; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2); //indexOf 또한 looping이다.
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//Time Complexity : O(n^2)

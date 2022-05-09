//배열의 요소 중 unique 값들이 총 몇개인지 알아내기 (즉, 고유값 세기)
//sorted array 받아서 처리

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([1, 1, 1, 1, 1])); // 1

// <<풀이 방식>>
//  i
// [1,1,2,3,4,4,7,7,12,12,13]   => i, j값 같으므로 j만 한 칸 이동
//    j

//  i
// [1,1,2,3,4,4,7,7,12,12,13    => i, j값 다르므로 i를 한 칸 이동
//      j

//    i
// [1,1,2,3,4,4,7,7,12,12,13    => i자리에 j값을 저장
//      j

//    i
// [1,2,2,3,4,4,7,7,12,12,13    => 위처럼 진행 후 j를 한 칸 이동
//        j

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        //값이 같으면 j만 1증가. 즉, 별도로 작성 코드 없음

        //값이 다르면 i를 증가
        //그 후 arr[i]에 arr[j]를 저장
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

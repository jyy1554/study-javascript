console.log(radixSort([10, 245, 3, 893])); //[3, 10, 245, 893]

//num의 place번째 숫자가 무엇인지 반환하는 함수
function getDigit(num, place) {
    // num = 1, 12345 / 10 = 1234, 1234 % 10 = 4
    // num = 2, 12345 / 100 = 123, 123 % 10 = 3
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// num이 몇자리인지 반환하는 함수
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//nums 배열 중 가장 긴 숫자가 몇자리인지 반환
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(nums) {
    const arrLength = nums.length;
    const maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        // let buckets = [[], [], [], [], [], [], [], [], [], []];
        let digitBuckets = Array.from({ length: 10 }, () => []); //위와 같은 배열을 만들어줌

        for (let i = 0; i < arrLength; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }

        // nums = digitBuckets.flat();
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

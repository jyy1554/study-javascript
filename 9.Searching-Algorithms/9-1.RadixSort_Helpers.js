console.log(getDigit(12345, 0)); //5
console.log(getDigit(12345, 1)); //4
console.log(getDigit(1, 1)); // 0

//num의 place번째 숫자가 무엇인지 반환하는 함수
function getDigit(num, place) {
    // num = 1, 12345 / 10 = 1234, 1234 % 10 = 4
    // num = 2, 12345 / 100 = 123, 123 % 10 = 3
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(digitCount(1234));

// num이 몇자리인지 반환하는 함수
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(mostDigits([1234, 1, 43, 256]));

//nums 배열 중 가장 긴 숫자가 몇자리인지 반환
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

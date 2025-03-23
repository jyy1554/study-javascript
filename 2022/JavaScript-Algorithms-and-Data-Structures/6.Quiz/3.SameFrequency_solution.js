//Given two positive intengers, find out if the two numbers have the same frequency of digis
//Time: O(N)

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
console.log(sameFrequency(12345, 12346)); //false

function sameFrequency(num1, num2) {
    const strNum1 = String(num1);
    const strNum2 = String(num2);

    //길이가 다르면 false
    if (num1.length !== num2.length) {
        return false;
    }

    //num1, num2를 obj로 받기
    const countNum1 = {};
    const countNum2 = {};

    for (let str of strNum1) {
        countNum1[str] = ++countNum1[str] || 1;
    }

    for (let str of strNum2) {
        countNum2[str] = ++countNum2[str] || 1;
    }

    //obj value 체크
    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

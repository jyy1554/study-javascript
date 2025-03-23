//Given two positive intengers, find out if the two numbers have the same frequency of digis
//Time: O(N)

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false

function sameFrequency(num1, num2) {
    //각자 obj로 받기
    const obj1 = {};
    const obj2 = {};

    num1 = String(num1);
    num2 = String(num2);

    for (const n of num1) {
        if (obj1[n]) {
            ++obj1[n];
        } else {
            obj1[n] = 1;
        }
    }
    for (const n of num2) {
        if (obj2[n]) {
            ++obj2[n];
        } else {
            obj2[n] = 1;
        }
    }

    //key 개수 체크 -> 같으면 통과, 다르면 return false
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    //요소별로 value 비교 -> 다 통과하면 ture, 하나라도 다르면 바로 return false
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

//You may assume the string contains only lowercase alphabets

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true

function validAnagram(str1, str2) {
    //길이가 다르면 false
    if (str1.length !== str2.length) {
        return false;
    }

    //길이가 0이면 true
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }

    //object 변수 2개 선언
    let obj1 = {};
    let obj2 = {};

    //각 object에 str의 알파벳 및 개수 저장
    for (let char of str1) {
        obj1[char] = ++obj1[char] || 1;
    }
    for (let char of str2) {
        obj2[char] = ++obj2[char] || 1;
    }

    //obj1, obj2 키 개수가 다르면 false
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    //obj1의 key가 obj2에 없으면 false
    //obj1 key의 value와 obj2 key의 value가 다르면 false
    for (let key in obj1) {
        if (!obj2[key]) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    //위를 모두 통과하면
    return true;
}

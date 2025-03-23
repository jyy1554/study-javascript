//takes in two strings and checks whether the characters in the first string
//form a subsequence of the characters in the second string without their order changing

//Time : O(N+M)
//Space : O(1)

console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "sting")); //true
console.log(isSubsequence("abc", "abracadabra")); //true
console.log(isSubsequence("abc", "acb")); //false (order matters)
console.log(isSubsequence("", "acb")); //true

function isSubsequence(str1, str2) {
    //pointer 2개
    //pointer 하나는 first string을 가리키기
    //pointer 나머지 하나는 second string 가리키기
    let p1 = 0;
    let p2 = 0;

    //first === second면 first++, second++
    //first !== second면 second++
    //                  second 더 갈 수 없으면 return false
    //first도 끝까지 갔고 없으면 return false
    while (p1 < str1.length && p2 < str2.length) {
        if (str1[p1] === str2[p2]) {
            p1++;
            p2++;
        } else {
            p2++;
        }
    }

    if (p1 < str1.length) {
        return false;
    } else {
        return true;
    }
}

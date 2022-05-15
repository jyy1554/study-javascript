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
    let i = 0;
    let j = 0;

    if (!str1) return true;

    //i === j first++, second++
    //i !== j second++
    //        second 더 갈 수 없으면 return false
    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
        }
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

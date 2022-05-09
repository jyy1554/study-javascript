charCount("Hello WORLD hi!!!");
charCount("Your PIN number is 1234!");

function charCount(str) {
    let obj = {};

    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    console.log(obj);
    return obj;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    //if A-Z, a-z, 0-9, true
    if (
        (65 <= code && code <= 90) || //upper alpha (A-Z)
        (97 <= code && code <= 122) || //lower alpha (a-z)
        (48 <= code && code <= 57) //numberic (0-9)
    ) {
        return true;
    }
    //else false
    return false;
}

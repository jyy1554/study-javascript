charCount("hello");
charCount("Your PIN number is 1234!");

function charCount(str) {
    //make object to return at end
    let obj = {};
    //loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        //if character is something else (space, period, etc.) don't do anything
        if (/[a-z0-9]/.test(char)) {
            //if the char is a number/letter AND is a key in object, add one to count
            if (obj[char] > 0) {
                obj[char]++;
            }
            //if the char is a number/letter AND not in object, add it to object and set value to 1
            else {
                obj[char] = 1;
            }
        }
    }
    //return object at end
    console.log(obj);
    return obj;
}

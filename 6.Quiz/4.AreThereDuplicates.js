// areThereDuplicates which accepts a variable number of arguments,
//and checks whether there are any duplicates among the arguements passed in

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
console.log(areThereDuplicates());

//Time: O(n)
//Space: O(n)

function areThereDuplicates(...arr) {
    let obj = {};

    for (const val of arr) {
        if (obj[val]) {
            return true;
        } else {
            obj[val] = 1;
        }
    }

    return false;
}

// areThereDuplicates which accepts a variable number of arguments,
//and checks whether there are any duplicates among the arguements passed in

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); //true

//Time: O(n)
//Space: O(n)

function areThereDuplicates(...args) {
    let obj = {};

    for (let val of args) {
        obj[val] = ++obj[val] || 1;
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }
    return false;
}

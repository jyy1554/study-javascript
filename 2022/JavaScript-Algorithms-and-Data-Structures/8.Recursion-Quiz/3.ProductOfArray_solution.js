//returns the product of them all

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([1])); //1
console.log(productOfArray([])); // 0

function productOfArray(arr) {
    if (arr.length === 0) return 1;

    return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3])

// result = 1 * productOfArray([2,3])
//              2 * productOfArray([3])
//                  3

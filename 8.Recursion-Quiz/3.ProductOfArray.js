//returns the produc of them all

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([1])); //1
console.log(productOfArray([])); // 0

function productOfArray(arr) {
    let result = 1;

    if (arr.length === 0) return 0;
    else if (arr.length === 1) return arr[0];

    result *= arr[0];

    return result * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3])

// result = 1 * 1 * productOfArray([2,3])
//                     1 * 2 * productOfArray([3])
//                             1 * 3

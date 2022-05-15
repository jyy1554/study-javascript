console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
console.log(factorial(0)); // 1

function factorial(n) {
    let result = 1;

    if (n <= 1) return 1;
    else {
        result *= n;
    }
    return result * factorial(n - 1);
}

// //factorial(4)
// result = 1 * 4 * factorial(3)
//                     3 * factorial(2)
//                         2 * factorial(1)
//                             1

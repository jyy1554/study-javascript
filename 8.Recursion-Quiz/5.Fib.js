//returns the nth number in the Fibonacci sequence.

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

function fib(n) {
    // 1, 1, 2, 3, 5, 8
    if (n === 0) return 0;
    else if (n === 2 || n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
}

// fib(4)
// fib(3) + fib(2)
// fib(2) + fib(1) + fib(1) + fib(0)
// fib(1) + fib (0) + 1 + 1 + 0
// 1 + 0 + 1 + 1 + 0

// fib(1) = 1
// fib(2) = 1
// fib(3) = fib(1) + fib(2)
// fib(4) = fib(3) + fib(2)

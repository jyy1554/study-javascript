//accpets a number and adds up all the numbers from 0 to the number passed to the function

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

function recursiveRange(num) {
    let result = 0;

    if (num === 0) return 0;

    result += num;

    return result + recursiveRange(num - 1);
}

// recursiveRange(4);

// result = 0 + 4 + recursiveRange(3)
//                     0 + 3 + recursiveRange(2)
//                             0 + 2 + recursiveRange(1)
//                                     0 + 1 + recursiveRange(0)
//                                             0

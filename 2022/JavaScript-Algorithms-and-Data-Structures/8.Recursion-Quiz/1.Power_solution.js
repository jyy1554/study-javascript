//function which accepts a base and an exponent

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

//power(2,2)
// result = 2 * power(2,1)
//               2 * power(2,0)
//                   1

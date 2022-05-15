//function which accepts a base and an exponent

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

function power(base, exp) {
    //2*2*...
    let result = 1;

    if (exp <= 0) return 1;
    else {
        result *= base;
        exp--;
    }
    return result * power(base, exp);
}

//power(2,2)
// result = 1 * 2 * power(2,1)
//                 1 * 2 * power(2,0)
//                         1

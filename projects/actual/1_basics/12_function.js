/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());

/**
 * DRY
 * (개발자는 DRY를 지키는 것이 좋은 코드를 작성하는데 큰 도움이 됨)
 * 
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다. (위 함수에서 number를 의미)
 * 
 * 실제 입력하는 값은 argument라고 한다. (아래에서 2를 의미)
 */
calculate(2);
console.log('------------');

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4); //8

function multiply(x, y = 10){
    console.log(x * y);
}

multiply(2, 4); //8
multiply(2); //10
console.log('------------');

/**
 * 반환받기
 * return 받기
 */
function multiply2(x, y){
    return x * y;
}

const result1 = multiply2(2, 4);
console.log(result1);

/**
 * Arrow 함수
 */
const multiply3 = (x, y) => {
    return x * y;
}
console.log(multiply3(3, 4));

const multiply4 = (x, y) => x * y;
console.log(multiply4(5, 6));

//위와 동일한 함수
const multiplyTwo = function(x,y) {
    return x * y;
}
console.log(multiplyTwo(5, 6));
console.log('------------');

const multiply5 = x => x * 2;
console.log(multiply5(5));

const multiply6 = x => y => z => `x : ${x} y : ${y} z : ${z}`;
console.log(multiply6(1)(2)(3));

//위와 동일한 함수
function multiply7(x) {
    return function(y) {
        return function(z) {
            return `x : ${x} y : ${y} z : ${z}`
        }
    }
}
console.log(multiply7(4)(5)(6));
console.log('------------');

const multiplyThree = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}
console.log(multiplyThree(1, 2, 3));

//arguments를 무한히 받을 수 있음
const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));
console.log('------------');

//immediately invoked function
//즉시 실행하는 함수
//(꽤나 사용되는 함수)
(function(x, y) {
    console.log(x * y);
})(4, 5)    //20 출력됨

console.log(typeof multiply); //function
console.log(multiply instanceof Object); //true 출력됨. 좌측이 우측의 인스턴스인가? 즉, 같은 타입인가?
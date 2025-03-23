/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
    console.log(numberOne);
}

levelOne(); // 20

function levelTwo() {
    var numberOne = 40;

    console.log(numberOne); // 가장 가까운 스코프의 값을 가져옴
}

levelTwo(); // 40

console.log(numberOne); // 20

function levelThree() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;

        console.log(`levelThree numberTwo : ${numberTwo}`);
        console.log(`levelThree numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelThree();   // 99 40 40 -> 모든 선언은 가장 가까운 스코프의 선언부터 활용한다
console.log(numberOne); // 20
// console.log(numberTwo); // 에러 발생. ReferenceError: numberTwo is not defined
console.log('-------------');

/**
 * JS -> Lexical Scope
 * 
 * 인터뷰에서 많이 나오는 내용!!!!!!!11
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * <-> Dynamic Scope : 실행한 위치가 상위 스코프를 정한다. 
 */
var numberThree = 3;

function functionOne() {
    var numberThree = 100;

    functionTwo();
}

function functionTwo() {
    console.log(numberThree);
}

functionOne();  // 3 -> Global scope에서 값을 가져옴
console.log('-------------');

var i = 999;

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`); // 10 -> var 키워드의 특징. var는 block level scope를 못만듦. 함수 레벨 스코프만 만들 수 있음
console.log('-------------');

i = 999;

// block level scope
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`); // 999 -> let이나 const 키워드는 block level scope를 만들어낼 수 있다.

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.  
 */
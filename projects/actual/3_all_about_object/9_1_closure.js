/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical 
 * environemnt within which that function was declared.
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 clousre라고 한다.
 */
function getNumber() {
    var number = 5;

    function inngerGetNumger() {
        return number;
    }

    return inngerGetNumger();
}

console.log(getNumber()); // 5

//아래 예제가 clousre가 발생하는 경우
function getNumber2() {
    var number = 5;

    function inngerGetNumger2() {
        return number;
    }

    return inngerGetNumger2;
}

const runner = getNumber2();    // getNumber2 실행이 끝났음에도 불구하고..

console.log(runner); // [Function: inngerGetNumger2]
console.log(runner()); // 5
console.log('------------');

/**
 * Closure를 언제 쓰나요?
 * 
 * 1) 데이터 캐싱
 */
function cacheFunction(newNumb) {
    // 아래 계산은 매우 오래걸린다는 가정을 했을때
    var number = 10 * 10;

    return number * newNumb;
}

console.log(cacheFunction(10));
console.log(cacheFunction(20));
console.log('------------');

// Closure 사용법#1 -  데이터 캐싱 : 매우 오래 걸리는 계산을 반복해서 해야할때
function cacheFunction2() {
    // 아래 계산은 매우 오래걸린다는 가정을 했을때
    var number = 10 * 10;

    function innerCachefunction2(newNumb) {
        return number * newNumb;
    }

    return innerCachefunction2;
}

const runner2 = cacheFunction2(); // 오래 걸리고 복잡한 계산을 한번만 해도됨

console.log(runner2(10));
console.log(runner2(20));
console.log(runner2(30));
console.log('------------');

// Closure 사용법#2 -  데이터 캐싱 : 반복적으로 특정 값을 반환/변경해야할때
function cacheFunction3() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction3();

console.log(runner3());
console.log(runner3()); // 외부에서 number값을 액세스할 수 없으나, increment 함수는 그 number 값을 기억하고 있음
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log('------------');

/**
 * Closure를 언제 쓰나요?
 * 
 * 2) 정보 은닉
 */
function Idol(name, year) {
    this.name = name;

    var _year = year; // this로 접근 못함

    this.sayNameAndYear = function() {
        return `안녕하세요. 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear()); // 안녕하세요. 저는 안유진입니다. 2003에 태어났습니다.

console.log(yuJin.name); // 안유진
console.log(yuJin._year); // undefined -> 객체 프로퍼티로 액세스할 수 없음
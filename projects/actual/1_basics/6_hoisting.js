/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('--------------');

// console.log(name); //undefined라고 출력됨
// var name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

//인터뷰에서 자주 출제되는 문제!!
console.log(yuJin); //에러 발생
let yuJin = '안유진';

console.log(yuJin2); //에러 발생
const yuJin2 = '안유진';

//let과 const도 hoisting이 발생하긴한다. var와 마찬가지로

/**
 * var를 사용하지 않는 이유 (let과 const를 사용하는 이유)
 * 
 * 1. var는 hoisting으로 인해 발생하는 버그를 막아주지 못한다. (initailized하지 않았을때 오류 발생이 아닌 undefined가 출력됨)
 */
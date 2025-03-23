/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); //string 32 출력됨
console.log('------------');

//암묵적
// (사용하라는 것이 아님. 선임한테 뒷통수 맞을수도)
let test = age + '';
console.log(typeof test, test); //string 32 출력됨

console.log('98' + 2); //982 출력됨
console.log('98' * 2); //196 출력됨
console.log('98' - 2); //96 출력됨
console.log('------------');

/**
 * 명시적 변화 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString()); //string 99
console.log(typeof (true).toString(), (true).toString()); //string true
console.log(typeof (Infinity).toString(), (Infinity).toString()); //string Infinity
console.log('------------');

//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0')); //정수로 변환해라 number 0
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); //실수로 변환해라 number 0.99
console.log(typeof +'1', +'1'); //number 1
console.log('------------');

/**
 * Boolean 타입으로의 변환
 * 
 * 실무에서 굉장히 많이 쓰임
 */
console.log(!'x'); //false 
console.log(!!'x'); //true (원래의 Boolean으로 만드는. String에 값이 있으면 true임)

console.log(!!''); //false

console.log(!!0); //false
console.log(!!'0'); //true

console.log(!!'false'); //true
console.log(!!false); //true

console.log(!!undefined); //false
console.log(!!null); //false

console.log(!!{}); //true. Object는 값이 있든 말든 무조건 true 나옴
console.log(!![]); //true. Array는 값이 있든 말든 무조건 true 나옴

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */
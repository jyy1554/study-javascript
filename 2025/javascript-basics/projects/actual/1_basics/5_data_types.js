/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과 
 * 한개의 오브젝트 타입이 있다. 
 * 
 * 1) Number (숫자)
 * 2) String (문자열) //문자를 하나하나 묶어서 만든 리스트
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    - Function
 *    - Array
 *    - Object
 */

/**
 * Number 타입
 */
const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('--------------');

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof ninfinity);
console.log('--------------');

/**
 * String 타입
 */
const codeFactory = '"코드"팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);
console.log('--------------');

/**
 * Template Literal (`백팁을 써서 사용하는 것. Escaping Character를 사용하지 않고 쓸 수 있다.)
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영'
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQuotation = '아이브\'코드팩토리';
console.log(smallQuotation);

const iveWonYoung2 = `아이브 '''////
장원영`; //template literal의 편리함
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`); //template literal의 편리함
console.log('--------------');

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('--------------');

/**
 * undefined 타입
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
let noInit = undefined; //이렇게 선언안한다. 하면 미친놈
console.log(noInit);
console.log(typeof noInit);
console.log('--------------');

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값을 초기화할때
 * 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init); //object로 출력됨. 일정의 버그로 null 타입이라고 나와야하나 null이 object로써 작성된 레거시 코드가 많아 그대로 두고있음 
console.log('--------------');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용된다.
 * 다른 primitive 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('2');

console.log(symbol1 === symbol2); //false가 출력됨

console.log('--------------');

/**
 * Object 타입
 * 
 * Map
 * 키:밸류 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색'
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('--------------');

/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입이다.
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembersArray);
console.log(typeof iveMembersArray); //object라고 출력됨
console.log('--------------');

/**
 * index
 * 
 * 0부터 시작한다.
 * 1씩 올라간다.
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때, 어떤 타입의 변수를 선언할지 명시를 한다.
 *                  C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고, 값에 의해 타입을 "추론"한다.
 * 
 * JS -> dynamic typing이다.
 */

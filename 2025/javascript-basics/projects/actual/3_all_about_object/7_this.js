/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다.
 * 
 * *****하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */
const testFunction = function () {
    return this;
}

console.log(testFunction());
console.log(testFunction() === globalThis); //true 즉, 실제 this는 global과 맵핑이 된다.

const yuJin = {
    name: '안유진',
    year: 2003,
    sayHello: function() {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

console.log(yuJin.sayHello());

function Person(name, year) {
    this.name = name;
    this.year = year;
    
    this.sayHello = function () {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function() {
    return `${this.name}이 춤을 춥니다.`;
}
console.log(yuJin2.dance());    // 안유진이 춤을 춥니다. => 객체의 메서드로 (가장 상위) 함수를 선언하면 this가 자동으로 실행하는 대상 객체로 맵핑이 되지만,

Person.prototype.dance2 = function() {
    function dance3() {
        return `${this.name}이 춤을 춥니다.`;
    }

    return dance3();
}
console.log(yuJin2.dance2());   // undefined이 춤을 춥니다. => 그 외의 위치에 함수를 선언을 하게되면, 무조건 글로벌 오브젝트에 맵핑이 됨
console.log('---------------');

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 * 
 * 1) 일반 함수를 호출할 땐 this가 최상위 객체(global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 */

/**
 * (원하는 함수에) 우리가 원하는 값으로 this를 맵핑하는 방법
 * 
 * 1) apply()
 * 2) call()
 * 3) bind() 
 */
function returnName() {
    return this.name;
}

console.log(returnName()); // undefined

const yuJin3 = {
    name: '안유진',
}

console.log(returnName.call(yuJin3)); // 안유진
console.log(returnName.apply(yuJin3)); // 안유진

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야한다.
 */
function multiply(x, y, z) {
    return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5)); // 안유진 / 결과값 : 60
console.log(multiply.apply(yuJin3, [3, 4, 5])); // 안유진 / 결과값 : 60

/**
 * bind()
 * 
 * this를 바인딩 하고 나중에 사용할 수 있음
 */
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);   // 함수가 바로 실행되지 않음
console.log(laterFunc); // [Function: bound multiply]
console.log(laterFunc()); // 안유진 / 결과값 : 60

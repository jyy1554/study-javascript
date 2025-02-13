/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의 '상속'에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__); // [Object: null prototype] {} 출력됨

//생성자 함수를 만듦
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}
console.log(IdolModel.prototype);   // {} 출력됨

console.dir(IdolModel.prototype, {
    showHidden: true,
});

console.log(IdolModel.prototype.constructor === IdolModel); // true 
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true
console.log('--------------');

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__);   // {}
console.log(yuJin.__proto__ === IdolModel.prototype);   // true

console.log(testObj.__proto__ === Object.prototype);    // true. testObj는 Object prototype을 상속받았다.
console.log('--------------');

console.log(IdolModel.__proto__ === Function.prototype); // true 즉, IdolModel의 부모는 Function이다
console.log(Function.prototype.__proto__ === Object.prototype); // true 즉, Function prototype의 부모는 Object이다. 
                                                                // 따라서, IdolModel은 Object까지 상속받는 것
console.log(IdolModel.prototype.__proto__ === Object.prototype); // IdolModel prototype의 최상위 객체는 Object prototype이다.
                                                                // IdolModel prototype은 Object prototype을 상속받았다.
console.log('--------------');

console.log(yuJin.toString());  //에러가 안남. 그럼 toString을 정의한지 없는데 어디서 왔을까?
console.log(Object.prototype.toString());   // 상속한 대상의 모든 프로퍼티를 상속받은 child가 모두 사용할 수 있다. => prototype chain
console.log('--------------');

/**
 * Prototype chain이 유용한 이유
 */
function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());

console.log(yuJin2.sayHello === wonYoung2.sayHello); // false 즉, 서로 다른 메모리 공간을 차지한다는 의미 => 리소스를 비효율적으로 사용중
console.log(yuJin2.hasOwnProperty('sayHello'));   // true. yuJin2의 고유 프로퍼티라는 의미. 상속받은 프로퍼티인지 고유의 프로퍼티인지 알 수 있음
console.log('--------------');

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
}   // IdolModel3는 IdolModel3.prototype을 상속받게됨

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);

console.log(yuJin3.sayHello()); // IdolModel3의 인스턴스인 yuJin3는 IdolModel3.prototype을 상속받게됨
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello); // true. 즉, sayHello를 한공간에서만 저장한다.
console.log(yuJin3.hasOwnProperty('sayHello')); // false. 즉, yuJin3 객체 안에 선언된 프로퍼터가 아님. 즉, 상속받은 프로퍼티라는 것을 유추할 수 있음
console.log('--------------');

// static method 선언하는 법
IdolModel3.sayStaticHello = function () {
    return `안녕하세요. 저는 static method입니다.`;
}

console.log(IdolModel3.sayStaticHello());   // 이거는 되나, 인서턴스에서는 실행 불가능. static method이므로

/**
 * Overriding
 * 
 * 덮어쓰기
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return '안녕하세요. 저는 인스턴스 메서드입니다!';
    }
}

IdolModel4.prototype.sayHello = function () {
    return '안녕하세요. 저는 protoype 메서드입니다!';
}

const yuJin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 override와 똑같음
console.log(yuJin4.sayHello());// 안녕하세요. 저는 인스턴스 메서드입니다! => 즉, 상속받은 sayHello를 인스턴스의 sayHello로 덮어씀

/**
 * getPrototypeOf, setPrototypeOf
 * (proto 확인, proto 변경)
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {    // 함수를 똑같은 이름으로 선언하면 덮어씌워짐
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function() {
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);   // { sayHello: [Function (anonymous)] } 즉, IdolModel prototype이므로
console.log(gaEul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true. getPrototypeOf : gaEul의 __proto__를 가져옴
console.log('--------------');

console.log(gaEul.sayHello());  // 실행가능. IdolModel prototype을 상속받았기 때문에
console.log(ray.dance());   //실행가능.
// console.log(ray.sayHello());    //불가. 에러발생.
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);  // true

Object.setPrototypeOf(ray, IdolModel.prototype); // proto를 바꿈. 즉 상속하는 대상을 바꿈
console.log(ray.sayHello());    // 실행가능
console.log('--------------');

console.log(ray.constructor === FemaleIdolModel); // 원래 이래야하나, false가 나옴. 프로토를 바꿨기 때문에 false임
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true
console.log('--------------');

console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);  // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);  // true

console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false. 변경되지는 않음
console.log('--------------');

FemaleIdolModel.prototype = IdolModel.prototype;    // prototype을 직접 변경

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true. 왜냐하면 FemaleIdolModel로 생성했기 때문에..
console.log(FemaleIdolModel.prototype === IdolModel.prototype);   // true
console.log(Object.getPrototypeOf(eSeo) === IdolModel.prototype); // true
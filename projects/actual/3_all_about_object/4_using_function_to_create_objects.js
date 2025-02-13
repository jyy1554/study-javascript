/**
 * Using function to create objects
 */
function IdolModel(name, year) {    // 생성자 함수. 함수형이 먼저 나오고 class가 나중에 나옴
    this.name = name;
    this.year = year;

    // return {};  // 이렇게 하면 안됨. 그냥 {}가 반환됨

    this.dance = function() {   // 함수는 이렇게
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);    // new 꼭 써야됨
console.log(yuJin);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);   // new를 안 쓰면 그냥 함수로 실행되어 반환값이 없음
                                        // 또한, new 키워드를 사용하지 않고 생성자 함수를 실행할 경우, this가 global 키워드에 붙여버려서 맨아래처럼 됨
                                        // 따라서, 하지 말라는 거임!!!!!!1
console.log(yuJin2);    // undefined 출력됨 

console.log(globalThis.name);   // 안유진 출력됨
console.log('----------------');

function IdolModel2(name, year) {
    console.log(this);
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin3 = new IdolModel2('안유진', 2003);  // IdolModel2 {} 출력됨. new 키워드를 썼기 때문에 IdolModel2 인스턴스가 출력됨
                                            // 따라서, new 키워드를 쓰면 함수에서는 this를 어디에 맵핑하는지 결정하게된다.
const yuJin4 = IdolModel2('안유진', 2003);  // new 키워드를 썼지 않기 때문에 자동으로 global this가 출력됨
console.log('----------------');

/**
 * 자바스크립트에서는 new를 빼먹는 실수를 많이 하기 때문에
 */
function IdolModel3(name, year) {
    console.log(new.target); // 이것을 추가함 (new에 target을 invoke해보고 출력함)
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}
const yuJin5 = new IdolModel3('안유진', 2003);  // [Function: IdolModel3] 즉, new 키워드를 쓴 함수가 출력됨
const yuJin6 = IdolModel3('안유진', 2003);  // undefined 출력됨
console.log('----------------');

// new를 빼먹는 실수를 방지하고자
function IdolModel4(name, year) {
    if(!new.target) {   // undefined일때 실행됨
        return new IdolModel4(name, year);
    }
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin7 = new IdolModel4('안유진', 2003);
console.log(yuJin7);    // IdolModel4 { name: '안유진', year: 2003, dance: [Function (anonymous)] }

const yuJin8 = IdolModel4('안유진', 2003);
console.log(yuJin8);    // IdolModel4 { name: '안유진', year: 2003, dance: [Function (anonymous)] } 위와 동일하게 출력됨
console.log('----------------');

// -------------------------------------------- //

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin11 = new IdolModelArrow('안유진', 2003); // 에러 발생. TypeError: IdolModelArrow is not a constructor
                                // 즉, arrow 함수는 생성자 함수로 사용 불가. 일반 함수만 생성자 함수로 사용 가능



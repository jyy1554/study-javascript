/**
 * Super and Override
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요. ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    // 노래 / 춤
    part;

    constructor(name, year, part) {
        super(name, year);    // 기존 생성자를 상속받고 싶은 경우, super 키워드를 씀. IdolModel(name, year);과 같은 의미
        this.part = part;
    }

    sayHello() {
        // return `안녕하세요. ${this.name}입니다. ${this.part} 파트를 맡고있습니다.`;

        // 중복을 줄이기 위해 override함. super 키워드를 이용해 부모 클래스의 sayHello를 실행.
        return `${super.sayHello()} ${this.part} 파트를 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());   // 안녕하세요. 장원영입니다.

console.log(yuJin.sayHello()); // 안녕하세요. 안유진입니다. 보컬 파트를 맡고있습니다.

/**
 * Inheritance 상속
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return `${this.name}이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003 }

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin); // MaleIdolModel { name: '지민', year: 1995 }

console.log(yuJin.dance()); // 안유진이 춤을 춥니다.
console.log(yuJin.name); // 안유진

console.log(jiMin.sing()); // 지민이 노래를 부릅니다.
console.log(jiMin.year); // 1995
console.log('-----------');

console.log(yuJin instanceof IdolModel); // true
console.log(yuJin instanceof FemaleIdolModel); // true
console.log(yuJin instanceof MaleIdolModel); // false
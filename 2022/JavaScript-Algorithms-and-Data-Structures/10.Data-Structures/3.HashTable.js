class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    // const arr = [key, value];
    const index = this._hash(key);

    // [, , , , [[key, value]], , ] -> [, , , [[key, value], [key, value]], , ]
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  values() {
    const valuesArr = [];

    for (const arrayGroup of this.keyMap) {
      if (arrayGroup) {
        for (const arr of arrayGroup) {
          if (!valuesArr.includes(arr[1])) {
            valuesArr.push(arr[1]);
          }
        }
      }
    }

    return valuesArr;
  }

  keys() {
    const keysArr = [];

    for (const arrayGroup of this.keyMap) {
      if (arrayGroup) {
        for (const arr of arrayGroup) {
          if (!keysArr.includes(arr[0])) {
            keysArr.push(arr[0]);
          }
        }
      }
    }

    return keysArr;
  }
}

const ht = new HashTable(4);
ht.set("hello world", "goodbye!!");
ht.set("dogs", "are cool");
ht.set("cats", "are fine");
ht.set("cats", "are not fine");
ht.set("i love", "pizza");
ht.get("cats");
ht.keys();
ht.values();

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
}

const ht = new HashTable();
ht.set("hello world", "goodbye!!");
ht.set("dogs", "are cool");
ht.set("cats", "are fine");
ht.set("i love", "pizza");

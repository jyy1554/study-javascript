function hash(key, arrayLen) {
  let total = 0;

  for (const char of key) {
    const value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}

console.log(hash("pink", 10)); // 0
console.log(hash("orangered", 10)); // 7
console.log(hash("cyan", 10)); // 3

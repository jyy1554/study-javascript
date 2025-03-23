function foo (a) {
  return a + 3;
}

const arr = [ foo(1), foo(2), foo(3) ];

console.log(arr); // [4, 5, 6]
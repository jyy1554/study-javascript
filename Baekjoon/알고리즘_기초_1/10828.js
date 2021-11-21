const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const len = inputs.shift(); 
const stack = [];
const result = [];

for (let i=0; i < len; i++) {
  const [a,b] = inputs[i].split(" ");

  switch (a) {
    case "push": stack.push(parseInt(b));
      break;
    case "pop":
      stack.length == 0 ? result.push(-1) : result.push(stack.pop());
      break;
    case "top":
      stack.length == 0 ? result.push(-1) : result.push(stack[stack.length-1]);
      break;
    case "size": result.push(stack.length);
      break;
    case "empty": stack.length == 0 ? result.push(1) : result.push(0);
      break;
  }
}

console.log(result.join('\n'));


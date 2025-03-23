const playground = document.getElementById('playground');

const parentElement = document.createElement('div');
const childElement1 = document.createElement('p');
const childElement2 = document.createElement('span');

parentElement.append(childElement1, childElement2);
playground.append(parentElement);

console.log(parentElement.firstChild); //<p></p>
console.log(parentElement.lastChild); //<span></span>
console.log(childElement1.nextSibling); //<span></span>
console.log(childElement2.previousSibling); //<p></p>
console.log(childElement1.parentNode); //<div>...</div>
const playground = document.getElementById('playground');
// const playground = document.querySelector('#playground'); // #: id, .: class

playground.append(' Wizard', ' ', 'Crystal Ball', ' ', 'Spell Book');

const magicalOrb = document.createElement('div');
magicalOrb.textContent = 'Crystal Ball';
playground.append(magicalOrb);

const scrollOfWidsom = document.createElement('p');
magicalOrb.append(scrollOfWidsom);

scrollOfWidsom.innerText = 'Ancient wisdom lies within';
console.log(scrollOfWidsom.innerText);
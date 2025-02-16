const playground = document.getElementById('playground');

const magicWand = document.createElement('div');
magicWand.setAttribute('id', 'wand1');
magicWand.setAttribute('class', 'magical-item wand');
magicWand.textContent = "Magic Wand";
playground.append(magicWand);

console.log(magicWand.getAttribute('id'));
console.log(magicWand.getAttribute('class'));
console.log(magicWand.id);

magicWand.id = "wand3";

console.log(magicWand.id);

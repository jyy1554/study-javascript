const playground = document.getElementById('playground');

const fragment = document.createDocumentFragment();

for (let i=0; i < 5; i++) {
    const magicalItem = document.createElement('li');
    magicalItem.textContent = `Magical Item ${i + 1}`;
    fragment.append(magicalItem);
}

const spellList = document.createElement('ul');
playground.append(spellList);

spellList.append(fragment);
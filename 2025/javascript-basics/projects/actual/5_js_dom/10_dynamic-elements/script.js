const playground = document.getElementById('playground');

const spellList = document.createElement('ul');
playground.append(spellList);

function addSpell(spellName) {
    const spell = document.createElement('li');
    spell.textContent = spellName;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        spell.remove();
    })
    spell.append(removeButton);
    spellList.append(spell);
}

addSpell('Fireball');
addSpell('Frost Nova');
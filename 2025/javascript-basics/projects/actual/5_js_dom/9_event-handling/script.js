const playground = document.getElementById('playground');

const magicButton = document.createElement('button');

magicButton.textContent = "Cast Spell";
playground.append(magicButton);

// magicButton.addEventListener('click', () => {
//     alert('Magic Sparkles fill the air!');
// });

function spellCast() {
    alert('Magic Sparkles fill the air!');
}

magicButton.addEventListener('click', spellCast);

magicButton.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'purple';
});

magicButton.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = '';
})

// Later, if you want to remove the event listener:
// magicButton.removeEventListener('click', spellCast);
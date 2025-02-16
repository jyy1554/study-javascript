const playground = document.getElementById('playground');

const secretScroll = document.createElement('div');

secretScroll.id = 'secretScroll';
secretScroll.dataset.spell = 'invisibility';
secretScroll.dataset.components = 'moonlight,shadow,essence';
secretScroll.textContent = "Ancient Spell Scroll";

playground.append(secretScroll);

console.log("Spell type:", secretScroll.dataset.spell);
console.log("Components:", secretScroll.dataset.components.split(','));
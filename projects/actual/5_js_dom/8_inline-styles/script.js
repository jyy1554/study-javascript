const playground = document.getElementById('playground');

const enchantedGem = document.createElement('div');

enchantedGem.textContent = "💎";
enchantedGem.style.fontSize = '50px';
enchantedGem.style.transition = 'all 2s';

playground.append(enchantedGem);

setInterval(() => {
    enchantedGem.style.transform = `rotate(${Math.random() * 360}deg)`;
    enchantedGem.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}, 2000);
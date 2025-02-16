const playground = document.getElementById('playground');

const shapeShifter = document.createElement('div');

shapeShifter.textContent = "Shapeshifter";
playground.append(shapeShifter);

shapeShifter.classList.add('magical', 'creature');
console.log("Initial classes:", shapeShifter.className); // Initial classes: magical creature

shapeShifter.classList.remove('creature');
shapeShifter.classList.add('humanoid');
console.log("Updated classes:", shapeShifter.className); // Updated classes: magical humanoid

shapeShifter.classList.toggle('invisible');
console.log(shapeShifter.classList.contains('invisible')); // true
shapeShifter.classList.toggle('invisible');
console.log(shapeShifter.classList.contains('invisible')); // false

shapeShifter.classList.toggle('invisible', Math.random() > 0.5);
shapeShifter.classList.replace('humanoid', 'beast');
console.log("Updated classes:", shapeShifter.className);
console.log("Third class:", shapeShifter.classList.item(2));


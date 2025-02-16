const playground = document.getElementById('playground');

const template = document.getElementById('wizard-template');

function createWizard(name, speciality) {
    const wizardElement = template.content.cloneNode(true);
    wizardElement.querySelector('.wizard-name').textContent = name;
    wizardElement.querySelector('.wizard-speciality').textContent = speciality;
    playground.append(wizardElement);
}

createWizard('Merlin', 'Time Magic');
createWizard('Gandalf', 'Fireworks');
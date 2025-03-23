const playground = document.getElementById('playground');

const temporaryElement = document.createElement('p');
temporaryElement.textContent = 'Now you see me...';
playground.append(temporaryElement);

// temporaryElement.remove();
playground.removeChild(temporaryElement);

const fruitBasket = document.createElement('div');
fruitBasket.innerHTML = `
    <p>Apple</p>
    <p>Banana</p>
    <p>Cherry</p>
`;
playground.append(fruitBasket);

while (fruitBasket.firstChild) { // child가 몇개인지 모르므로 이렇게 지워도됨
    fruitBasket.removeChild(fruitBasket.firstChild);
}
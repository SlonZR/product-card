import {productsCard} from './productArray.js';

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

function getCardCount() {
    let count;
    while (true) {
        const input = prompt("Сколько карточек отобразить? От 1 до 5");
        if (input === null) return 0; 
        count = parseInt(input, 10);
        if (!isNaN(count) && count >= 1 && count <= 5) {
            return count; 
        }
        alert("Некорректный ввод! Пожалуйста, укажите число от 1 до 5.");
    }
}
 function renderCards(cardsArray) {
    if (!productList || !productTemplate) return;
    productList.innerHTML = '';
    cardsArray.forEach(product => {
        const productClone = productTemplate.content.cloneNode(true);

        const img = productClone.querySelector('.product-image'); 
        if (img) {
            img.src = product.image; 
            img.alt = product.name;
        }
        productClone.querySelector('.product-category').textContent = product.category;
        productClone.querySelector('.product-name').textContent = product.name;
        productClone.querySelector('.product-description').textContent = product.description;
        productClone.querySelector('.product-compound').textContent = 'Состав:';

        const compoundList = productClone.querySelector('.compound-list');
        if (compoundList && product.compound) {
            compoundList.innerHTML = ''; 

            product.compound.forEach(item => {
                const ingredients = item.split(',').map(str => str.trim());
                
                ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    compoundList.appendChild(li); 
                });
            });
        }
        productClone.querySelector('.product-price').innerHTML = `
            <span>Цена:</span>
            <span>${product.price} ₽</span>
        `;
        productList.appendChild(productClone);
    });
}

function init() {
    const countToDisplay = getCardCount();
    const selectedProducts = productsCard.slice(0, countToDisplay);
    renderCards(selectedProducts);
}
init();

const getProducts = Object.keys(productsCard)
  .reduce((acc, key) => {
    const value = productsCard[key];
    acc.push([key, value]);
    return acc;
}, [])
console.log(getProducts)
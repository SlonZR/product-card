import {productsCard} from './productArray.js';

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

productsCard.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.product-foto').textContent = product.foto
    productClone.querySelector('.product-category').textContent = product.category
    productClone.querySelector('.product-name').textContent = product.name
    productClone.querySelector('.product-discription').textContent = product.discription
    productClone.querySelector('.product-compound').textContent = product.compound
    productClone.querySelector('.product-price').textContent = product.price

    productList.appendChild(productClone)
})

    console.log(productList)
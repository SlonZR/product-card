//покраска первой карточки

const productCard = document.querySelector('.products__item.card');
const changeColorCard = document.querySelector('#change-color-card');

changeColorCard.addEventListener('click', () => {
  productCard.style.backgroundColor = 'orange'
})


//покраска всех карточек

const productCards = document.querySelectorAll('.products__item.card');
const changeAllColorCard = document.querySelector('#change-all-color-card');

changeAllColorCard.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = 'green')
})

// открыть сайт Google

const openGoogleButton = document.querySelector('#open-google');
const googleURL = 'https://google.com';

openGoogleButton.addEventListener('click', () => {
  window.open(googleURL)
})

//вывод консоль лог, alert

const buttonOutputConsole = document.querySelector('#button-output');

buttonOutputConsole.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert('Danger')
  console.log(message)
}

// вывод в консоль title

const cursorInTitle = document.querySelector('.title.catalog__title');

cursorInTitle.addEventListener('mouseover', function() {
  console.log('Выбери свой продукт')
})


// смена цвета кнопки

const colorChangeButton = document.getElementById('colorButton');

colorChangeButton.addEventListener('click', () => {
  
  colorChangeButton.classList.toggle('active');
})

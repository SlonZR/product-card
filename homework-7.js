// #3

function showWeather(city, temperature) {
  console.log(`Cейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}

showWeather('Kazan', '25')

// #4

let speedLight = 299792456

  if (speedLight > 299792458) { 
  console.log('сверхсветовая скорость')
  } 
  else if (speedLight === 299792458) {
  console.log('световая скорость') 
  }
  else { 
  console.log('субсветовая скорость')
}

//#5

let product = 'Car';
let price = 600;

const checkBudget = (currentBudget) => {
  if(currentBudget > price) {
    console.log('Автомобиль приобретен. Спасибо за покупку!');
  }

  else {
  let result = price - currentBudget; 
    console.log(`Вам не хватает ${result}. Пополните баланс.`)
  }
} 
checkBudget(500);

//#6

const checkErrors = (text1, text2) => {}

//#7

let executeHomework = text1;
let fixErrors = text2;
const learnLanguage = english;
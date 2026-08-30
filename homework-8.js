// #3 создать объект на основании личных данных

const person = {
  name: 'Rustem',
  familia: 'Nasibyllin',
  email: 'rurus453@gmail.com',
  job: 'frontend-junior',
  age: 45,
  country: 'Russia',
  city: 'Nabergnue Chelnu',
  hobby: 'tennis',
  favoriteBook: 'New week',
}


//#4 создать объект, который будет хранить данные об автомобиле (выпуск, цвет и т.д.)

const car = {
  make: 'Atom',
  model: 'sx 300',
  year: '2030',
  color: 'green',
  transmission: 'CVT',
}
  car.carOwner = person 
  console.log(car)


  //#5 написать функцию с аргументом в п.4

function hasMaxSpeed(car) {
  if ('maxSpeed' in car) {
    return;
  }
  else (car.maxSpeed = 250)
}
hasMaxSpeed(car)
console.log(car.maxSpeed)


//#6

function showData(object, key) {
  console.log(car, object[key])
}
showData(car, 'model')

//#7 массив

const products = [
  'apele',
  'chese',
  'chicken',
  'fish',
  'jam',
  'bread',
  'cherry',
  'juice',
]


//#8 arrayBook 

const book = [
  {title: 'Маленький принц', author: 'Антуан де Сент-Экзюпери', year: 1943, color: 'blue', genre:'философская сказка'},
  {title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1966, color: 'black', genre:'мистический роман'},
  {title: '1984', author: 'Джордж Оруэл', year: 1949, color: 'white', genre:'антиутопия'},
]
console.log(book)

//#9 

const book1 = [
  {title: 'Маленький принц', year: 1943},
  {title: 'Мастер и Маргарита', year: 1966}, 
  {title: '1984', year: 1949},
]
const bookPhantasy = [
  {title: 'Spider Men', year: 2012}
]
const books = [...book1, ...bookPhantasy];

console.log(books)


//#10 (сделал только с помощью ИИ)

function showRareBook(books) {
  return books.map(book=>{
    return {
      ...book,
      isRare: book.year > 1945
    }
  })
}
console.log(showRareBook(books))
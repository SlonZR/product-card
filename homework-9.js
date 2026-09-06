import { commentsUser } from './comments.js'; 

//# 1.2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArray = numbers.slice(4, 10)
console.log(newArray)


//# 1.3

const films = [
  {name: 'Побег из Шоушенко', year: 2006, genre: 'Драма'},
  {name: 'Зеленая книга', year: 2018, genre: 'комедийная драма'},
  {name: '1+1', year: 2018, genre: 'комедийная драма'}
]
const checkArray = films.filter(film => film.name.includes('1+1'))

console.log(checkArray) 

const movieSearch = (films, query) => {
  if (!Array.isArray(films) || typeof query !== 'string') return false;
  return films.some(film => film.name.includes(query)) 
}
const myFilm = movieSearch(films, '1+1')
console.log(myFilm)


//#1.4

function reverseArr(newFilms) {
  return newFilms.reverse();
}
reverseArr(films);
reverseArr(numbers);

console.log(films, numbers)

// Уровень 2.7 (создать массив с фильтром почты .com)
 
const reviews = commentsUser.filter(post => post.email.includes('.com'))
console.log(reviews)

//#2.8 *(перебрать массив с условием (ID<=5)===postId:2, другие с id>5 postId:1)

const userData = commentsUser.map(item => {
  let clonePostId;
  if (item <= 5) {
    clonePostId = 2
  } else {
    clonePostId = 1
  }
  return { 
    ...item, 
    postid: clonePostId
  };
})
console.log(userData)

//#2.9 (Перебрать массив, что бы объекты состояли только из айди и имени)

const nameId = commentsUser.map(item => {
  return {
    id: item.id,
    name: item.name
  };
});

console.log(nameId)

//#2.10 (Перебираем массив, добавляем объектам свойство isInvalid и проверяем)

commentsUser.forEach(item => {item.isInvalid = item.body.length > 180; 
})

console.log(commentsUser)

//#3.11 (Используя reduce, вывести массив почт и провернуть тоже самое с помощью метода map)

const listMail = commentsUser.map(item => {
  return (item.email)})
  
console.log(listMail)

const userMail = commentsUser.reduce((result, item) => {
  result.push(item.email);
  return result;
}, []);
console.log(userMail)

//#3.12 (Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.)

const message = userMail.join(';')

console.log(message);

const createLine = listMail.toString()

console.log(createLine)

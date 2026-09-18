const openModalBtn = document.getElementById('openModalBtn')
const modal = document.getElementById('regModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const regForm = document.getElementById('regForm');

openModalBtn.addEventListener('click', () => {
  modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

regForm.addEventListener('submit', (event) => {
  const password = document.getElementById('password');
  const passwordRepeat = document.getElementById('password-repeat');
    if (password.value !== passwordRepeat.value) {
      event.preventDefault(); 
      alert('Вы ввели неправильный пароль');
      passwordRepeat.focus();
    return;
    }

  const formData = new FormData(regForm);
    console.log('Регистрация прошла успешно. Данные формы:');
  
    for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  
  alert('Вы зарегистрировались!');


const emailForm = document.querySelector('#emailForm')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const formData = new FormData(emailForm);
  const emailValue = formData.get('subscribe-email');
  
  if (!emailValue || emailValue.trim() === '') {
    alert('Поле Email не должно быть пустым!');
    return;
  }
const result = {
    email: emailValue.trim()
  };

  console.log(result);
})})
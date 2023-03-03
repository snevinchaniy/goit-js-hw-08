import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

// Отримання даних та збереження в localStorage
function onFormInput() {
  const formData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Вивід даних в консоль та їх видалення з localStorage після відправки
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

// Перевірка даних в localStorage і запис в форму якщо вони є
function populateForm() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveData === null) {
    return;
  }
  email.value = saveData.email;
  message.value = saveData.message;
}

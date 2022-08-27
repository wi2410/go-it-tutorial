
// task 2
// // Реалізуйте функціонал пошуку даних по юзеру з API при сабміті форми і виведення їх на сторінку
// // https://agify.io/

const formEl = document.querySelector('form');
formEl.addEventListener('submit', onFormSubmit);
const listEl = document.querySelector('.markup');


function onFormSubmit(ev) {
    ev.preventDefault();
    const inputName = ev.currentTarget.elements.name.value;
    getName(inputName).then(renderMarkup);
}

function renderMarkup({name, age}) {
    const markup = `<li>${name}: ${age}</li>`
    listEl.innerHTML = markup;
}

function getName(name) {
    return fetch(`https://api.agify.io?name=${name}`).then(res => res.json());
}

// task 3
// // Реалізуйте функціонал створення зображень при клікові на кнопку BUTTON
// // https://dog.ceo/dog-api/

// task 4
// // Отримати дані рандомного юзера і вивести їх на сторінку
// // https://randomuser.me/api/

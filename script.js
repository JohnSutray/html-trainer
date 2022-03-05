function twice(num) {
  return num * 2;
}

const twiceResult = twice(5);

function calculateRoomSize(flatArea, roomAmount) {
  const roomArea = flatArea / roomAmount;
  const shortRoomArea = roomArea.toFixed(2);
  return `В квартире площадью ${flatArea} м2 и ${roomAmount} комнатами площать комнаты будет ${shortRoomArea} м2`;
}

console.log(calculateRoomSize(40, 3));
//создаём переменные с ссылками на хтмл элемент(полей и кнопок)
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const salaryInput = document.querySelector('#salary');
const registerButton = document.querySelector('#register');

//создаём функцию которая превращает данные пользователя в хтмл элемент
function createUserComponent(user) {
  const userHtmlString = `
  <div class="user">
    <div class="user-field"> ${user.firstName}</div>
    <div class="user-field"> ${user.lastName}</div>
    <div class="user-field">${user.salary} $</div>
  </div>
  `;
  const userHtmlElement = createHtml(userHtmlString);
  return userHtmlElement;
}

function registerUser() {
  //создаём переменную с объектом
  //в поля объекта вписываем данные из полей ввода, в одну переменную все данные
  const user = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    salary: salaryInput.value,
  };
  //создаём переменную в которую положим кусок хтмл созданный на основе данныъ пользвателя
  const userHtml = createUserComponent(user);

  document.querySelector('.user-list').appendChild(userHtml);
}
//функция создаёт хтмл из строки
function createHtml(innerHtml) {
  const div = document.createElement('div');
  div.innerHTML = innerHtml.trim();

  return div.firstChild;
}
//заставили на клик кнопки регистр вызывать функцию регистр юзер
registerButton.addEventListener('click', registerUser);



